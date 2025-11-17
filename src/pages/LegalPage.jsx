import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LegalPage({ type = 'terms' }) {
  const titleMap = {
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
  }
  const title = titleMap[type] || 'Legal'

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h1>{title}</h1>
          <p>Welcome to our {title.toLowerCase()}. This is placeholder copy outlining key principles, data practices and commitments to transparency. Customize with your legal counsel.</p>
          <h3>1. Using the service</h3>
          <p>By accessing the platform you agree to our acceptable use and billing policies.</p>
          <h3>2. Data & privacy</h3>
          <p>We respect your privacy and strive to be transparent about how we collect, use and store information.</p>
          <h3>3. Security</h3>
          <p>We implement best practices including encryption in transit, regular audits and access controls.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
