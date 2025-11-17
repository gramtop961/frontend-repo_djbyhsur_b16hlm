import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
