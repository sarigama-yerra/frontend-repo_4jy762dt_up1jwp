import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const roadmap = {
  now: [
    { title: 'AI Caption Copilot', desc: 'Generate on-brand captions with tones and hashtags.' },
    { title: 'Bulk Upload 2.0', desc: 'CSV templates, media mapping and error recovery.' },
  ],
  next: [
    { title: 'Multi-platform Inbox', desc: 'Reply to comments and DMs from one powerful inbox.' },
    { title: 'Calendar Heatmap', desc: 'Visualize best posting windows and gaps.' },
  ],
  later: [
    { title: 'Creator Marketplace', desc: 'Source creators and manage briefs natively.' },
    { title: 'Auto A/B Testing', desc: 'Run headline/image tests and auto-pick winners.' },
  ],
}

function Bucket({ label, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full inline-block">{label}</div>
      <div className="mt-4 grid gap-4">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl border border-slate-200 p-4">
            <div className="font-semibold text-slate-900">{i.title}</div>
            <div className="text-sm text-slate-600">{i.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Roadmap</h1>
            <p className="mt-2 text-slate-600">What we're building next. Submit ideas and upvote what's most valuable to you.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Bucket label="Now" items={roadmap.now} />
            <Bucket label="Next" items={roadmap.next} />
            <Bucket label="Later" items={roadmap.later} />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            Want to influence the roadmap? Email product@pulsesocial.app with your use-case and we’ll reach out.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
