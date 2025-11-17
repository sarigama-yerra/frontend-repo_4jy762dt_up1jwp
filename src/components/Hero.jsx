export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div className="rounded-2xl p-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                All-in-one social media OS
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Grow faster with a futuristic social suite
              </h1>
              <p className="mt-4 text-slate-700 text-base sm:text-lg">
                Schedule, collaborate and report across every channel — with automation, AI copilots and a beautiful command center.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="#pricing" className="inline-flex justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                  Start Free Trial
                </a>
                <a href="/features" className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
                  Explore Features
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-600">Free trial · Cancel anytime</p>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.14),transparent_35%)]"/>
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex items-end">
                  <div className="rounded-lg bg-white/90 backdrop-blur border border-slate-200 px-3 py-2 text-xs text-slate-600 shadow-sm">
                    Preview of your unified calendar, inbox and analytics dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"/>
    </section>
  )
}
