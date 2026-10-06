"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Businesses", href: "#businesses" },
  { label: "Agents", href: "#agents" },
  { label: "Developers", href: "#developers" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Axionvera home"
        >
          <img
            src="/axionvera-logo.png"
            alt="Axionvera"
            className="h-8 w-8 rounded-full object-contain"
          />

          <span className="font-display text-lg font-semibold tracking-[-0.03em] text-text-primary">
            Axionvera
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="hidden h-10 items-center justify-center rounded-[10px] bg-primary px-5 text-[15px] font-semibold text-[#031009] transition-colors duration-200 hover:bg-primary-hover sm:inline-flex"
          >
            Launch App
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-subtle bg-surface-primary text-text-primary md:hidden"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-background px-6 py-5 md:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-primary hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/app"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-[10px] bg-primary px-5 text-[15px] font-semibold text-[#031009] hover:bg-primary-hover sm:hidden"
            >
              Launch App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
