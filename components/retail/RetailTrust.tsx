import { Reveal } from "@/components/motion/Reveal";

type Props = {
  label: string;
  marks?: string[];
};

/** Quiet sector line — no fake logo wall. */
export function RetailTrust({ label, marks = [] }: Props) {
  const hasMarks = marks.length > 0;

  return (
    <section className="hairline-b">
      <div className="shell py-8 md:py-10">
        <Reveal>
          {hasMarks ? (
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
              <p className="shrink-0 text-sm text-muted text-center md:text-start md:max-w-[16rem]">
                {label}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end md:gap-x-10">
                {marks.map((mark) => (
                  <li
                    key={mark}
                    className="text-sm font-medium tracking-tight text-muted-2 select-none"
                  >
                    {mark}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted">
              {label}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
