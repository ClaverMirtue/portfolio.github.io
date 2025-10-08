import { useEffect } from 'react'

export default function BackgroundFX() {
  useEffect(() => {
    let rafId = 0
    let targetX = 0
    let targetY = 0
    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!rafId) rafId = requestAnimationFrame(tick)
    }
    const tick = () => {
      document.documentElement.style.setProperty('--mx', `${targetX}px`)
      document.documentElement.style.setProperty('--my', `${targetY}px`)
      rafId = 0
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="bgfx" aria-hidden>
      <div className="bgfx__glow" />
      <span className="bgfx__orb bgfx__orb--a" />
      <span className="bgfx__orb bgfx__orb--b" />
      <span className="bgfx__orb bgfx__orb--c" />
    </div>
  )
}


