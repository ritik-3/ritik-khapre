import { site } from '../config/site'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-sm text-zinc-300">
        {site.copy.projectsIntro}{' '}
        <a
          className="text-zinc-100 underline hover:text-white"
          href={site.social.github}
        >
          GitHub
        </a>
        .
      </p>

      <div className="mt-6 space-y-4">
        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold">DDA Contest</h3>
          <p className="mt-2 text-sm text-zinc-200">
            Production-ready coding contest platform with unified Programming + MCQ
            contests, timeboxed attempts, and PIN-gated access.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a
              className="text-zinc-100 underline hover:text-white"
              href="https://ddacontest.com"
            >
              Live
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold">Amazon Sales Data Analysis</h3>
          <p className="mt-2 text-sm text-zinc-200">
            Exploratory analysis on Amazon sales data with cleaning, insights, and
            clear visualizations.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a
              className="text-zinc-100 underline hover:text-white"
              href="https://github.com/ritik-3/amazon_sales_project"
            >
              Code
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold">Blinkit Grocery Product Analysis</h3>
          <p className="mt-2 text-sm text-zinc-200">
            Power BI dashboard exploring pricing, categories, and product attributes
            behind high-performing items.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a
              className="text-zinc-100 underline hover:text-white"
              href="https://github.com/ritik-3/blinkit_grocesry"
            >
              Code
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold">Bike Store Database Analysis</h3>
          <p className="mt-2 text-sm text-zinc-200">
            9-table relational schema + analysis and dashboards to surface customer
            and revenue trends.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a
              className="text-zinc-100 underline hover:text-white"
              href="https://github.com/ritik-3/bike_store_project_sql"
            >
              Code
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
