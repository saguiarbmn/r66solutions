"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Building2, Hotel, PartyPopper, QrCode } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const industries = [
  {
    value: "restaurants",
    label: "Restaurants & Bars",
    icon: QrCode,
    headline: "QR menus that move tables faster.",
    body: "Guests scan, order, and pay without waiting on staff capacity. Fast payments and kitchen routing keep volume high and tickets accurate.",
    metrics: [
      { label: "Avg. order time", value: "< 45s" },
      { label: "Table turnover", value: "+28%" },
      { label: "Payment capture", value: "Instant" },
    ],
  },
  {
    value: "hotels",
    label: "Hotels & Resorts",
    icon: Hotel,
    headline: "Room service and digital concierge, unified.",
    body: "In-room dining, amenity requests, and guest messaging delivered through one contactless layer—routed straight to operations.",
    metrics: [
      { label: "In-room orders", value: "24/7" },
      { label: "Staff load", value: "−35%" },
      { label: "Guest NPS lift", value: "+18 pts" },
    ],
  },
  {
    value: "venues",
    label: "Venues & Casinos",
    icon: PartyPopper,
    headline: "High-volume ordering at seat-side speed.",
    body: "Seat-side service for arenas, lounges, and gaming floors. AirMenu absorbs peak demand without bottlenecking F&B or POS systems.",
    metrics: [
      { label: "Peak capacity", value: "Unlimited*" },
      { label: "Seat-side delivery", value: "Live" },
      { label: "POS sync", value: "Real-time" },
    ],
  },
] as const;

export function AirMenuShowcase() {
  return (
    <section
      id="airmenu"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-28"
      aria-labelledby="airmenu-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 size-[28rem] rounded-full bg-brand-blue/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/35 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f0a0a6]">
              <Building2 className="size-3.5" aria-hidden />
              Exclusive Americas Distributor
            </div>
            <h2
              id="airmenu-heading"
              className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              AirMenu. Deployed across North &amp; South America—only through
              R66.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              R66 Solutions holds exclusive distribution rights for AirMenu
              throughout the Americas. We install, integrate, and scale the
              platform so hospitality operators capture every order without
              friction.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              {[
                "Full-stack deployment & POS integration",
                "Multi-property rollouts and training",
                "Ongoing optimization and support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-brand-red" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Tabs defaultValue="restaurants" className="w-full gap-4">
            <TabsList
              className="flex h-auto w-full flex-col gap-2 rounded-xl bg-slate-950/60 p-1.5 sm:flex-row"
              aria-label="Industry deployments"
            >
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.value}
                  value={industry.value}
                  className="h-auto flex-1 justify-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs data-active:bg-brand-red data-active:text-white sm:text-sm"
                >
                  <industry.icon className="size-4 shrink-0" aria-hidden />
                  <span className="leading-tight">{industry.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.value} value={industry.value}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={industry.value}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-white">
                      {industry.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                      {industry.body}
                    </p>
                    <dl className="mt-8 grid grid-cols-3 gap-3">
                      {industry.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center sm:p-4"
                        >
                          <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                            {metric.label}
                          </dt>
                          <dd className="mt-1 font-heading text-lg font-bold text-brand-red sm:text-xl">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
