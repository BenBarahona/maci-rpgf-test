import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useAccount } from "wagmi";
import { Button } from "~/components/ui/Button";
import { Dialog } from "~/components/ui/Dialog";
import { Form } from "~/components/ui/Form";
import { config } from "~/config";
import { AllocationFormWrapper } from "~/features/ballot/components/AllocationList";
import { BallotSchema, type Vote } from "~/features/ballot/types";
import { LayoutWithBallot } from "~/layouts/DefaultLayout";
import { useBallot } from "~/contexts/Ballot";
import { formatNumber } from "~/utils/formatNumber";
import { getAppState } from "~/utils/state";
import { EAppState } from "~/utils/types";

export default function BallotPage() {
  const { address, isConnecting } = useAccount();
  const { ballot } = useBallot();
  const router = useRouter();

  useEffect(() => {
    if (!address && !isConnecting) {
      router.push("/").catch(console.log);
    }
  }, [address, isConnecting, router]);

  const votes = useMemo(
    () => ballot?.votes?.sort((a, b) => b.amount - a.amount),
    [ballot],
  );

  if (!votes) {
    return <EmptyBallot />;
  }

  return (
    <LayoutWithBallot sidebar="right" requireAuth>
      <Form
        schema={BallotSchema}
        defaultValues={ballot}
        values={ballot}
        onSubmit={console.log}
      >
        <BallotAllocationForm />
      </Form>

      <div className="py-8" />
    </LayoutWithBallot>
  );
}

function BallotAllocationForm() {
  const appState = getAppState();
  const { ballot } = useBallot();

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">Revisa tu boleta</h1>
      <p className="mb-6">
        Una vez que haya revisado su asignación de votos, puede enviar su boleta.
      </p>
      <div className="mb-2 justify-between sm:flex">Revisa tu boleta
        {ballot?.votes?.length ? <ClearBallot /> : null}
      </div>
      <div className="relative rounded-2xl border border-gray-300 dark:border-gray-800">
        <div className="p-8">
          <div className="relative flex max-h-[500px] min-h-[360px] flex-col overflow-auto">
            {ballot?.votes?.length ? (
              <AllocationFormWrapper
                disabled={appState === EAppState.RESULTS}
              />
            ) : (
              <EmptyBallot />
            )}
          </div>
        </div>

        <div className="flex h-16 items-center justify-between rounded-b-2xl border-t border-gray-300 px-8 py-4 text-lg font-semibold dark:border-gray-800">
          <div>Votos totales en la boleta</div>
          <div className="flex items-center gap-2">
            <TotalAllocation />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClearBallot() {
  const form = useFormContext();
  const [isOpen, setOpen] = useState(false);
  const { deleteBallot } = useBallot();

  if ([EAppState.TALLYING, EAppState.RESULTS].includes(getAppState()))
    return null;

  const handleClearBallot = () => {
    deleteBallot();
    setOpen(false);
    form.reset({ votes: [] });
  };

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Eliminar todos los proyectos de la boleta
      </Button>

      <Dialog
        title="Estas seguro?"
        size="sm"
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <p className="mb-6 leading-6">
          Esto vaciará tu boleta y eliminará todos los proyectos que tienes agregado.
        </p>
        <div className="flex justify-end">
          <Button
            variant="primary"
            // disabled={isPending}
            onClick={handleClearBallot}
          >
            Si, continuar
          </Button>
        </div>
      </Dialog>
    </>
  );
}

const EmptyBallot = () => (
  <div className="flex flex-1 items-center justify-center">
    <div className=" max-w-[360px] space-y-4">
      <h3 className="text-center text-lg font-bold">Su boleta está vacía</h3>
      <p className="text-center text-sm text-gray-700">
        Su boleta actualmente no tiene ningún proyecto agregado. Navega por los proyectos disponibles.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button as={Link} href={"/projects"}>
          Ver proyectos
        </Button>
      </div>
    </div>
  </div>
);

const TotalAllocation = () => {
  const { sumBallot } = useBallot();
  const form = useFormContext<{ votes: Vote[] }>();
  const votes = form.watch("votes") ?? [];
  const sum = sumBallot(votes);

  return (
    <div>
      {formatNumber(sum)} {config.tokenName}
    </div>
  );
};
