import Link from "next/link";

const productLinks = [
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Businesses",
    href: "#businesses",
  },
  {
    label: "Agents",
    href: "#agents",
  },
];

const resourceLinks = [
  {
    label: "Developers",
    href: "#developers",
  },
  {
    label: "Current build",
    href: "#current-build",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "#about",
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-primary">
        {title}
      </span>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-background px-6 py-16 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4 md:col-span-5">
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

              <span className="font-display text-[22px] font-semibold leading-[30px] tracking-[-0.02em] text-text-primary">
                Axionvera
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-[22px] text-text-secondary">
              Programmable rewards for businesses that reward agents for
              verified actions.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <FooterColumn
              title="Product"
              links={productLinks}
            />

            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-primary">
                Resources
              </span>

              <div className="flex flex-col gap-2">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="https://github.com/Axionvera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  GitHub

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17 17 7M10 7h7v7"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://x.com/axionvera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  X

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17 17 7M10 7h7v7"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <FooterColumn
              title="Company"
              links={companyLinks}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-sm text-text-secondary">
            © 2026 Axionvera
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Built on Stellar
          </div>
        </div>
      </div>
    </footer>
  );
}
