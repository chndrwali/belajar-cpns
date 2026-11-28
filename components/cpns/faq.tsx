"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/cpns/faq";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-ink">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-text transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-ink/10 px-5 py-4 text-sm leading-relaxed text-muted-text">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
