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
    <footer className="mt-16 border-t border-zinc-200 py-8 text-sm text-zinc-600">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {name}</p>
        <div className="flex gap-4">
          <a className="hover:text-zinc-900" href={githubHref}>
            GitHub
          </a>
          <a className="hover:text-zinc-900" href={linkedinHref}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
