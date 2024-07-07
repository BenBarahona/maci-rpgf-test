import Image from "next/image";
import Link from "next/link";
import { type ComponentPropsWithRef, useCallback } from "react";
import { useEnsAvatar, useEnsName } from "wagmi";
import { FaListCheck } from "react-icons/fa6";

import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { createBreakpoint } from "react-use";
import { toast } from "sonner";

import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";
import { useBallot } from "~/contexts/Ballot";
import { useLayoutOptions } from "~/layouts/BaseLayout";
import { useMaci } from "~/contexts/Maci";
import { ethers } from "ethers";
import type { Address } from "viem";
import { config } from "~/config";
import { zuAuthPopup } from "@pcd/zuauth";
import { ZKEdDSAEventTicketPCDPackage } from "@pcd/zk-eddsa-event-ticket-pcd";
import { generateWitness } from "~/utils/pcd";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });

export const ConnectButton = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "S";

  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
        authenticationStatus,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    suppressHydrationWarning
                    onClick={openConnectModal}
                    className="rounded-full"
                    variant="primary"
                  >
                    {isMobile ? "Conectar" : "Conectar wallet"}
                  </Button>
                );
              }

              if (
                chain.unsupported ??
                ![Number(config.network.id)].includes(chain.id)
              ) {
                return <Chip onClick={openChainModal}>Wrong network</Chip>;
              }

              return (
                <ConnectedDetails
                  account={account}
                  openAccountModal={openAccountModal}
                  isMobile={isMobile}
                />
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};

const ConnectedDetails = ({
  openAccountModal,
  account,
  isMobile,
}: {
  account: { address: string; displayName: string };
  openAccountModal: () => void;
  isMobile: boolean;
}) => {
  const { data: ballot } = useBallot();
  const ballotSize = (ballot?.votes ?? []).length;
  const { isLoading, isRegistered, isEligibleToVote, onZupassSignup } = useMaci();

  const { showBallot } = useLayoutOptions();

  const onError = useCallback(() => toast.error("Signup error"), []);

  //TODO: add user address as watermark
  //TODO: add this eventId and eventName as env. variable
  //TODO: Allow any user to see the signup button and remove the attestation requirement
  const watermark = "0xF4FFaa5bF781903e7187Db65Ee9Bd82153b3F7C1"
  const config = [
    {
      "pcdType": "eddsa-ticket-pcd",
      "publicKey": [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      "eventId": "d2ce5bb2-99a3-5a61-b7e6-1cd46d2ee00d",
      "eventName": "PizzaParty",
    }
  ]

  const handleSignup = async () => {
  const result = await zuAuthPopup({
    fieldsToReveal: {
        revealTicketId: true,
        },
        watermark,
        config
      })
      console.log(watermark);

      console.log("Zupass Result: ", result)
      if(result.type === "pcd") {
          try {
            const jsonPCD = JSON.parse(result.pcdStr)
            const pcd = await ZKEdDSAEventTicketPCDPackage.deserialize(jsonPCD.pcd)
            const proof = generateWitness(pcd)
            const encoder = ethers.AbiCoder.defaultAbiCoder();
            const data = encoder.encode(
                ["uint256[2]", "uint256[2][2]", "uint256[2]", "uint256[38]"],
                [proof._pA, proof._pB, proof._pC, proof._pubSignals],
            ) as `0x${string}`;
            await onZupassSignup(onError, data)
          } catch (e) {
            console.log("Failed", e)
          }
      }
  }

  return (
    <div>
      <div className="flex gap-2 text-white">
        {!isEligibleToVote && <Chip>You are not allowed to vote</Chip>}

        {isEligibleToVote && !isRegistered && (
          <SignupButton
            loading={isRegistered === undefined || isLoading}
            onClick={handleSignup}
          />
        )}
        {isRegistered && showBallot && ballot?.publishedAt && (
          <Chip>Already submitted</Chip>
        )}
        {isRegistered && showBallot && !ballot?.publishedAt && (
          <Chip className="gap-2" as={Link} href={"/ballot"}>
            {isMobile ? <FaListCheck className="h-4 w-4" /> : `Ver Boleta`}
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-xs">
              {ballotSize}
            </div>
          </Chip>
        )}
        <UserInfo
          onClick={openAccountModal}
          address={account.address as Address}
        >
          {isMobile ? null : account.displayName}
        </UserInfo>
      </div>
    </div>
  );
};

const UserInfo = ({
  address,
  children,
  ...props
}: { address: Address } & ComponentPropsWithRef<typeof Chip>) => {
  const ens = useEnsName({
    address,
    chainId: 1,
    query: { enabled: Boolean(address) },
  });
  const name = ens.data ?? undefined;
  const avatar = useEnsAvatar({
    name,
    chainId: 1,
    query: { enabled: Boolean(name) },
  });

  return (
    <Chip className="gap-2" {...props}>
      <div className="h-6 w-6 overflow-hidden rounded-full">
        {avatar.data ? (
          <Image width={24} height={24} alt={name!} src={avatar.data} />
        ) : (
          <div className="h-full bg-gray-200" />
        )}
      </div>
      {children}
    </Chip>
  );
};

const SignupButton = ({
  loading,
  ...props
}: ComponentPropsWithRef<typeof Chip> & { loading: boolean }): JSX.Element => {
  return (
    <Chip className="gap-2" disabled={loading} {...props}>
      {loading ? "Cargando..." : "Validar Votante"}
    </Chip>
  );
};
