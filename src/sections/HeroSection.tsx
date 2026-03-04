import { motion } from 'framer-motion'

type HeroSectionProps = {
  stackLine: string
  tagline: string
  bio: string
}

export function HeroSection({ stackLine, tagline, bio }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <p className="text-sm font-medium text-zinc-300">{stackLine}</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {tagline}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-zinc-200">
        {bio}
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
        >
          Contact
        </a>
      </div>
    </motion.section>
  )
}
