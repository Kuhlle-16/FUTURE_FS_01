import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 h-0.5 z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-primary transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
};
