import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../SectionHeader'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="section contact contact--showcase">
      <div className="container">
        <SectionHeader kicker="Contact" title="Get In Touch" subtitle="Let’s work together" />
        <div className="contact__grid">
          <a className="contactCard" href={`mailto:${portfolioData.contact.email}`}>
            <div className="contactCard__icon">✉️</div>
            <div>
              <h3>Email & Website</h3>
              <p className="muted">{portfolioData.contact.email}</p>
              <p className="muted">{new URL(portfolioData.contact.portfolio).host}</p>
            </div>
          </a>
          <a className="contactCard" href={portfolioData.contact.github} target="_blank" rel="noreferrer">
            <div className="contactCard__icon">🐙</div>
            <div>
              <h3>GitHub</h3>
              <p className="muted">{new URL(portfolioData.contact.github).host}</p>
            </div>
          </a>
          <a className="contactCard" href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
            <div className="contactCard__icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <p className="muted">{new URL(portfolioData.contact.linkedin).host}</p>
            </div>
          </a>
          <a className="contactCard" href={portfolioData.contact.whatsapp} target="_blank" rel="noreferrer">
            <div className="contactCard__icon">📞</div>
            <div>
              <h3>WhatsApp</h3>
              <p className="muted">Direct message</p>
            </div>
          </a>
          <a className="contactCard" href={portfolioData.contact.facebook} target="_blank" rel="noreferrer">
            <div className="contactCard__icon">❤️</div>
            <div>
              <h3>Facebook</h3>
              <p className="muted">{new URL(portfolioData.contact.facebook).host}</p>
            </div>
          </a>
        </div>
        <div className="contact__line">
          <span className="dot" />
          <span className="label">{portfolioData.name?.toUpperCase()} • PORTFOLIO {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  )
}


