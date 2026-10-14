import { m } from 'framer-motion'

// Aparece ao rolar até o elemento. Só opacity + transform (GPU).
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = m[as] ?? m.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
