import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="bg-black font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
