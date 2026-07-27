"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const interests = [
  { value: "airmenu", label: "AirMenu" },
  { value: "tech", label: "Tech Systems" },
  { value: "advisory", label: "Advisory" },
] as const;

export function ContactForm() {
  const [interest, setInterest] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative bg-slate-950 py-24 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Schedule a consultation. Move from complexity to execution.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
              Tell us where you operate and what you need deployed. Our team
              responds with a clear path—AirMenu, tech systems, or strategic
              advisory.
            </p>
            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500">Regions</dt>
                <dd className="mt-1 text-slate-200">
                  North America · South America
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Response window</dt>
                <dd className="mt-1 text-slate-200">
                  Typically within one business day
                </dd>
              </div>
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
          >
            {submitted ? (
              <div
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
                role="status"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
                  <Send className="size-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-white">
                  Request received.
                </h3>
                <p className="mt-2 max-w-sm text-slate-400">
                  Thank you. An R66 Solutions specialist will follow up shortly
                  to schedule your consultation.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6 border-white/20 bg-transparent text-white hover:bg-white/5"
                  onClick={() => {
                    setSubmitted(false);
                    setInterest(null);
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-200">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Jordan Lee"
                    className="h-11 border-white/15 bg-slate-950/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-slate-200">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    required
                    autoComplete="organization"
                    placeholder="Acme Hospitality Group"
                    className="h-11 border-white/15 bg-slate-950/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-slate-200">
                    Service Interest
                  </Label>
                  <Select
                    value={interest ?? undefined}
                    onValueChange={(value) => setInterest(value)}
                    required
                  >
                    <SelectTrigger
                      id="interest"
                      className="h-11 w-full border-white/15 bg-slate-950/50 text-white"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="serviceInterest"
                    value={interest ?? ""}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your operation, timeline, and goals…"
                    className="min-h-28 resize-y border-white/15 bg-slate-950/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full gap-2 rounded-lg bg-brand-red text-base font-semibold text-white hover:bg-brand-red-deep"
                >
                  Request Demo
                  <Send className="size-4" aria-hidden />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
