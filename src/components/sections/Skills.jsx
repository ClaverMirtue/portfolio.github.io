import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../SectionHeader'

export default function Skills() {
  const [active, setActive] = useState(portfolioData.skills?.[0] || '')
  return (
    <section id="skills" className="section skills skills--showcase">
      <div className="container">
        <SectionHeader kicker="Toolkit" title="Skills" subtitle="Technologies I use to build" />
        <div className="skills__grid">
          {portfolioData.skills.map((s, i) => (
            <motion.button
              key={s}
              className={`skillCard ${active === s ? 'is-active' : ''}`}
              onClick={() => setActive(s)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.03, type: 'spring', stiffness: 260, damping: 18 }}
            >
              <span className="skillCard__dot" />
              <span>{s}</span>
            </motion.button>
          ))}
        </div>
        <motion.div key={active} className="skills__activePanel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
          <span className="muted">Selected:</span> {active}
        </motion.div>
      </div>
    </section>
  )
}


