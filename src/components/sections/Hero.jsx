import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import { useEffect, useState } from 'react'

export default function Hero() {
  const messages = portfolioData.messageForCursor || []
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (!messages.length) return
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 2500)
    return () => clearInterval(id)
  }, [messages.length])
  const firstName = portfolioData.name?.split(' ')[0] || ''
  const lastName = (portfolioData.name?.split(' ').slice(1).join(' ') || '').trim()
  return (
    <section id="hero" className="section hero hero--showcase">
      <div className="container hero__grid">
        <div className="hero__left">
          <motion.span className="pill pill--small" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }}>
            Hello !!!
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="hero__title">
            I’m {firstName}
            <br />
            {lastName}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="pill pill--accent">
            {portfolioData.title}
          </motion.div>
          <div className="hero__desc">
            <AnimatePresence mode="wait">
              {messages.length ? (
                <motion.p key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35 }}>
                  {messages[index]}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="cta">
            <a className="btn" href="#projects">Projects</a>
            <a className="btn btn--ghost" href="#contact">Contact</a>
          </div>
        </div>
        <div className="hero__right">
          {portfolioData.avatar ? (
            <motion.img
              src={portfolioData.avatar}
              alt={portfolioData.name}
              className="hero__photo"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            />
          ) : null}
          <div className="grain" />
        </div>
      </div>
      <div className="hero__line">
        <span className="dot" />
        <span className="label">PORTFOLIO {new Date().getFullYear()}</span>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1.2 }} className="hero__bg" />
      <div className="hero__orbs">
        <motion.span className="hero__orb hero__orb--one" animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
        <motion.span className="hero__orb hero__orb--two" animate={{ y: [0, 16, 0] }} transition={{ repeat: Infinity, duration: 7 }} />
      </div>
    </section>
  )
}


