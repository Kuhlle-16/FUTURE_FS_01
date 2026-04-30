import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Building modern web apps using frontend + backend technologies end-to-end.",
    items: ["Architecture", "APIs", "Auth", "Deployment"],
    accent: "primary" as const,
  },
  {
    icon: Layout,
    title: "Frontend",
    desc: "Crafting fast, accessible, responsive interfaces with strong UX taste.",
    items: ["React", "TypeScript", "JavaScript", "Responsive UI"],
    accent: "secondary" as const,
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Designing reliable services, data models and authentication flows.",
    items: ["Node.js", "Express", "Firebase Auth", "Firestore", "REST APIs"],
    accent: "primary" as const,
  },
  {
    icon: Wrench,
    title: "Tools & Cloud",
    desc: "Shipping with modern tooling and cloud platforms.",
    items: ["Git", "GitHub", "Netlify", "Azure"],
    accent: "secondary" as const,
  },
];

const strengths = [
  { label: "Problem Solving", value: 95 },
  { label: "Algorithm Design", value: 88 },
  { label: "Scalable Architecture", value: 85 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            What I <span className="gradient-text">build with</span>
          </h2>
          <p className="text-muted-foreground">
            Practical experience across the full stack — from polished UIs to backend logic and deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {groups.map((g) => {
            const Icon = g.icon;
            const isPrimary = g.accent === "primary";
            return (
              <div
                key={g.title}
                className="group gradient-border p-6 hover:-translate-y-1 transition-spring shadow-card hover:shadow-elegant"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isPrimary ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    } group-hover:scale-110 transition-spring`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-1.5">{g.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{g.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted border border-border"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strengths */}
        <div className="gradient-border p-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-primary text-primary-foreground">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">Core Strengths</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {strengths.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.label}</span>
                  <span className="font-mono text-muted-foreground">{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
