import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../SectionHeader'
import Card from '../ui/Card'

export default function Projects() {
  return (
    <section id="projects" className="section projects projects--showcase">
      <div className="container">
        <SectionHeader kicker="Selected" title="Selected Project" subtitle="A few highlights from recent work" />
        <div className="projects__decor" />
        <div className="projects__grid">
          {portfolioData.projects.slice(0, 4).map((p, i) => (
            <Card
              key={p.name}
              className="projectCard"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {p.image ? (
                <div className="projectCard__media">
                  <img src={p.image} alt={p.name} />
                </div>
              ) : null}
              <h3 className="projectCard__title">{p.name} {p.year ? `| ${p.year}` : ''}</h3>
              <p className="muted">{p.description}</p>
            </Card>
          ))}
        </div>
        <div className="projects__sideYears">{computeProjectsRange(portfolioData.projects)}</div>
        <div className="projects__line">
          <span className="dot" />
          <span className="label">PORTFOLIO {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  )
}

function computeProjectsRange(list) {
  if (!Array.isArray(list) || list.length === 0) return ''
  const years = list.map(p => p.year).filter(Boolean)
  if (!years.length) return ''
  const min = Math.min(...years)
  const max = Math.max(...years)
  return `${min} - ${max}`
}


