"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/cpns/faq";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-[#131316]">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-500">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
