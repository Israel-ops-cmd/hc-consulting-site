import { m } from 'framer-motion'
import { MapPin } from 'lucide-react'
import BlurText from './BlurText.jsx'
import CtaButton from './CtaButton.jsx'
import { stats } from '../data/site.js'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-16 lg:pb-24">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl text-center">
        <m.p {...fadeUp(0)} className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-ink-soft">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-teal opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-teal" />
          </span>
          Diagnóstico financeiro em 48 horas
        </m.p>

        <h1 id="hero-title" className="mt-7 font-heading text-[2rem] font-bold leading-[1.15] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.75rem]">
          <BlurText
            text="Contabilidade em Natal e para todo o Brasil: pague menos imposto e lucre mais"
            highlight={['lucre', 'mais']}
            className="mx-auto block max-w-4xl text-balance"
          />
        </h1>

        <m.p {...fadeUp(0.9)} className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft sm:text-lg">
          Contabilidade, financeiro e folha da sua empresa num só lugar, com atendimento direto do sócio e números que você entende
        </m.p>

        <m.div {...fadeUp(1.0)} className="glass mx-auto mt-7 flex w-fit max-w-full items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 text-left">
          <img
            src="/heider-avatar.jpg"
            alt="Heider Costa, contador e sócio-fundador da HC Consulting"
            width="280"
            height="280"
            className="size-14 shrink-0 rounded-full object-cover ring-2 ring-white"
          />
          <span className="text-[13px] leading-tight sm:text-sm">
            <span className="block font-bold text-ink">Heider Costa</span>
            <span className="mt-0.5 flex items-center gap-1 text-ink-soft">
              Contador e sócio-fundador
              <MapPin className="ml-1 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
              Natal/RN
            </span>
          </span>
        </m.div>

        <m.div {...fadeUp(1.1)} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" />
          <a
            href="#servicos"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-[15px] font-semibold text-ink underline-offset-4 hover:underline sm:w-auto"
          >
            Ver o que fazemos
          </a>
        </m.div>
      </div>

      <m.ul {...fadeUp(1.25)} className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Números da HC Consulting">
        {stats.map((s) => (
          <li key={s.value} className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-left sm:flex-col sm:items-start sm:gap-1">
            <span className="font-heading text-3xl font-extrabold leading-none tracking-tight text-brand-blue">{s.value}</span>
            <span className="text-sm leading-snug text-ink-soft">{s.label}</span>
          </li>
        ))}
      </m.ul>
    </section>
  )
}
