import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { About, Faq, FinalCta, Method, Pains, Services, Testimonials } from './components/Sections.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import { whatsappLink } from './data/site.js'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Header />
        <main id="conteudo">
          <Hero />
          <Pains />
          <Services />
          <Method />
          <About />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />

        {/* Botão fixo de WhatsApp no celular */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105 md:bottom-6 md:right-6"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </MotionConfig>
    </LazyMotion>
  )
}
