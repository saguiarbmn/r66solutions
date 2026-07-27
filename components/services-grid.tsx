"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CircuitBoard,
  UtensilsCrossed,
} from "lucide-react";

const services = [
  {
    id: "solutions",
    icon: CircuitBoard,
    title: "Turn-Key Tech & Operations",
    description:
      "Ticketing, event fundraising systems, payment gateway integrations, and logistics management—deployed end-to-end with zero operational drag.",
    points: [
      "Event & ticketing platforms",
      "Payment gateway orchestration",
      "Logistics command systems",
    ],
  },
  {
    id: "airmenu-service",
    icon: UtensilsCrossed,
    title: "AirMenu Hospitality Solutions",
    description:
      "Exclusive Americas partner for contactless QR ordering, in-room hotel dining, and instant point-of-sale routing that converts guests into revenue.",
    points: [
      "Contactless QR ordering",
      "In-room digital dining",
      "Instant POS routing",
    ],
  },
  {
    id: "advisory",
    icon: BriefcaseBusiness,
    title: "Strategic Business Advisory",
    description:
      "Operations scaling, financial margin optimization, and back-end infrastructure design for leaders who demand measurable outcomes.",
    points: [
      "Operations scaling playbooks",
      "Margin optimization",
      "Infrastructure architecture",
    ],
  },
] as const;

export function ServicesGrid() {
  return (
    <section
      id="solutions"
      className="relative bg-slate-950 py-24 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(190_30_45_/_0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            Core Services
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Built for operators who refuse friction.
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Three integrated practice areas—engineered to scale revenue, compress
            complexity, and ship results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id === "advisory" ? "advisory" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-brand-red/40 hover:bg-white/[0.05]"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-blue/20 text-[#9ea1e0] transition-colors group-hover:bg-brand-red group-hover:text-white">
                <service.icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
