import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const components = [
  { name: 'API', status: 'Operational' },
  { name: 'Web App', status: 'Operational' },
  { name: 'Scheduler', status: 'Operational' },
  { name: 'Analytics', status: 'Operational' },
]

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Status</h1>
          <p className="mt-2 text-slate-600">All systems are running smoothly.</p>
          <div className="mt-8 grid gap-4">
            {components.map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 bg-white p-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">{c.name}</span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
