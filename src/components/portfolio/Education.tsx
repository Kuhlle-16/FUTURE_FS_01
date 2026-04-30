import { GraduationCap, School } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    place: "University of the Witwatersrand",
    title: "Bachelor of Science in Computer Science",
    period: "2022 – Present · Third Year",
    accent: "primary" as const,
    highlights: [
      "Strong academic growth and resilience",
      "Strong mathematics + programming performance",
      "Coursework: Software Architecture, Linear Algebra, Probability & Statistics, Computational Mathematics",
    ],
  },
  {
    icon: School,
    place: "Toli Senior Secondary School",
    title: "National Senior Certificate",
    period: "2021",
    accent: "secondary" as const,
    highlights: [
      "3 Distinctions: Mathematics, Life Sciences, Accounting",
      "Class Monitor",
      "RCL Member",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            ACADEMIC <span className="gradient-text">TIMELINE</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10">
            {items.map((it, i) => {
              const Icon = it.icon;
              const isPrimary = it.accent === "primary";
              return (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[22px] md:-left-[34px] top-1 h-7 w-7 rounded-full grid place-items-center ${
                      isPrimary ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary text-secondary-foreground shadow-glow-purple"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="gradient-border p-6 hover:-translate-y-1 transition-spring">
                    <p className="font-mono text-xs text-muted-foreground mb-1">{it.period}</p>
                    <h3 className="font-display text-xl font-semibold mb-0.5">{it.place}</h3>
                    <p className="text-sm text-primary mb-3">{it.title}</p>
                    <ul className="space-y-1.5">
                      {it.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
