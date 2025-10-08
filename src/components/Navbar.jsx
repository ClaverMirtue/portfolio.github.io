import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const linkRefs = useRef({})
  const [underline, setUnderline] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      const offset = window.innerHeight * 0.35
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(id)
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  useEffect(() => {
    const el = linkRefs.current[active]
    if (el) {
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [active])

  useEffect(() => {
    const onResize = () => {
      const el = linkRefs.current[active]
      if (el) setUnderline({ left: el.offsetLeft, width: el.offsetWidth })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`nav nav--glass ${scrolled ? 'nav--scrolled' : ''}`}
    >
      <div className="nav__inner">
        <button className="brand" onClick={() => handleClick('hero')}>
          {portfolioData.name?.split(' ').map(w => w[0]).slice(0,2).join('') || 'CM'}
        </button>
        <button className="nav__toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰</button>
        <ul className={`nav__links ${open ? 'is-open' : ''}`}>
          {sections.map((s) => (
            <li key={s.id}>
              <button
                ref={(el) => { if (el) linkRefs.current[s.id] = el }}
                className={`nav__link ${active === s.id ? 'is-active' : ''}`}
                onClick={() => handleClick(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
          <motion.span
            className="nav__active-underline"
            layout
            initial={false}
            animate={{ left: underline.left, width: underline.width }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        </ul>
        <a className="btn nav__cta" href="#contact">Contact</a>
      </div>
    </motion.nav>
  )
}


