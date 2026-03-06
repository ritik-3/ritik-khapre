import { motion } from 'framer-motion'
import { site } from '../config/site'

const projects = [
  {
    title: 'Decode Data Academy',
    description:
      'Modern, responsive course platform with a custom Django admin panel for managing students, batches, and placements.',
    link: 'https://decodedataacademy.com',
    tag: 'Full-stack Site',
    year: '2024',
  },
  {
    title: 'DDA Contest',
    description:
      'Production-ready coding contest platform with unified Programming + MCQ contests, timeboxed attempts, and PIN-gated access.',
    link: 'https://ddacontest.com',
    tag: 'Web Platform',
    year: '2024',
  },
  {
    title: 'Amazon Sales Data',
    description:
      'Exploratory analysis on Amazon sales data with cleaning, insights, and clear visualizations.',
    link: 'https://github.com/ritik-3/amazon_sales_project',
    tag: 'Data Analysis',
    year: '2024',
  },
  {
    title: 'Blinkit Analytics',
    description:
      'Power BI dashboard exploring pricing, categories, and product attributes behind high-performing items.',
    link: 'https://github.com/ritik-3/blinkit_grocesry',
    tag: 'Power BI',
    year: '2023',
  },
  {
    title: 'Bike Store Database',
    description:
      '9-table relational schema + analysis and dashboards to surface customer and revenue trends.',
    link: 'https://github.com/ritik-3/bike_store_project_sql',
    tag: 'SQL Dashboard',
    year: '2023',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="flex flex-col gap-12 md:gap-20"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <motion.span
              variants={itemVariants}
              className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
            >
              // Selected Works
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-2 text-5xl font-bold uppercase leading-none tracking-tighter text-zinc-100 sm:text-7xl"
            >
              Projects
            </motion.h2>
          </div>
          <motion.p
            variants={itemVariants}
            className="max-w-xs text-sm leading-relaxed text-zinc-400"
          >
            {site.copy.projectsIntro}{' '}
            <a
              className="text-zinc-50 underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-zinc-300"
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </motion.p>
        </div>

        <div className="flex flex-col border-t border-zinc-800">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              variants={itemVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between gap-6 border-b border-zinc-800 py-10 transition-colors hover:bg-zinc-900/50 sm:flex-row sm:items-center px-4 -mx-4 sm:px-6 sm:-mx-6 rounded-lg sm:rounded-none sm:hover:bg-transparent"
            >
              <div className="flex gap-6 sm:w-1/3 sm:items-center">
                <span className="font-mono text-sm tracking-widest text-zinc-600 transition-colors group-hover:text-zinc-400">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-100 transition-colors group-hover:text-white md:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-3 sm:pl-8">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500">
                  {project.tag} &mdash; {project.year}
                </span>
                <p className="max-w-md text-sm text-zinc-400">
                  {project.description}
                </p>
              </div>

              <div className="hidden shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-transparent text-zinc-500 transition-all duration-300 group-hover:-rotate-45 group-hover:border-zinc-500 group-hover:text-zinc-100 sm:flex sm:h-14 sm:w-14">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-zinc-300 sm:hidden">
                <span className="mt-1">View Project</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
