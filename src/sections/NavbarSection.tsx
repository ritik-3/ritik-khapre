import { site } from '../config/site'

export function NavbarSection() {
  return (
    <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 py-6 sm:py-8 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 pointer-events-auto">
      <div className="flex-1">
        <a href="#top" className="text-white hover:text-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors">Projects</a>
      </div>
      <nav aria-label="Main Navigation" className="hidden sm:flex flex-1 justify-center gap-12 lg:gap-24">
        <a href="#about" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors">About</a>
        <a href="#contact" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors">Contact</a>
      </nav>
      <div className="flex-1 flex justify-end gap-3 sm:gap-6">
        <a href={`mailto:${site.contact.email}`} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors" aria-label="Send an email">Mail</a>
        <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors" aria-label="LinkedIn Profile">LI</a>
        <a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950 rounded-sm transition-colors" aria-label="GitHub Profile">GH</a>
      </div>
    </header>
  )
}
