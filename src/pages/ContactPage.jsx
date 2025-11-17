import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage(){
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
