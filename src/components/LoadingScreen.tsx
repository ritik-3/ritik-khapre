import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo } from 'react'

type LoadingScreenProps = {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion()
  const swipeEase: [number, number, number, number] = [0.45, 0, 0.55, 1]
  const text = 'Jack of all trades, master of none'
  const letters = useMemo(() => {
    let animatedIndex = 0

    return Array.from(text).map((char) => {
      if (char === ' ') return { char, delayMs: null }

      const delayMs = animatedIndex * 80
      animatedIndex += 1

      return { char, delayMs }
    })
  }, [text])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onLoadingComplete()
    }, 4000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-zinc-950"
      role="status"
      aria-live="polite"
      aria-label="Loading site"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={
        prefersReducedMotion
          ? { duration: 0.2 }
          : { duration: 0.9, ease: swipeEase }
      }
      style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
    >
      <span className="sr-only">Loading site</span>

      <div className="select-none" aria-hidden="true">
        <div className="max-w-md px-6 text-center text-sm font-semibold leading-relaxed tracking-wide text-zinc-300 sm:text-base md:text-lg">
          {letters.map(({ char, delayMs }, index) =>
            delayMs === null ? (
              <span key={`space-${index}`} aria-hidden="true">
                &nbsp;
              </span>
            ) : (
              <span
                key={`${char}-${index}`}
                className="dda-loading-letter inline-block transform-gpu"
                style={{ animationDelay: `${delayMs}ms` }}
              >
                {char}
              </span>
            )
          )}
        </div>
      </div>

      <style>{`
        .dda-loading-letter {
          animation: ddaFloatPulse 900ms cubic-bezier(${swipeEase.join(
            ','
          )}) infinite alternate;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }

        @keyframes ddaFloatPulse {
          0% {
            opacity: 0.55;
            transform: translate3d(0, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, -3px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dda-loading-letter {
            animation: none;
            opacity: 0.9;
            transform: none;
          }
        }
      `}</style>
    </motion.div>
  )
}
