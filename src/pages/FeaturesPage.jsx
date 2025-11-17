import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Play, CheckCircle2, BarChart3, Calendar, Users, Workflow } from 'lucide-react'

const featureSections = [
  {
    eyebrow: 'Plan',
    title: 'A calendar that thinks ahead',
    body: 'Drag-and-drop posts, bulk upload from CSV, and AI-powered best-time suggestions help you stay weeks ahead without the chaos.',
    bullets: ['Multi-channel calendar', 'Best-time auto-scheduling', 'Bulk import & queue rules', 'Approval flows'],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1718815628185-2ff0f9332b32?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb250ZW50JTIwY2FsZW5kYXIlMjBVSSUyMG1vY2t8ZW58MHwwfHx8MTc2MzM5Njc5MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Content calendar UI mock'
    },
    icon: Calendar,
  },
  {
    eyebrow: 'Collaborate',
    title: 'Workflows your team will actually use',
    body: 'Roles, permissions and side-by-side previews mean creators, managers and clients move faster with fewer back-and-forths.',
    bullets: ['Role-based access', 'Shareable previews', 'Commenting & mentions', 'Brand kits'],
    media: {
      type: 'video',
      src: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-5179/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
    },
    icon: Users,
  },
  {
    eyebrow: 'Measure',
    title: 'Turn insights into outcomes',
    body: 'Beautiful dashboards with attribution, content grouping and cohort trends so you can prove impact and optimize campaigns.',
    bullets: ['Post-level analytics', 'Campaign reporting', 'UTM builder', 'Export to CSV & Slides'],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBtb2NrfGVufDB8MHx8fDE3NjMzOTY3OTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Analytics dashboard mock'
    },
    icon: BarChart3,
  },
]

function Section({ eyebrow, title, body, bullets, media, icon: Icon, reverse }) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
              {Icon && <Icon className="h-4 w-4" />} {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
            <p className="mt-3 text-slate-600">{body}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
                <Play className="h-4 w-4" /> Watch demo
              </button>
              <a href="/pricing" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See pricing →</a>
            </div>
          </div>
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {media.type === 'image' ? (
                <img src={media.src} alt={media.alt} className="h-full w-full object-cover" />
              ) : (
                <video controls poster={media.poster} className="h-full w-full object-cover">
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_35%)]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        {featureSections.map((s, i) => (
          <Section key={s.title} {...s} reverse={i % 2 === 1} />
        ))}

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Everything included</h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-700">
                {['Integrations: Instagram, TikTok, X, LinkedIn, YouTube, Facebook', 'Calendar & queue rules', 'Media library', 'Hashtag sets', 'Link in bio', 'Approvals & comments', 'SSO & SCIM', 'API access', 'Priority support'].map((x) => (
                  <div key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />{x}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
