import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Container } from '../components/Container'
import { LoadingScreen } from '../components/LoadingScreen'
import { Header } from '../layout/Header'
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
    <div className="min-h-dvh bg-zinc-950 text-zinc-50">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : null}
      </AnimatePresence>

      <Header />

      <main id="top" className="py-10 sm:py-12">
        <Container>
          <HeroSection
            stackLine={site.stackLine}
            tagline={site.tagline}
            bio={site.copy.heroBio}
          />
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
