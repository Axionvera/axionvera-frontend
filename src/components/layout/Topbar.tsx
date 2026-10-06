interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border-subtle bg-background px-8">
      <div>
        <p className="text-sm font-medium text-text-secondary">
          BUSINESS WORKSPACE
        </p>
        <h1 className="mt-0.5 font-display text-xl font-semibold tracking-[-0.03em]">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-[10px] border border-border-subtle bg-surface-primary px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-medium text-text-secondary">
            Stellar Testnet
          </span>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-[10px] border border-border-subtle bg-surface-primary px-3 text-sm text-text-primary transition-colors hover:bg-surface-interactive"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-interactive text-[10px] font-semibold text-primary">
            BA
          </span>

          <span className="hidden sm:inline">
            Business Account
          </span>
        </button>
      </div>
    </header>
  );
}
