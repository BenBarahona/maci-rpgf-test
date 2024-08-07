import { config } from "~/config";
import { Layout } from "~/layouts/DefaultLayout";
import { cn } from "~/utils/classNames";
import { formatDate } from "~/utils/time";

const steps = [
  {
    label: "Registro",
    date: config.startsAt,
  },
  {
    label: "Revisión y aprobación",
    date: config.registrationEndsAt,
  },
  {
    label: "Votación",
    date: config.reviewEndsAt,
  },
  {
    label: "Contando",
    date: undefined,
  },
  {
    label: "Distribución",
    date: undefined,
  },
];

export default function InfoPage() {
  const { progress, currentStepIndex } = calculateProgress(steps);

  return (
    <Layout>
      <div className="hidden h-4 w-4/5 overflow-hidden rounded-full border md:block">
        <div
          className={"h-full bg-white transition-all"}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="px-2 md:flex">
        {steps.map((step, i) => (
          <div
            key={i}
            className={cn("border-b border-l p-4 transition-opacity md:w-1/5", {
              ["opacity-50"]: currentStepIndex <= i,
            })}
          >
            <h3 className="font-semibold">{step.label}</h3>
            {step.date && <div>{formatDate(step.date)}</div>}
          </div>
        ))}
      </div>
    </Layout>
  );
}

function calculateProgress(steps: { label: string; date?: Date }[]) {
  const now = Number(new Date());

  let currentStepIndex = steps.findIndex(
    (step, index) =>
      now < Number(step.date) &&
      (index === 0 || now >= Number(steps[index - 1]?.date)),
  );

  if (currentStepIndex === -1) {
    currentStepIndex = steps.length;
  }

  let progress = 0;

  if (currentStepIndex > 0) {
    // Calculate progress for completed segments
    for (let i = 0; i < currentStepIndex - 1; i++) {
      progress += 1 / (steps.length - 1);
    }

    // Calculate progress within the current segment
    const segmentStart =
      currentStepIndex === 0 ? 0 : Number(steps[currentStepIndex - 1]?.date);
    const segmentEnd = Number(steps[currentStepIndex]?.date);
    const segmentDuration = segmentEnd - segmentStart;
    const timeElapsedInSegment = now - segmentStart;

    progress +=
      Math.min(timeElapsedInSegment, segmentDuration) /
      segmentDuration /
      (steps.length - 1);
  }

  progress = Math.min(Math.max(progress, 0), 1);

  return { progress, currentStepIndex };
}
