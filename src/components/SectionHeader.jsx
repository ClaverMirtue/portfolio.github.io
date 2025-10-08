import { motion } from 'framer-motion'

export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="section-header">
      {kicker ? <motion.span initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }} className="kicker">{kicker}</motion.span> : null}
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
        {title}
      </motion.h2>
      {subtitle ? <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .05 }} className="muted">{subtitle}</motion.p> : null}
    </div>
  )
}


