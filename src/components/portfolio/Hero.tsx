import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "./TerminalWindow";

const stack = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express",
  "Firebase", "HTML", "CSS", "Git", "GitHub", "Azure", "Netlify",
];

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
            <Sparkles className="h-3 w-3 text-primary" />
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Kuhle <span className="gradient-text">Bikitsha</span>
            </h1>
            <p className="font-mono text-base sm:text-lg text-primary">
              {"> "}Full-Stack Software Engineer
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Computer Science student at the University of the Witwatersrand building
            scalable web apps, dashboards, and user-focused digital products with
            modern technologies.
          </p>

          {/* Stack */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((s, i) => (
                <span
                  key={s}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="opacity-0 animate-fade-in px-3 py-1.5 rounded-full text-xs font-mono glass hover:border-primary/60 hover:text-primary hover:-translate-y-0.5 transition-spring cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">Hire Me <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/Kuhlle-16" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://www.linkedin.com/in/kuhle-bikitsha" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="mailto:kuhlebikitsha@gmail.com">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>

        {/* Right — terminal + floating tech */}
        <div className="relative animate-scale-in">
          <div className="relative animate-float">
            <TerminalWindow />
          </div>
          {/* Floating badges */}
          <div className="absolute -top-6 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono shadow-glow hidden sm:block animate-float" style={{ animationDelay: "1s" }}>
            <span className="text-primary">●</span> 99.9% uptime
          </div>
          <div className="absolute -bottom-5 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono shadow-glow-purple hidden sm:block animate-float" style={{ animationDelay: "2s" }}>
            <span className="text-secondary">▲</span> Deployed on Netlify
          </div>
          <div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 text-xs font-mono hidden md:block animate-float" style={{ animationDelay: "0.5s" }}>
            {"{ ts: 'strict' }"}
          </div>
        </div>
      </div>
    </section>
  );
};
