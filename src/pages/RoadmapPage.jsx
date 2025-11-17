import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = [
  { stage: 'Now', title: 'AI Caption Copilot', desc: 'Generate on-brand captions with tones and hashtags.' },
  { stage: 'Next', title: 'Multi-platform Inbox', desc: 'Reply to comments and DMs from one powerful inbox.' },
  { stage: 'Later', title: 'Creator Marketplace', desc: 'Source creators and manage briefs natively.' },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Roadmap</h1>
          <p className="mt-2 text-slate-600">What were building next.</p>
          <div className="mt-8 grid gap-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">{i.stage}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{i.title}</h3>
                <p className="text-sm text-slate-600">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
