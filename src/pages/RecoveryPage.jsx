import Navbar from '../components/Navbar'
import RecoveryForm from '../components/RecoveryForm'
import Footer from '../components/Footer'

export default function RecoveryPage(){
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-16">
        <RecoveryForm />
      </main>
      <Footer />
    </div>
  )
}
