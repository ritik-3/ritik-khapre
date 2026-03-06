import { motion, type Variants, type Transition } from 'framer-motion'
import { useEffect, useState } from 'react'
import { site } from '../config/site'

interface NavbarSectionProps {
  isLoaded?: boolean
}

export function NavbarSection({ isLoaded = true }: NavbarSectionProps) {
  const [hasSlid, setHasSlid] = useState(false)

  // Trigger the slide animation 4 seconds after the component loads (and curtain lifts)
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setHasSlid(true)
      }, 2000) // 2.0s wait as requested
      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  // Container fade-in animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 1.2, 
        ease: "easeOut"
      }
    }
  }

  // THIS is the key: The transition must be applied to the children!
  const fluidSlideTransition: Transition = {
    duration: 3.0,
    ease: [0.22, 1, 0.36, 1] // Very smooth, liquid-like ease out
  }

  return (
    <motion.header 
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="absolute top-0 inset-x-0 z-50 px-6 sm:px-10 py-6 sm:py-8 pointer-events-auto"
    >
      {/* Layout container */}
      <motion.div 
        layout
        transition={fluidSlideTransition}
        className={`flex items-center w-full ${hasSlid ? 'justify-between' : 'justify-end gap-12'}`}
      >
        {/* Projects Link - MUST have transition prop here */}
        <motion.div layout transition={fluidSlideTransition} className="hidden sm:block">
          <a href="#top" className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors">Projects</a>
        </motion.div>

        {/* About Link - MUST have transition prop here */}
        <motion.div layout transition={fluidSlideTransition} className="hidden sm:block">
          <a href="#about" className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors">About</a>
        </motion.div>

        {/* Contact Link - MUST have transition prop here */}
        <motion.div layout transition={fluidSlideTransition} className="hidden sm:block">
          <a href="#contact" className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors">Contact</a>
        </motion.div>

        {/* Socials Group - MUST have transition prop here */}
        <motion.div layout transition={fluidSlideTransition} className="flex gap-3 sm:gap-6 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300">
          <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">Mail</a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LI</a>
          <a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GH</a>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
