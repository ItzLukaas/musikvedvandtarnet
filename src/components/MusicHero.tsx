'use client';

import { motion } from 'framer-motion';

export function MusicHero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Hero-billede af vandtårnet – læg fx filen i /public/vandtarn-hero.jpg */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/vandtaarn-hero.jpg')",
        }}
      />

      {/* Mørk gradient, så teksten står skarpt */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-background/95" />

      {/* Hvid ramme som på plakaten */}
      <div className="absolute inset-3 sm:inset-4 border-[6px] sm:border-8 border-white/90 rounded-sm pointer-events-none" />

      {/* Indhold */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-6 sm:space-y-7">
          {/* MUSIK / VED VANDTÅRNET / PRÆSENTERER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="bg-accent-red px-6 py-4 sm:px-7 sm:py-5 border-2 border-white shadow-lg">
              <div className="text-white font-display font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.1em]">
                MUSIK
              </div>
              <div className="text-accent-yellow font-display font-semibold text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] mt-1">
                VED VANDTÅRNET
              </div>
              <div className="text-white font-display font-medium text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1">
                PRÆSENTERER
              </div>
            </div>
          </motion.div>

          {/* SOMMER 2026 + undertekst */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="font-display font-bold text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] text-white uppercase tracking-[0.16em] leading-tight">
              SOMMER 2026
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
              Gratis koncerter ved Grindsted Vandtårn med stemning, lys og musik hele sommeren.
            </p>
          </motion.div>

          {/* CTA-bånd inspireret af plakaten */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="space-y-2"
          >
            <div className="inline-flex flex-wrap items-center gap-2 bg-accent-yellow px-5 py-2 sm:px-6 sm:py-2.5 font-display font-bold text-[11px] sm:text-xs md:text-sm text-background uppercase tracking-[0.2em] shadow-md">
              <span>GRATIS KONCERTER</span>
              <span className="hidden sm:inline">·</span>
              <span>VED GRINDSTED VANDTÅRN</span>
            </div>
            <p className="font-sans text-[13px] sm:text-sm text-white/80">
              Scroll ned for at se datoer og artister for alle arrangementer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
