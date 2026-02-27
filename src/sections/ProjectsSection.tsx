export function ProjectsSection() {
  return (
    <section id="projects" className="mt-14">
      <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Add 2–4 strong projects with links.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[1, 2].map((index) => (
          <article key={index} className="rounded-lg border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold">Project Title</h3>
            <p className="mt-2 text-sm text-zinc-700">
              One-liner: what it is + impact.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="text-zinc-900 underline" href="#">
                Live
              </a>
              <a className="text-zinc-900 underline" href="#">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
