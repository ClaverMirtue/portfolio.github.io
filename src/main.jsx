import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function SmoothApp() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.12,
      touchMultiplier: 1.2,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothApp />
  </StrictMode>,
)
