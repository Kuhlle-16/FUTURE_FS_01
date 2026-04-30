import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            Real-world experience building and shipping software.
          </p>
        </div>

        {/* Current Internship */}
        <div className="gradient-border p-6 md:p-7 shadow-card">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-[10px] font-mono uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Current
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  19 April 2026 – 19 May 2026
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold">
                Full Stack Web Development Intern
              </h3>
              <p className="text-sm text-primary mb-2">Future Interns</p>
              <p className="text-sm text-muted-foreground">
                Hands-on full stack web development internship — building real-world projects
                with modern web technologies in a structured program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
