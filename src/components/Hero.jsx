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
          A HC Consulting cuida da contabilidade, do financeiro e da folha de pequenas e médias empresas, com atendimento direto do sócio
          para você entender seus números e parar de pagar imposto no escuro
        </m.p>

        <m.div {...fadeUp(1.05)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" />
          <a
            href="#servicos"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-[15px] font-semibold text-ink underline-offset-4 hover:underline sm:w-auto"
          >
            Ver o que fazemos
          </a>
        </m.div>

        <m.p {...fadeUp(1.15)} className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin className="size-4 text-brand-teal-deep" aria-hidden="true" />
          Escritório em Natal/RN · atendimento online em todo o Brasil
        </m.p>
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
