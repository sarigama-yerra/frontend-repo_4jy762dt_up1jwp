import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
