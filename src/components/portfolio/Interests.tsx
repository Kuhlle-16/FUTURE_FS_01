import { Code2, Layers, Brain, Dumbbell } from "lucide-react";

const interests = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Layers, label: "Full-Stack Development" },
  { icon: Brain, label: "Algorithm Design" },
  { icon: Dumbbell, label: "Fitness & Wellness" },
];

export const Interests = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Things I <span className="gradient-text">care about</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {interests.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group gradient-border p-6 text-center hover:-translate-y-2 transition-spring"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-3 group-hover:scale-110 transition-spring shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
