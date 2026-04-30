import { useEffect, useState } from "react";

export const TerminalWindow = () => {
  const lines = [
    { prompt: "$", text: "whoami", typed: "kuhle bikitsha" },
    { prompt: "$", text: "cat role.txt", typed: "Full-Stack Software Engineer" },
    { prompt: "$", text: "ls stack/", typed: "react ts node express firebase azure" },
    { prompt: "$", text: "status --current", typed: "🟢 building FitSync" },
  ];

  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (step >= lines.length) return;
    const cmd = lines[step].text;
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) {
        clearInterval(t);
        setTimeout(() => setStep((s) => s + 1), 700);
      }
    }, 55);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div className="gradient-border shadow-elegant overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-destructive/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-primary/80" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">~/kuhle — zsh</span>
        <span className="w-10" />
      </div>
      <div className="p-5 font-mono text-sm space-y-2 min-h-[260px] bg-background/40">
        {lines.slice(0, step).map((l, i) => (
          <div key={i}>
            <div>
              <span className="text-primary">{l.prompt}</span>{" "}
              <span className="text-foreground">{l.text}</span>
            </div>
            <div className="text-muted-foreground pl-3">{l.typed}</div>
          </div>
        ))}
        {step < lines.length && (
          <div>
            <span className="text-primary">{lines[step].prompt}</span>{" "}
            <span>{typed}</span>
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle animate-blink" />
          </div>
        )}
        {step >= lines.length && (
          <div>
            <span className="text-primary">$</span>{" "}
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
};
