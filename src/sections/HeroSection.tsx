import { motion } from 'framer-motion'

type HeroSectionProps = {
  stackLine: string
  tagline: string
}

export function HeroSection({ stackLine, tagline }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="space-y-4"
    >
      <p className="text-sm font-medium text-zinc-600">{stackLine}</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {tagline}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-zinc-700">
        Replace this text with a short bio: what you do, what you’re currently
        focused on, and what kind of roles/projects you want.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          Contact
        </a>
      </div>
    </motion.section>
  )
}
