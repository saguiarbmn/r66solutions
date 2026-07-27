"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="flex max-w-xl flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
          R66 Solutions
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Corporate website starter
        </h1>
        <p className="text-lg text-muted-foreground">
          Next.js, Tailwind CSS, shadcn/ui, Lucide, and Framer Motion are ready.
        </p>
        <Button size="lg">
          Get started
          <ArrowRight data-icon="inline-end" />
        </Button>
      </motion.div>
    </main>
  );
}
