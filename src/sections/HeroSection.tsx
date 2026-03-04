import { motion } from 'framer-motion'

type HeroSectionProps = {
  stackLine: string
  tagline: string
  bio: string
  isLoaded?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
}

export function HeroSection({ tagline, isLoaded = true }: HeroSectionProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="relative w-full h-[100svh] min-h-[600px] bg-black overflow-hidden"
    >
      {/* Background Image Layer (spanning full right side like reference) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        
        {/* The user's transparent portrait, moved slightly inward from the right */}
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
            visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.2, 0.65, 0.3, 0.9] } }
          }}
          src="/hero.png"
          alt="Ritik Khapre"
          loading="eager"
          decoding="async"
          className="absolute bottom-0 right-0 sm:right-[5%] md:right-[10%] lg:right-[15%] h-[95%] sm:h-full w-full sm:w-[85%] md:w-[75%] lg:w-[65%] object-cover object-bottom"
        />
        
        {/* Soft dark blend strictly on the left half so the text pops, leaving the face completely clear */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[45%] lg:w-[40%] bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Main Foreground Layout */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 pt-[100px] sm:pt-[120px] pb-12 sm:pb-16 max-w-7xl pointer-events-none">
        
        {/* Top Left: Massive Ident */}
        <motion.div variants={itemVariants} className="pointer-events-auto">
          <h1 className="text-[clamp(6rem,16vw,14rem)] font-bold uppercase leading-[0.8] tracking-tighter text-white -ml-1 sm:-ml-2">
            RITIK
          </h1>
        </motion.div>

        {/* Bottom area logic */}
        <div className="relative flex-1 flex flex-col justify-end">
          
          {/* Left Side Axis (2K26 / Vertical line / PORTFOLIO) */}
          <motion.div variants={itemVariants} className="absolute left-0 sm:left-2 top-[35%] sm:top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 sm:gap-6 pointer-events-auto">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-zinc-200">
              2K26
            </span>
            <span className="w-[1px] h-16 sm:h-24 bg-zinc-600" />
            <span
              className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] text-zinc-300"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(-180deg)' }}
            >
              ./ PORTFOLIO
            </span>
          </motion.div>

          {/* Bottom Left: Tagline */}
          <motion.div variants={itemVariants} className="pl-14 sm:pl-20 max-w-[280px] sm:max-w-md pointer-events-auto">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-zinc-200 mb-6">
              {tagline}
            </p>
            <motion.a 
              href="#projects" 
              aria-label="Scroll to projects"
              whileHover={{ y: 4 }}
              className="inline-block text-zinc-400 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Floating Cut-off Text */}
      <motion.div 
        variants={itemVariants} 
        className="absolute -bottom-[2vh] -right-2 sm:-bottom-[3vh] sm:right-6 z-20 pointer-events-none select-none overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-none tracking-tighter text-white"
        >
          KHAPRE
        </div>
      </motion.div>
    </motion.section>
  )
}
