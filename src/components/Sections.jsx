import { useState } from 'react'
import { ArrowUpRight, Calculator, CalendarCheck, Check, FileSearch, Handshake, MessageCircle, Plus, Quote, ShieldCheck, Users, Wallet } from 'lucide-react'
import Reveal from './Reveal.jsx'
import LeadForm from './LeadForm.jsx'
import { differentials, extraServices, faqs, pains, services, steps, testimonials } from '../data/site.js'

const icons = { Calculator, FileSearch, Wallet, Users, Handshake, MessageCircle, CalendarCheck, ShieldCheck }

function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal-deep">
      {children}
    </p>
  )
}

function SectionTitle({ id, eyebrow, title, accent, children, center = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-5 font-heading text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.6rem]">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {children && <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{children}</p>}
    </Reveal>
  )
}

export function Pains() {
  return (
    <section aria-labelledby="dores-title" className="px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <SectionTitle id="dores-title" eyebrow="Se identificou?" title="Contabilidade não devia ser" accent="só guia de imposto.">
          A maioria dos empresários que chega até nós tem a mesma sensação: paga caro e não sabe pelo quê
        </SectionTitle>
        <ul className="grid gap-3">
          {pains.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 0.06} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
              <p className="text-[16px] leading-relaxed text-ink">{p}</p>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.3} className="px-1 pt-2 text-[16px] font-semibold text-brand-blue">
            Dá para resolver, e é exatamente isso que fazemos
          </Reveal>
        </ul>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative scroll-mt-24 px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="servicos-title" eyebrow="Serviços" title="O que a HC faz pela" accent="sua empresa">
          Quatro frentes que se conversam: contrate só uma ou deixe tudo com a nossa equipe
        </SectionTitle>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal as="article" key={s.id} delay={(i % 2) * 0.08} className="glass group flex flex-col rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="brand-gradient grid size-12 place-items-center rounded-2xl text-white">
                    <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading text-xl font-bold text-ink-soft/40" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink-soft">{s.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Inclui">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold text-ink-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 flex flex-col gap-4 rounded-2xl border border-dashed border-line bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-ink-soft">
            <strong className="font-semibold text-ink">Também fazemos:</strong> {extraServices.join(' · ')}
          </p>
          <a
            href="#contato"
            className="inline-flex min-h-12 items-center gap-1.5 text-[15px] font-semibold text-brand-blue hover:underline"
          >
            Perguntar sobre outro serviço <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Method() {
  return (
    <section id="como-funciona" aria-labelledby="metodo-title" className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="metodo-title" eyebrow="Como funciona" title="Do primeiro contato ao" accent="resultado no caixa" center />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative rounded-2xl border border-line bg-white p-6">
              <span className="font-heading text-4xl font-extrabold leading-none text-gradient">{i + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section aria-labelledby="sobre-title" className="px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-80 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06ca9c, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-16 size-96 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #0060b7, transparent 70%)' }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <FounderPhoto />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">Quem está por trás</p>
            <h2 id="sobre-title" className="mt-5 font-heading text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[2.6rem]">
              Mais de 10 anos ajudando empresário a <span className="text-brand-teal">dormir tranquilo</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/80">
              A HC Consulting nasceu com uma ideia simples: o empresário merece entender os próprios
              números. Com experiência em auditoria e controladoria, nossa contabilidade já atendeu mais de 150 empresas no Rio Grande do
              Norte e em outros estados
            </p>
            <ul className="mt-8 grid gap-3 text-[15px] text-white/90">
              {['Consultor dedicado para a sua empresa', 'Reunião de estratégia todo mês', 'Relatórios em linguagem simples'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check className="size-5 shrink-0 text-brand-teal" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d, i) => {
              const Icon = icons[d.icon]
              return (
                <Reveal as="li" key={d.title} delay={i * 0.07} className="glass-dark rounded-2xl p-5">
                  <Icon className="size-6 text-brand-teal" aria-hidden="true" strokeWidth={1.75} />
                  <h3 className="mt-4 text-base font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">{d.text}</p>
                </Reveal>
              )
            })}
        </ul>

        <Reveal className="relative mt-12 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-[200px_1fr] sm:gap-8 sm:p-5">
          <img
            src="/heider-summit.jpg"
            alt="Heider Costa no 3º Summit Fiscal Nordeste"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-xl object-cover sm:w-[200px]"
          />
          <div className="sm:pr-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">Sempre atualizado</p>
            <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">A lei muda toda hora, e nós acompanhamos de perto</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Nossa contabilidade está presente nos eventos da área, como o 3º Summit Fiscal Nordeste, para levar aos clientes o que muda nos
              impostos antes que vire problema
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Foto do contador: coloque o arquivo em public/heider.jpg (retrato vertical, ~800x1000).
// Enquanto a foto não existir, aparece um cartão com o logo no lugar.
function FounderPhoto() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <figure className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-white/15">
        {hasPhoto ? (
          <img
            src="/heider.jpg"
            alt="Heider Costa, contador e sócio-fundador da HC Consulting"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            onError={() => setHasPhoto(false)}
            className="size-full object-cover"
          />
        ) : (
          <div className="grid size-full place-items-center bg-white">
            <img src="/logo-hc.png" alt="" width="199" height="139" loading="lazy" className="w-1/2" />
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>
      <figcaption className="glass-dark absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3">
        <span className="block text-[15px] font-bold">Heider Costa</span>
        <span className="block text-sm text-white/75">Contador e sócio-fundador</span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="depoimentos-title" eyebrow="Clientes" title="Quem já passou pelo" accent="diagnóstico" center>
          Resultados contados por quem vive a empresa no dia a dia
        </SectionTitle>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={(i % 2) * 0.08} className="flex flex-col rounded-2xl border border-line bg-white p-6 sm:p-8">
              <Quote className="size-7 text-brand-teal" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[1.1rem] font-medium leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="brand-gradient grid size-10 place-items-center rounded-full text-sm font-bold text-white" aria-hidden="true">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <span>
                  <span className="block text-[15px] font-bold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-soft">{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionTitle id="duvidas-title" eyebrow="Dúvidas" title="Perguntas que todo" accent="empresário faz">
          Não achou a sua? Manda no WhatsApp que respondemos
        </SectionTitle>
        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-line bg-white open:shadow-[0_10px_30px_-18px_rgba(0,96,183,0.4)]">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-semibold text-ink">
                  {f.q}
                  <Plus className="size-5 shrink-0 text-brand-blue transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-24 px-4 pb-24 pt-8 sm:px-8 lg:px-16">
      <Reveal className="brand-gradient relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] px-5 py-14 text-white sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-30" />
        <div className="relative text-center lg:text-left">
          <h2 id="contato-title" className="font-heading text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-5xl">
            Quanto sua empresa está pagando a mais?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90 lg:mx-0">
            Responda três perguntas rápidas e em 48 horas você recebe o diagnóstico mostrando exatamente onde ajustar
          </p>
          <ul className="mx-auto mt-6 grid max-w-sm gap-2 text-left text-[15px] text-white/90 lg:mx-0">
            {['Sem compromisso', 'Conversa direto com o sócio', 'Resposta em até 4 horas úteis'].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Check className="size-5 shrink-0 text-white" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <LeadForm />
        </div>
      </Reveal>
    </section>
  )
}
