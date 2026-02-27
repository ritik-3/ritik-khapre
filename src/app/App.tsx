import { Container } from '../components/Container'
import { Header } from '../layout/Header'
import { site } from '../config/site'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { FooterSection } from '../sections/FooterSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <Header />

      <main id="top" className="py-12">
        <Container>
          <HeroSection stackLine={site.stackLine} tagline={site.tagline} />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
          <FooterSection
            name={site.name}
            githubHref={site.social.github}
            linkedinHref={site.social.linkedin}
          />
        </Container>
      </main>
    </div>
  )
}
