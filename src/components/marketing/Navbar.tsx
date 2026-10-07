"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "How it works", href: "#how-it-works", id: "how-it-works" },
  { label: "Businesses", href: "#businesses", id: "businesses" },
  { label: "Agents", href: "#agents", id: "agents" },
  { label: "Developers", href: "#developers", id: "developers" },
  { label: "About", href: "#about", id: "about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5],
        rootMargin: "-18% 0px -62% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    function handleTopOfPage() {
      if (window.scrollY < 250) {
        setActiveSection("");
      }
    }

    window.addEventListener(
      "scroll",
      handleTopOfPage,
      { passive: true }
    );

    handleTopOfPage();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleTopOfPage
      );
    };
  }, []);

  function handleNavClick(id: string) {
    setActiveSection(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Axionvera home"
        >
          <img
            src="/axionvera-logo.png"
            alt="Axionvera"
            className="h-8 w-8 rounded-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          />

          <span className="font-display text-lg font-semibold tracking-[-0.03em] text-text-primary transition-colors duration-200 group-hover:text-primary">
            Axionvera
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active =
              activeSection === link.id;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  handleNavClick(link.id)
                }
                className={[
                  "group relative flex h-10 items-center justify-center rounded-[10px] px-4",
                  "text-[15px] font-medium",
                  "transition-all duration-300 ease-out",
                  active
                    ? "bg-[#142019] text-text-primary"
                    : "text-text-secondary hover:bg-[#142019]/55 hover:text-text-primary",
                ].join(" ")}
              >
                <span
                  className={[
                    "relative z-10 transition-transform duration-300 ease-out",
                    active
                      ? "translate-y-[-1px]"
                      : "group-hover:translate-y-[-1px]",
                  ].join(" ")}
                >
                  {link.label}
                </span>

                {/* Animated active/hover underline */}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute bottom-[5px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary",
                    "transition-all duration-300 ease-out",
                    active
                      ? "w-[22px] opacity-100"
                      : "w-0 opacity-0 group-hover:w-[14px] group-hover:opacity-70",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className={[
              "hidden h-10 items-center justify-center rounded-[10px] bg-primary px-5",
              "text-[15px] font-semibold text-[#031009]",
              "transition-all duration-300 ease-out",
              "hover:-translate-y-[1px] hover:bg-primary-hover",
              "hover:shadow-[0_8px_24px_rgba(2,199,99,0.16)]",
              "active:translate-y-0 active:scale-[0.98]",
              "sm:inline-flex",
            ].join(" ")}
          >
            Launch App
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label="Toggle navigation"
            aria-expanded={open}
            className={[
              "flex h-10 w-10 items-center justify-center rounded-[10px]",
              "border border-border-subtle bg-surface-primary text-text-primary",
              "transition-all duration-300",
              "hover:border-border-strong hover:bg-surface-interactive",
              "md:hidden",
            ].join(" ")}
          >
            <span
              className="relative block h-4 w-5"
              aria-hidden="true"
            >
              <span
                className={[
                  "absolute left-0 top-[1px] h-[1.5px] w-5 bg-current",
                  "transition-all duration-300",
                  open
                    ? "translate-y-[6px] rotate-45"
                    : "",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[7px] h-[1.5px] w-5 bg-current",
                  "transition-all duration-300",
                  open
                    ? "scale-x-0 opacity-0"
                    : "",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[13px] h-[1.5px] w-5 bg-current",
                  "transition-all duration-300",
                  open
                    ? "-translate-y-[6px] -rotate-45"
                    : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={[
          "overflow-hidden border-t border-border-subtle bg-background md:hidden",
          "transition-all duration-300 ease-out",
          open
            ? "max-h-[430px] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-5">
          {links.map((link) => {
            const active =
              activeSection === link.id;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  handleNavClick(link.id)
                }
                className={[
                  "relative flex items-center rounded-[10px] px-3 py-3",
                  "text-sm font-medium",
                  "transition-all duration-250",
                  active
                    ? "bg-[#142019] text-text-primary"
                    : "text-text-secondary hover:bg-surface-primary hover:text-text-primary",
                ].join(" ")}
              >
                {link.label}

                <span
                  className={[
                    "ml-auto h-1.5 w-1.5 rounded-full bg-primary",
                    "transition-all duration-300",
                    active
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}

          <Link
            href="/app"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-[10px] bg-primary px-5 text-[15px] font-semibold text-[#031009] transition-all duration-300 hover:bg-primary-hover active:scale-[0.98] sm:hidden"
          >
            Launch App
          </Link>
        </nav>
      </div>
    </header>
  );
}
