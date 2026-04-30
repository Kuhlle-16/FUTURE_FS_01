import { useState } from "react";
import { ExternalLink, Github, Eye, MapPin, ShoppingBag, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  id: string;
  title: string;
  tag: string;
  type: string;
  summary: string;
  tech: string[];
  features: string[];
  duration: string;
  team: string;
  role: string;
  challenges: string;
  deployment: string;
  live?: string;
  docs?: string;
  code?: string;
  category: ("Full Stack" | "Dashboards" | "School Projects" | "Live Projects")[];
  icon: typeof MapPin;
  accent: "primary" | "secondary";
};

const projects: Project[] = [
  {
    id: "navigo",
    title: "NAVIGO",
    tag: "Campus Quest Adventure",
    type: "Full Stack Location-Based Game",
    summary:
      "Gamified campus exploration platform where students complete real-world quests, solve clues, navigate campus, earn badges, and compete on leaderboards.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Google Maps API"],
    features: [
      "Treasure hunt clue system",
      "Maps navigation",
      "Weekly leaderboard",
      "Collectibles inventory",
      "User profiles",
      "Rewards system",
    ],
    duration: "Semester project",
    team: "Group Project",
    role: "Full-Stack Developer — frontend, API integration, gamification logic",
    challenges:
      "Location logic, API structure, gamification systems, real-time progress tracking.",
    deployment: "Netlify (frontend) · Firebase (backend)",
    live: "https://navigowe.netlify.app",
    docs: "https://navigo-documentation.netlify.app",
    category: ["Full Stack", "Live Projects", "School Projects"],
    icon: MapPin,
    accent: "primary",
  },
  {
    id: "artisan",
    title: "Local Artisan Marketplace",
    tag: "E-Commerce + Dashboards",
    type: "Full Stack Dashboard + E-Commerce",
    summary:
      "Marketplace helping artisans sell handmade goods while managing shops, products, orders, and customers.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Azure", "Chart.js"],
    features: [
      "Seller dashboards",
      "Inventory tracking",
      "Product management",
      "Buyer storefront",
      "Search & filters",
      "Admin analytics dashboard",
      "PDF / CSV exports",
    ],
    duration: "Semester Project",
    team: "Group Project",
    role: "Full-Stack Developer — dashboards, role-based access, data model",
    challenges:
      "Role-based access, dashboard logic, scalable data structure for multi-vendor commerce.",
    deployment: "Azure Static Web Apps · Firebase",
    category: ["Full Stack", "Dashboards", "School Projects"],
    icon: ShoppingBag,
    accent: "secondary",
  },
  {
    id: "fitsync",
    title: "FitSync",
    tag: "Active Project",
    type: "Fitness Tracking Web App",
    summary:
      "Fitness tracking web app focused on progressive overload, workout history, nutrition tracking, and performance analytics.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firestore", "Netlify"],
    features: [
      "Progressive overload tracker",
      "Workout history",
      "Nutrition logging",
      "Performance analytics",
      "Auth & user profiles",
    ],
    duration: "Ongoing",
    team: "Solo",
    role: "Full-Stack Developer — design, frontend, backend, deployment",
    challenges: "Designing flexible workout schemas and analytics over time-series data.",
    deployment: "Netlify · Firebase",
    live: "https://fit-sync-gym.netlify.app/",
    category: ["Full Stack", "Live Projects"],
    icon: Dumbbell,
    accent: "primary",
  },
];

const filters = ["All", "Full Stack", "School Projects", "Live Projects"] as const;
type Filter = (typeof filters)[number];

export const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const list = filter === "All" ? projects : projects.filter((p) => p.category.includes(filter as never));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground">Real, deployed products built end-to-end.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-spring border ${
                filter === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "glass hover:border-primary/50 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => {
            const Icon = p.icon;
            const isPrimary = p.accent === "primary";
            return (
              <article
                key={p.id}
                className="group gradient-border overflow-hidden hover:-translate-y-2 transition-spring shadow-card hover:shadow-elegant flex flex-col"
              >
                {/* Cover */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${
                      isPrimary
                        ? "bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.5),hsl(var(--background)))]"
                        : "bg-[radial-gradient(circle_at_70%_40%,hsl(var(--secondary)/0.5),hsl(var(--background)))]"
                    }`}
                  />
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="relative h-full flex items-center justify-center">
                    <Icon
                      className={`h-16 w-16 ${
                        isPrimary ? "text-primary" : "text-secondary"
                      } group-hover:scale-110 transition-spring drop-shadow-[0_0_20px_currentColor]`}
                    />
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono rounded-md glass">
                    {p.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-3">{p.type}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{p.summary}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-mono rounded bg-muted border border-border">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.live && (
                      <Button asChild size="sm" variant="hero">
                        <a href={p.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> Live
                        </a>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="glass">
                      <a href={p.code || "https://github.com/"} target="_blank" rel="noreferrer">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setActive(p)}>
                      <Eye className="h-3.5 w-3.5" /> View
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto glass-strong">
          {active && (
            <>
              <DialogHeader>
                <p className="font-mono text-xs text-primary mb-1">{active.type}</p>
                <DialogTitle className="font-display text-3xl">{active.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground pt-2">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="grid sm:grid-cols-3 gap-3 my-5">
                <div className="glass rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Duration</div>
                  <div className="text-sm font-medium">{active.duration}</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Team</div>
                  <div className="text-sm font-medium">{active.team}</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Deployment</div>
                  <div className="text-sm font-medium">{active.deployment}</div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="font-display font-semibold mb-2">My Role</h4>
                  <p className="text-sm text-muted-foreground">{active.role}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">Challenges Solved</h4>
                  <p className="text-sm text-muted-foreground">{active.challenges}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {active.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-6">
                {active.live && (
                  <Button asChild variant="hero">
                    <a href={active.live} target="_blank" rel="noreferrer">
                      Live Site <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {active.docs && (
                  <Button asChild variant="glass">
                    <a href={active.docs} target="_blank" rel="noreferrer">Docs</a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <a href={active.code || "https://github.com/"} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
