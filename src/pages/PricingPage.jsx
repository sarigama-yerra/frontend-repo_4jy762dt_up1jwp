import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Check, HelpCircle } from 'lucide-react'

const tiers = [
  {
    name: 'Basic',
    price: '$19',
    period: 'mo',
    cta: 'Start Free',
    features: [
      '3 social profiles',
      '30 scheduled posts / mo',
      '1 workspace',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$59',
    period: 'mo',
    cta: 'Start Free',
    popular: true,
    features: [
      '10 social profiles',
      'Unlimited scheduling',
      '3 workspaces',
      'Advanced analytics',
      'Team workflows',
      'Priority support',
    ],
  },
  {
    name: 'Agency',
    price: 'Custom',
    period: '',
    cta: 'Talk to Sales',
    adjustable: true,
    features: [
      'Unlimited profiles',
      'Unlimited workspaces',
      'SLA + SSO',
      'Onboarding & training',
      'Dedicated CSM',
    ],
  },
]

function Tier({ name, price, period, cta, popular, adjustable, features }) {
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${
      popular ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200'
    }`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        {adjustable && <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">Adjustable</span>}
      </div>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        {period && <span className="text-slate-500">/{period}</span>}
      </div>
      <ul className="mt-6 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="h-4 w-4 text-emerald-600 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
        popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-white hover:bg-slate-800'
      }`}>
        {cta}
      </button>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h1>
            <p className="mt-3 text-slate-600">Start free, upgrade when you scale. Cancel anytime.</p>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <Tier key={t.name} {...t} />
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-semibold"><HelpCircle className="h-5 w-5" /> Frequently asked pricing questions</div>
              <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm text-slate-700">
                <div>
                  <div className="font-semibold text-slate-900">Do you offer discounts?</div>
                  <p className="mt-1">Yes, annual plans include 2 months free. We also offer startup and nonprofit discounts.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Can I change plans later?</div>
                  <p className="mt-1">Absolutely. Upgrade or downgrade anytime. Changes prorate instantly.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">What does adjustable mean?</div>
                  <p className="mt-1">Agency plans can be customized for seats, profiles, and SLAs. Our team will tailor a quote.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Is there a free trial?</div>
                  <p className="mt-1">Yes. Try all features free for 14 days. No credit card required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
