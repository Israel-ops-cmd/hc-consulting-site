// Google Analytics 4 e Pixel da Meta. Só carregam se os IDs estiverem configurados
// (arquivo .env local ou variáveis de ambiente na Vercel). Ver .env.example.
const GA_ID = import.meta.env.VITE_GA_ID
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

function loadScript(src) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

export function initAnalytics() {
  if (GA_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID)
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
  }

  if (PIXEL_ID) {
    const fbq = function fbq() {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments)
    }
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = window._fbq = fbq
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
    loadScript('https://connect.facebook.net/en_US/fbevents.js')
  }

  // Todo clique em link de WhatsApp vira conversão
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href*="wa.me"]')
    if (link) track('whatsapp_click', { location: link.closest('section, header, footer')?.id || 'flutuante' })
  })
}

export function track(name, params = {}) {
  window.gtag?.('event', name === 'lead_form' ? 'generate_lead' : 'contact', { method: name, ...params })
  window.fbq?.('track', name === 'lead_form' ? 'Lead' : 'Contact', params)
}
