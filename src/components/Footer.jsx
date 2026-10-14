import { MapPin, Phone } from 'lucide-react'
import { contact, nav, whatsappLink } from '../data/site.js'
import { InstagramIcon, WhatsAppIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 pb-28 pt-14 sm:px-8 md:pb-14 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <img src="/logo-hc.png" alt="HC Consulting Empresarial & Contábil" width="199" height="139" loading="lazy" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Contabilidade estratégica, BPO financeiro e departamento pessoal para pequenas e médias empresas
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Navegação</h2>
          <ul className="mt-4 grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-10 items-center text-[15px] text-ink hover:text-brand-blue">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Contato</h2>
          <ul className="mt-4 grid gap-1 text-[15px]">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2.5 hover:text-brand-blue">
                <WhatsAppIcon className="size-4 text-brand-teal-deep" /> WhatsApp {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className="inline-flex min-h-10 items-center gap-2.5 hover:text-brand-blue">
                <Phone className="size-4 text-brand-teal-deep" aria-hidden="true" /> Ligar {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2.5 hover:text-brand-blue">
                <InstagramIcon className="size-4 text-brand-teal-deep" /> {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-start gap-2.5 py-2 hover:text-brand-blue">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-teal-deep" aria-hidden="true" /> {contact.address}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-line pt-6 text-xs text-ink-soft">
        © {new Date().getFullYear()} HC Consulting Empresarial & Contábil · Natal/RN
      </p>
    </footer>
  )
}
