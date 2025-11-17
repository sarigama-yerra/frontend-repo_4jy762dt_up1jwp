import { Sparkles, Calendar, BarChart3, Zap, Shield, Workflow, Users } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Automated Scheduling',
    desc: 'Plan once, publish everywhere. Queue, bulk upload and best-time posting backed by AI.'
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    desc: 'Beautiful insights by post, profile and campaign. Understand what moves the needle.'
  },
  {
    icon: Workflow,
    title: 'Team Workflows',
    desc: 'Roles, approvals and shared calendars so your team ships content faster.'
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Auto-repost, smart tagging, UTM builder, link-in-bio and more time-savers.'
  },
  {
    icon: Shield,
    title: 'Brand Safety',
    desc: 'Permissions, SSO and audit trails to keep your org secure and compliant.'
  },
  {
    icon: Users,
    title: 'Inbox & Community',
    desc: 'One inbox for comments and DMs with templates and sentiment detection.'
  }
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-4 w-4" /> Platform Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to win social</h2>
          <p className="mt-3 text-slate-600">From idea to insight — one streamlined flow designed for agencies, brands and creators.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white grid place-content-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
