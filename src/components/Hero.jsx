import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-10 shadow-lg">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
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
                <a href="/features" className="inline-flex justify-center rounded-lg bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-white">
                  Explore Features
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-600">No credit card required · Cancel anytime</p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>
    </section>
  )
}
