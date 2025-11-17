import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Features'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-20">
        <Features />
      </main>
      <Footer />
    </div>
  )
}
