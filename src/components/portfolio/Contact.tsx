import { useState } from "react";
import { Mail, Linkedin, Github, Send, Calendar, Briefcase } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const channels = [
  { icon: Mail, label: "Gmail", value: "kuhlebikitsha@gmail.com", href: "mailto:kuhlebikitsha@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kuhle-bikitsha", href: "https://www.linkedin.com/in/kuhle-bikitsha/?skipRedirect=true" },
  { icon: Github, label: "GitHub", value: "github.com/Kuhlle-16", href: "https://github.com/Kuhlle-16" },
];

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({
        title: "Check your input",
        description: r.error.issues[0]?.message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("_replyto", form.email);
      data.append("message", form.message);
      data.append("_subject", `New portfolio message from ${form.name}`);
      data.append("_template", "table");
      data.append("_captcha", "false");

      const res = await fetch("https://formsubmit.co/ajax/kuhlebikitsha@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        throw new Error(errorText || `HTTP ${res.status}`);
      }

      toast({ title: "Message sent ✓", description: "I'll get back to you shortly." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message.";
      toast({
        title: "Couldn't send message",
        description: `Please try again or email me directly at kuhlebikitsha@gmail.com. (${message})`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3"></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-3">
            Let's <span className="gradient-text">build something</span>
          </h2>
          <p className="text-muted-foreground">
            Open to internships, full-time roles, and freelance collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 gradient-border p-4 hover:-translate-y-1 transition-spring"
              >
                <div className="p-3 rounded-lg bg-muted text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-mono">{label}</div>
                  <div className="font-medium truncate">{value}</div>
                </div>
              </a>
            ))}

            <div className="pt-2">
              <Button asChild variant="hero">
                <a href="#contact"><Briefcase className="h-4 w-4" /> Hire Me</a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 gradient-border p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  placeholder="Jane Recruiter"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="msg">Message</Label>
              <Textarea
                id="msg"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                placeholder="Tell me about the role or project..."
              />
              <p className="text-[11px] text-muted-foreground text-right font-mono">
                {form.message.length}/1000
              </p>
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
              <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
