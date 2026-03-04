type FooterSectionProps = {
  name: string
  githubHref: string
  linkedinHref: string
}

export function FooterSection({
  name,
  githubHref,
  linkedinHref,
}: FooterSectionProps) {
  return (
    <footer className="mt-12 border-t border-white/10 py-8 text-sm text-zinc-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {name}</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href={githubHref}>
            GitHub
          </a>
          <a className="hover:text-white" href={linkedinHref}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
