import { Container } from '../components/Container'
import { site } from '../config/site'

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="flex items-center gap-4 text-sm text-zinc-700">
          <a className="hover:text-zinc-900" href="#projects">
            Projects
          </a>
          <a className="hover:text-zinc-900" href="#about">
            About
          </a>
          <a className="hover:text-zinc-900" href="#contact">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  )
}
