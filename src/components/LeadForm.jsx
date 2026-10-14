import { useState } from 'react'
import { WhatsAppIcon } from './Icons.jsx'
import { whatsappLink } from '../data/site.js'
import { track } from '../analytics.js'

// Mini formulário: não envia nada para servidor, só monta a mensagem e abre o WhatsApp.
const segments = ['Comércio', 'Serviços', 'Saúde (clínica, consultório)', 'Indústria', 'Construção', 'Tecnologia', 'Outro']
const revenues = ['Até R$ 500 mil por ano', 'R$ 500 mil a R$ 1 milhão', 'R$ 1 a 5 milhões', 'R$ 5 a 50 milhões', 'Ainda vou abrir a empresa']

const field =
  'min-h-12 w-full rounded-xl border border-line bg-white px-4 text-[16px] text-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', segment: '', revenue: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const message = [
      `Olá! Vim pelo site da HC Consulting e quero fazer o diagnóstico financeiro da minha empresa`,
      ``,
      `Nome: ${form.name.trim()}`,
      `Segmento: ${form.segment}`,
      `Faturamento: ${form.revenue}`,
    ].join('\n')
    track('lead_form', { segment: form.segment, revenue: form.revenue })
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="w-full rounded-3xl bg-white p-5 text-left text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-7">
      <p className="text-lg font-bold">Peça seu diagnóstico</p>
      <p className="mt-1 text-sm text-ink-soft">Leva 20 segundos e abre direto no WhatsApp</p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Seu nome</span>
          <input required autoComplete="name" value={form.name} onChange={set('name')} className={field} placeholder="Como podemos te chamar?" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Segmento da empresa</span>
          <select required value={form.segment} onChange={set('segment')} className={field}>
            <option value="" disabled>
              Selecione
            </option>
            {segments.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">Faturamento anual</span>
          <select required value={form.revenue} onChange={set('revenue')} className={field}>
            <option value="" disabled>
              Selecione
            </option>
            {revenues.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="brand-gradient group mt-6 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="size-5" />
        Enviar pelo WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">Sem compromisso e sem spam</p>
    </form>
  )
}
