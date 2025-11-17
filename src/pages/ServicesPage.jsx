import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage(){
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
