import type { ReactNode } from "react";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

interface AppShellProps {
  children: ReactNode;
  title: string;
}

export function AppShell({
  children,
  title,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Sidebar />

      <div className="min-h-screen lg:pl-[248px]">
        <Topbar title={title} />

        <main className="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
