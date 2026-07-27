"use client";

import { motion } from "framer-motion";
import { Globe2, Link2, Rocket } from "lucide-react";

const metrics = [
  {
    icon: Rocket,
    value: "100%",
    label: "Turn-key execution",
    detail: "From discovery to live systems—owned end-to-end.",
  },
  {
    icon: Globe2,
    value: "Full N/S",
    label: "America Coverage",
    detail: "Exclusive AirMenu distribution across both continents.",
  },
  {
    icon: Link2,
    value: "Zero",
    label: "Friction Integration",
    detail: "POS, payments, and ops connected without downtime.",
  },
] as const;

export function MetricsBanner() {
  return (
    <section
      id="about"
      className="relative border-y border-white/10 bg-surface py-16 sm:py-20"
      aria-labelledby="metrics-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgb(190_30_45_/_0.14),rgb(46_49_146_/_0.14),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="metrics-heading" className="sr-only">
          Key impact metrics
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="flex flex-col items-center text-center md:border-r md:border-white/10 md:last:border-r-0 md:px-6"
            >
              <metric.icon className="size-6 text-brand-red" aria-hidden />
              <p className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                {metric.label}
              </p>
              <p className="mt-2 max-w-xs text-sm text-slate-500">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
