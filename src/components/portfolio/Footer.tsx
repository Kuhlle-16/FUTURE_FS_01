export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p className="font-mono">
          © {new Date().getFullYear()} Kuhle Bikitsha
        </p>
        <p className="font-mono text-xs">
          <span className="text-primary">●</span> Available for opportunities
        </p>
      </div>
    </footer>
  );
};
