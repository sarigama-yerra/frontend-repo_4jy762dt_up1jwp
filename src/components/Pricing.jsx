import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Basic',
    price: '$19',
    period: 'mo',
    highlight: false,
    features: [
      '3 social profiles',
      '30 scheduled posts / mo',
      '1 workspace',
      'Basic analytics',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$59',
    period: 'mo',
    highlight: true,
    features: [
      '10 social profiles',
      'Unlimited scheduling',
      '3 workspaces',
      'Advanced analytics',
      'Team workflows',
      'Priority support'
    ]
  },
  {
    name: 'Agency',
    price: 'Custom',
    period: '',
    highlight: false,
    adjustable: true,
    features: [
      'Unlimited profiles',
      'Unlimited workspaces',
      'SLA + SSO',
      'Onboarding & training',
      'Dedicated CSM'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you scale. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${
                t.highlight ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.adjustable && (
                  <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">Adjustable</span>
                )}
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
                {t.period && <span className="text-slate-500">/{t.period}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
                t.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {t.name === 'Agency' ? 'Talk to Sales' : 'Start Free'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
