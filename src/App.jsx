import './App.css'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'

function App() {
  return (
    <div className="app">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Claver Mirtue</footer>
    </div>
  )
}

export default App
