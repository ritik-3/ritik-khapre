import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Container } from '../components/Container'
import { LoadingScreen } from '../components/LoadingScreen'
import { NavbarSection } from '../sections/NavbarSection'
import { site } from '../config/site'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { FooterSection } from '../sections/FooterSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="min-h-dvh bg-black text-zinc-50">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : null}
      </AnimatePresence>

      <NavbarSection isLoaded={!isLoading} />

      <main id="top" className="pb-10 sm:pb-12">
        <HeroSection
          stackLine={site.stackLine}
          tagline={site.tagline}
          bio={site.copy.heroBio}
          isLoaded={!isLoading}
        />

        <Container className="pt-10 sm:pt-12">
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
