import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type LoadingScreenProps = {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  // Using a single text state to sequence the animations.
  // Null indicates a pause or transition if needed, but here we switch directly.
  const [activeText, setActiveText] = useState("Think.")
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Faster timeline: words appear every 1.4s instead of 2.0s
    const timeline = [
      { text: "Think.", delay: 0 },
      { text: "See.", delay: 1400 },
      { text: "Scale.", delay: 2800 },
    ]

    // Schedule the text changes
    const timeouts = timeline.map((item) => 
      setTimeout(() => setActiveText(item.text), item.delay)
    )

    // Signal completion after the final text has had its moment
    const completionTimeout = setTimeout(() => {
      onLoadingComplete()
    }, 4800) // Total duration ~4.8s

    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(completionTimeout)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white px-4"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%', 
        transition: { 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1] 
        } 
      }}
    >
      {/* 
        This is a "Curtain" or "Mask" reveal effect.
        The text slides up from a masked container.
      */}
      <div className="relative overflow-hidden h-32 md:h-48 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeText}
            className="absolute inset-0 flex items-center justify-center"
            initial={shouldReduceMotion ? { opacity: 0 } : { y: "110%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: "0%" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: "-110%" }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1] // Faster, snappier movement
            }}
          >
            <h1 
              className={`
                text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-center
                ${activeText === "Scale." ? "text-zinc-50" : "text-zinc-300"}
              `}
            >
              {activeText}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        Optional: A very subtle progress line at the bottom to show activity 
        hidden on reduced motion or screen readers 
      */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-[2px] w-48 bg-zinc-900 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.8, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  )
}
