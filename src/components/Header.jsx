import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, whatsappLink } from '../data/site.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 transition-[background-color,box-shadow] duration-300 sm:pl-6 ${
          scrolled || open ? 'glass' : 'bg-transparent'
        }`}
      >
        <a href="#topo" className="flex items-center gap-2.5" aria-label="HC Consulting, voltar ao início">
          <img src="/logo-hc.png" alt="" width="199" height="139" className="h-11 w-auto" fetchPriority="high" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-white/70 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Conversar agora
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-12 place-items-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium hover:bg-white/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
