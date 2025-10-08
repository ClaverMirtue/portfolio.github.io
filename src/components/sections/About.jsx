import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../SectionHeader'

export default function About() {
  return (
    <section id="about" className="section about about--showcase">
      <div className="container about__grid">
        <div className="about__left">
          {portfolioData.aboutPhoto ? (
            <motion.img
              src={portfolioData.aboutPhoto}
              alt={portfolioData.name}
              className="about__photo"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            />
          ) : null}
          <div className="about__dots" />
          <div className="grain" />
        </div>
        <div className="about__right">
          <motion.h2 className="about__title" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>MY BIOGRAPHY</motion.h2>
          <div className="about__underline" />
          <motion.p className="about__text" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .05 }}>
            {portfolioData.intro}
          </motion.p>
          {portfolioData.expertise?.length ? (
            <motion.p className="about__text" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .1 }}>
              {portfolioData.expertise[0]}
            </motion.p>
          ) : null}
          <div className="about__skills">
            <h3>Skill & Interest</h3>
            <div className="chip-row">
              {(portfolioData.skills || []).slice(0, 8).map((s) => (
                <span key={s} className="chip chip--outline">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about__line">
        <span className="dot" />
        <span className="label">PORTFOLIO {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}


