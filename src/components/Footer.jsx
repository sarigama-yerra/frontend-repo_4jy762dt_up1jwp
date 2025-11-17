export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">PulseSocial</h4>
          <p className="mt-2 text-sm text-slate-600">The futuristic social media OS for teams and agencies.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/features" className="hover:text-slate-900">Features</a></li>
            <li><a href="/roadmap" className="hover:text-slate-900">Roadmap</a></li>
            <li><a href="/status" className="hover:text-slate-900">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/legal/terms" className="hover:text-slate-900">Terms</a></li>
            <li><a href="/legal/privacy" className="hover:text-slate-900">Privacy</a></li>
            <li><a href="/legal/cookies" className="hover:text-slate-900">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Get updates</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@company.com" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} PulseSocial, Inc.</div>
    </footer>
  )
}
