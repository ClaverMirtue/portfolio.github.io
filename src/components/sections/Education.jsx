import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export default function Education() {
  const edu = portfolioData.education
  if (!edu) return null
  return (
    <section id="education" className="section education education--showcase">
      <div className="container education__grid">
        <div className="education__left">
          <motion.h2 className="education__title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>EDUCATION</motion.h2>
          <div className="education__underline" />
          {portfolioData.educationImage ? (
            <motion.img
              src={portfolioData.educationImage}
              alt="Education"
              className="education__banner"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
            />
          ) : null}
          <p className="muted">{edu.degree}</p>
        </div>
        <div className="education__right">
          <div className="education__range">{edu.range}</div>
          <div className="education__items">
            {(edu.items || [edu]).map((item) => (
              <div key={`${item.degree}-${item.range}`} className="education__item">
                <h3 className="education__itemTitle">{item.degree}</h3>
                {item.institution ? <p className="muted">{item.institution} {item.range ? `| ${item.range}` : ''}</p> : (item.range ? <p className="muted">{item.range}</p> : null)}
                {Array.isArray(item.details) && item.details.length ? (
                  <ul className="education__bullets">
                    {item.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="education__line">
        <span className="dot" />
        <span className="label">PORTFOLIO {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}


