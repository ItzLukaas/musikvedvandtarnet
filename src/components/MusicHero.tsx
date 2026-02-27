'use client';

import { motion } from 'framer-motion';

export function MusicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Illustreret baggrund – himmel, bakker, scene og vandtårn */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Himmel */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-illustration-medium/90 via-illustration-medium/70 to-background" />

        {/* Bakker */}
        <div className="absolute bottom-0 left-[-10%] w-[60%] h-48 rounded-t-full bg-illustration-light/90" />
        <div className="absolute bottom-[-2rem] right-[-20%] w-[70%] h-56 rounded-t-full bg-background" />

        {/* Scene-bue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[70%] max-w-3xl h-40 rounded-t-full bg-[#204645]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[64%] max-w-2xl h-32 rounded-t-full bg-background" />

        {/* Lysstråler fra scenen */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-64 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 sm:gap-4 opacity-80">
            <div className="w-10 sm:w-12 h-64 bg-accent-yellow/70 origin-bottom -rotate-16 blur-[1px]" />
            <div className="w-10 sm:w-12 h-64 bg-accent-yellow/80 origin-bottom -rotate-8 blur-[1px]" />
            <div className="w-10 sm:w-12 h-64 bg-accent-yellow/85 origin-bottom rotate-0 blur-[1px]" />
            <div className="w-10 sm:w-12 h-64 bg-accent-yellow/80 origin-bottom rotate-8 blur-[1px]" />
            <div className="w-10 sm:w-12 h-64 bg-accent-yellow/70 origin-bottom rotate-16 blur-[1px]" />
          </div>
        </div>

        {/* Vandtårn til højre */}
        <div className="absolute bottom-16 right-6 sm:right-12 w-16 sm:w-20 h-48 sm:h-56 bg-accent-red shadow-md">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[120%] h-6 bg-illustration-beige" />
          <div className="absolute inset-x-3 top-6 h-5 bg-illustration-beige/60" />
          <div className="absolute inset-x-4 bottom-6 h-6 bg-background" />
        </div>

        {/* Abstrakte lyspletter */}
        <div className="absolute top-16 left-10 w-36 h-36 rounded-full bg-illustration-light/40 blur-3xl" />
        <div className="absolute top-28 right-12 w-40 h-40 rounded-full bg-illustration-medium/40 blur-3xl" />
      </div>

      {/* Hvid ramme som på plakaten */}
      <div className="absolute inset-3 sm:inset-4 border-[6px] sm:border-8 border-white/90 rounded-sm pointer-events-none" />

      {/* Indhold */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* MUSIK / VED VANDTÅRNET / PRÆSENTERER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <div className="relative bg-accent-red px-6 py-4 sm:px-8 sm:py-5 border-2 border-white shadow-lg">
            <div className="text-white font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.08em]">
              MUSIK
            </div>
            <div className="text-accent-yellow font-display font-semibold text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] mt-1">
              VED VANDTÅRNET
            </div>
            <div className="text-white font-display font-medium text-[11px] sm:text-xs uppercase tracking-[0.28em] mt-1">
              PRÆSENTERER
            </div>
          </div>
        </motion.div>

        {/* DJ Lounge-agtig hovedtitel */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="font-display font-bold text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.4rem] xl:text-[4.8rem] leading-tight text-white uppercase tracking-[0.16em] mb-3"
        >
          SOMMER 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Gratis koncerter i loungestemning ved foden af Grindsted Vandtårn.
        </motion.p>

        {/* CTA-bånd inspireret af plakatens gule felter */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="bg-accent-yellow text-background font-display font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] px-5 py-2 inline-flex items-center justify-center shadow-md">
            SOMMER 2026 · FIRE ARRANGEMENTER · GRATIS ENTRÉ
          </div>
          <div className="bg-white/5 border border-white/25 px-4 py-2 rounded-full text-[13px] text-white/80 font-sans">
            Scroll ned for at se alle datoer og artister
          </div>
        </motion.div>
      </div>
    </section>
  );
}
