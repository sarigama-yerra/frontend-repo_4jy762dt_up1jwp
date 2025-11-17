import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
