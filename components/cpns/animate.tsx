"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import gsap from "gsap";

/**
 * Primitif animasi Belajar CPNS — dua mesin, satu bahasa.
 *
 * - Motion (framer-motion) untuk animasi deklaratif React: reveal saat
 *   scroll, stagger kartu, dan transisi masuk/keluar (AnimatePresence).
 * - GSAP untuk yang imperatif: entrance hero dan angka count-up.
 *
 * Semua primitif menghormati `prefers-reduced-motion`: kalau user mematikan
 * animasi di sistem, konten langsung tampil tanpa gerakan.
 */

// useLayoutEffect di client (jalan sebelum paint, jadi tidak ada kedip),
// useEffect di server (menghindari warning SSR).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade + naik sedikit saat elemen masuk viewport (sekali saja). */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Wadah yang memunculkan anak-anaknya satu per satu saat masuk viewport. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/** Satu anak di dalam <Stagger> — wajib dipakai berpasangan. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/**
 * Entrance hero pakai GSAP: anak-anak langsung (badge, headline, subjudul,
 * tombol, statistik) naik berurutan saat halaman dimuat.
 */
export function GsapHero({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reduceMotion || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.children,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          overwrite: "auto",
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Angka yang menghitung naik dari 0 ke `to` (GSAP) — untuk statistik hero. */
export function CountUp({
  to,
  className,
  duration = 1.4,
}: {
  to: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) {
      el.textContent = String(to);
      return;
    }
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v));
      },
    });
    return () => {
      tween.kill();
    };
  }, [to, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {reduceMotion ? to : 0}
    </span>
  );
}
