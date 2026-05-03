import { useState } from "react";
import { ExternalLink, Activity, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const ActiveProject = () => {
  const tech = ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Netlify"];
  const [open, setOpen] = useState(false);

  const features = [
    "Progressive overload tracker",
    "Workout history & logs",
    "Nutrition tracking",
    "Performance analytics",
    "Auth & user profiles",
    "Responsive mobile-first UI",
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Currently <span className="gradient-text">shipping</span>
          </h2>
        </div>

        <div className="relative gradient-border p-8 md:p-10 overflow-hidden shadow-elegant">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-mono text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Currently Building
                </div>
                <span className="font-mono text-xs text-muted-foreground">v0.8 · active</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl font-bold">FitSync</h3>
              </div>

              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Fitness tracking web application focused on progressive overload, workout
                history, nutrition tracking, and performance analytics.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="hero">
                  <a href="https://fit-sync-gym-tracker.netlify.app/" target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="glass">
                  <a href="https://github.com/Kuhlle-16/FitSync" target="_blank" rel="noreferrer">
                    View Code <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" onClick={() => setOpen(true)}>
                  View Details
                </Button>
              </div>
            </div>

            {/* Right metrics */}
            <div className="grid grid-cols-2 gap-3 md:w-72">
              {[
                { k: "Uptime", v: "99.9%" },
                { k: "Status", v: "🟢 Live" },
              ].map((m) => (
                <div key={m.k} className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground font-mono mb-1">{m.k}</div>
                  <div className="font-display font-bold text-lg">{m.v}</div>
                </div>
              ))}
              <div className="col-span-2 glass rounded-xl p-4 flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground font-mono">Last commit</div>
                  <div className="text-sm">progressive overload tracker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto glass-strong">
          <DialogHeader>
            <p className="font-mono text-xs text-primary mb-1">Fitness Tracking Web App</p>
            <DialogTitle className="font-display text-3xl">FitSync</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground pt-2">
              Fitness tracking web application focused on progressive overload, workout history,
              nutrition tracking, and performance analytics.
            </DialogDescription>
          </DialogHeader>

          <div className="grid sm:grid-cols-3 gap-3 my-5">
            <div className="glass rounded-lg p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Duration</div>
              <div className="text-sm font-medium">Ongoing</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Team</div>
              <div className="text-sm font-medium">Solo</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Deployment</div>
              <div className="text-sm font-medium">Netlify · Supabase</div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="font-display font-semibold mb-2">My Role</h4>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer — design, frontend, backend, and deployment.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-2">Challenges Solved</h4>
              <p className="text-sm text-muted-foreground">
                Designing flexible workout schemas, building analytics over time-series data,
                and keeping the UI fast on mobile devices.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-2">Key Features</h4>
              <ul className="grid sm:grid-cols-2 gap-1.5">
                {features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">▸</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-6">
            <Button asChild variant="hero">
              <a href="https://fit-sync-gym-tracker.netlify.app/" target="_blank" rel="noreferrer">
                Live Site <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/Kuhlle-16/FitSync" target="_blank" rel="noreferrer">
                Code <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
