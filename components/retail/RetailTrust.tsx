import { Reveal } from "@/components/motion/Reveal";

type Props = {
  label: string;
  marks: string[];
};

export function RetailTrust({ label, marks }: Props) {
  return (
    <section className="hairline-b">
      <div className="shell py-10 md:py-12">
        <Reveal>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
            <p className="shrink-0 text-sm text-muted text-center md:text-start md:max-w-[14rem]">
              {label}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-end md:gap-x-10">
              {marks.map((mark) => (
                <li
                  key={mark}
                  className="text-[0.95rem] md:text-[1.05rem] font-semibold tracking-tight text-muted-2/90 select-none"
                >
                  {mark}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
