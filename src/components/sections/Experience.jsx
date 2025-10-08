import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="section experience experience--showcase">
      <div className="container experience__grid">
        <div className="experience__left">
          <motion.h2 className="experience__title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>EXPERIENCE</motion.h2>
          <div className="experience__underline" />
        </div>
        <div className="experience__right">
          <div className="experience__range">{computeRange(portfolioData.experience)}</div>
        </div>
      </div>
      <div className="container experience__list">
        {portfolioData.experience.map((r, i) => (
          <motion.div key={`${r.company}-${r.role}-${i}`} className="experience__row" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45 }}>
            <div className="experience__rowLeft">
              <div className="exp__bullet" />
              <div>
                <h3 className="exp__company">{r.company}</h3>
                <p className="muted">{r.role} {r.duration ? ` ${r.duration}` : ''}</p>
              </div>
            </div>
            <div className="experience__rowRight">
              {r.details ? <p className="muted">{r.details}</p> : <p className="muted">Worked on impactful features and cross‑functional collaboration.</p>}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="experience__line">
        <span className="dot" />
        <span className="label">PORTFOLIO {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}

function computeRange(list) {
  if (!Array.isArray(list) || list.length === 0) return ''
  const years = []
  for (const item of list) {
    const m = String(item.duration || '').match(/(\d{4}).*(\d{4}|Present)/)
    if (m) {
      const start = parseInt(m[1], 10)
      const end = m[2] === 'Present' ? new Date().getFullYear() : parseInt(m[2], 10)
      years.push(start, end)
    }
  }
  if (!years.length) return ''
  const min = Math.min(...years)
  const max = Math.max(...years)
  return `${min} - ${max}`
}


