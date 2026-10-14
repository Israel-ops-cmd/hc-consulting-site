import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './Icons.jsx'
import { whatsappLink } from '../data/site.js'

// Botão principal: sempre leva ao WhatsApp. Mínimo de 48px de altura para toque.
export default function CtaButton({ children = 'Conversar no WhatsApp', message, variant = 'primary', className = '' }) {
  const styles = {
    primary:
      'brand-gradient text-white shadow-[0_12px_30px_-10px_rgba(0,96,183,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(0,96,183,0.7)]',
    light: 'bg-white text-ink hover:bg-white/90 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.45)]',
  }

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
