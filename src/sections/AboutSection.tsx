import { site } from '../config/site'

export function AboutSection() {
  return (
    <section
      id="about"
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="text-lg font-semibold tracking-tight">About</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-200">
        {site.copy.about}
      </p>

      <h3 className="mt-6 text-sm font-semibold tracking-tight text-zinc-100">
        Skills
      </h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-200">
        <li>
          <span className="font-medium text-zinc-100">Programming:</span> Python,
          HTML/CSS
        </li>
        <li>
          <span className="font-medium text-zinc-100">
            Data analysis &amp; visualization:
          </span>{' '}
          Pandas, NumPy, Matplotlib, Seaborn, Power BI, Excel
        </li>
        <li>
          <span className="font-medium text-zinc-100">Tools &amp; platforms:</span>{' '}
          Django/DRF, Docker, Redis, Celery, Apache, Judge0, Git
        </li>
        <li>
          <span className="font-medium text-zinc-100">Databases:</span> PostgreSQL,
          SQL
        </li>
        <li>
          <span className="font-medium text-zinc-100">Soft skills:</span> Clear
          communication, team leadership, problem-solving, critical thinking,
          adaptability
        </li>
      </ul>
    </section>
  )
}
