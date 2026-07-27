import { Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const footerNav = [
  { href: "#solutions", label: "Solutions" },
  { href: "#airmenu", label: "AirMenu Partnership" },
  { href: "#advisory", label: "Advisory" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const regions = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Colombia",
  "Chile",
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#top"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
              aria-label="R66 Solutions home"
            >
              <BrandLogo size="sm" className="h-12 w-auto" />
              <span className="font-heading text-base font-bold tracking-tight text-white">
                R66 Solutions
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Premier business operations, technology integration, and strategic
              advisory—exclusive Americas partner for AirMenu.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-brand-red/50 hover:text-white"
                aria-label="R66 Solutions on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 fill-current"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:hello@r66solutions.com"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-brand-blue/50 hover:text-white"
                aria-label="Email R66 Solutions"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Operational Regions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {regions.map((region) => (
                <li key={region} className="flex items-center gap-2 text-sm">
                  <MapPin className="size-3.5 shrink-0 text-brand-red" aria-hidden />
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} R66 Solutions. All rights reserved.</p>
          <p>Exclusive North &amp; South America distributor for AirMenu.</p>
        </div>
      </div>
    </footer>
  );
}
