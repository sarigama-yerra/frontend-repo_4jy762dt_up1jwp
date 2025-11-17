const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'You get full access to the Growth plan for 14 days. No credit card required.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel or downgrade your plan at any time from your billing settings.'
  },
  {
    q: 'Do you offer discounts?',
    a: 'Annual billing saves 20%. We also offer startup and nonprofit discounts.'
  },
  {
    q: 'Is my data secure?',
    a: 'We use industry-standard encryption, SSO options and regular security audits.'
  }
]

export default function FAQ() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know about using our platform.</p>
        </div>
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
