import { m } from 'framer-motion'

// Entra palavra por palavra com blur + fade. Respeita "reduzir movimento" via MotionConfig no App.
// Use children como string; trechos em destaque podem ser passados em `highlight` (palavras exatas).
export default function BlurText({ text, highlight = [], as: Tag = 'span', className = '', delay = 0, stagger = 0.06 }) {
  const words = text.split(' ')
  const MotionTag = m[Tag] ?? m.span

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <m.span
          key={`${word}-${i}`}
          className={`inline-block will-change-transform ${highlight.includes(word.replace(/[.,!?]/g, '')) ? 'text-gradient pr-[0.06em]' : ''}`}
          variants={{
            hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
          {i < words.length - 1 && ' '}
        </m.span>
      ))}
    </MotionTag>
  )
}
