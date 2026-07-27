"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-surface text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-glow" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-24">
        <div className="flex flex-col items-start">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <BrandLogo size="lg" priority className="h-[4.5rem] w-auto sm:h-24" />
            <div className="hidden sm:block">
              <p className="font-heading text-2xl font-bold tracking-tight text-white">
                R66 Solutions
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-silver">
                Operations · Tech · Advisory
              </p>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]"
          >
            Architecting Modern Business Operations &amp; Frictionless
            Technology.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            R66 Solutions delivers turn-key tech integrations, event logistics,
            and premier digital hospitality platforms that drive measurable
            profitability.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<a href="#solutions" />}
              size="lg"
              className="h-12 gap-2 rounded-lg bg-brand-red px-6 text-base font-semibold text-white hover:bg-brand-red-deep"
            >
              Explore Solutions
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#airmenu" />}
              variant="outline"
              size="lg"
              className="h-12 rounded-lg border-brand-blue/50 bg-transparent px-6 text-base font-semibold text-white hover:border-brand-blue hover:bg-brand-blue/20 hover:text-white"
            >
              Partner with AirMenu
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          aria-hidden
        >
          <HeroMockupStack />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockupStack() {
  return (
    <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-square">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-6 top-4 z-10 sm:inset-x-10 sm:top-8"
      >
        <div className="glass rounded-2xl p-5 shadow-2xl shadow-brand-navy/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Order Throughput
              </p>
              <p className="mt-1 font-heading text-3xl font-bold text-white">
                +47.2%
              </p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand-red/20 text-brand-red">
              <TrendingUp className="size-5" />
            </div>
          </div>
          <div className="mt-4 flex h-16 items-end gap-1.5">
            {[32, 48, 40, 62, 55, 78, 70, 88, 82, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-blue/50 to-brand-red"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="absolute inset-x-0 top-[38%] z-20 sm:inset-x-4"
      >
        <div className="glass rounded-2xl p-5 shadow-2xl shadow-slate-950/50">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Zap className="size-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-white">
                Automated Workflow
              </p>
              <p className="text-xs text-slate-400">Live routing active</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {[
              "Payment gateway synced",
              "POS routed in 1.2s",
              "Inventory sync complete",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-slate-200"
              >
                <CheckCircle2 className="size-4 shrink-0 text-brand-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute inset-x-8 bottom-2 z-30 sm:inset-x-14 sm:bottom-6"
      >
        <div className="glass rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Digital Ordering</p>
              <p className="font-heading text-xl font-bold text-white">
                12,480 <span className="text-sm font-medium text-slate-400">today</span>
              </p>
            </div>
            <div className="rounded-full bg-brand-blue/25 px-3 py-1 text-xs font-semibold text-[#a5a8e8]">
              AirMenu Live
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
