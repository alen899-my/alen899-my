export function StatusBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 border-2 border-primary/60 rounded-full px-4 py-1.5"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
        Available for quests
      </span>
    </div>
  )
}
