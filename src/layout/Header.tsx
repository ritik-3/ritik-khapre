import { Container } from '../components/Container'
import { site } from '../config/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-zinc-50">
          {site.name}
        </a>
        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  )
}
