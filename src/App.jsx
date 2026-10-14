import { useEffect, useState } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { About, Faq, FinalCta, Method, Pains, Services, Testimonials } from './components/Sections.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import { whatsappLink } from './data/site.js'

export default function App() {
  // Esconde o botão flutuante quando o formulário final está na tela, para não cobrir o botão de envio
  const [hideFloat, setHideFloat] = useState(false)
  useEffect(() => {
    const el = document.getElementById('contato')
    if (!el) return
    const io = new IntersectionObserver(([e]) => setHideFloat(e.isIntersecting), { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

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
          className={`fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-[transform,opacity] duration-300 hover:scale-105 md:bottom-6 md:right-6 ${hideFloat ? 'pointer-events-none translate-y-4 opacity-0' : ''}`}
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </MotionConfig>
    </LazyMotion>
  )
}
