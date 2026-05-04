import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="gradient-border p-6 md:p-8 shadow-card">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
              <User className="h-6 w-6" />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm an aspiring full stack developer and Computer Science student at the{" "}
              <span className="text-foreground font-medium">University of the Witwatersrand</span>,
              focused on building practical, user-centered web applications. I enjoy working across
              both frontend and backend, turning ideas into functional products using tools like
              React, TypeScript, Node.js, and modern backend services. Through my experience, I've
              developed a solid understanding of application structure, data handling, and creating
              responsive interfaces that solve real problems. I'm driven by continuous learning,
              improving my problem-solving skills, and writing clean, reliable code. I'm currently
              looking for opportunities where I can grow as a developer and contribute to
              meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
