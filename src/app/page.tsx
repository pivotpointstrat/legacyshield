export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="bg-[#0a1628] border-b border-[#1a3a5c]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#d4a017] rounded-full flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-sm">L</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">LegacyShield</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white text-sm transition-colors">About</a>
            <a href="#features" className="text-gray-300 hover:text-white text-sm transition-colors">What You Get</a>
            <a href="#pricing" className="text-gray-300 hover:text-white text-sm transition-colors">Pricing</a>
            <a href="/signup" className="bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-semibold text-sm px-5 py-2 rounded-full transition-colors">Join Now</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-[#d4a017]/20 border border-[#d4a017]/40 text-[#d4a017] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Built for DMV Area Families
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Protect Your Family.<br />
                <span className="text-[#d4a017]">Build Your Legacy.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                LegacyShield teaches DMV Area families everything they need to know about life insurance,
                estate planning, and building generational wealth — in plain language, from someone in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/signup?plan=community" className="bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-bold text-base px-8 py-4 rounded-full transition-colors">
                  Get Started — $39/month
                </a>
                <a href="#features" className="border border-white/30 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-full transition-colors">
                  See What's Inside
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">No jargon. No pushy salespeople. Just real knowledge for real families.</p>
            </div>
            {/* Hero Image */}
            <div className="flex-1 w-full lg:max-w-[520px] relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/hero.jpg"
                  alt="Two women having a meaningful financial planning conversation"
                  className="w-full h-[380px] md:h-[460px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#d4a017] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0a1628] font-bold text-sm">✓</span>
                    </div>
                    <p className="text-white text-sm font-medium leading-snug">
                      Real guidance from someone<br />who knows your community
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#d4a017]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d4a017]/5 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">The Problem No One Talks About</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Families in the DC metro area are leaving generational wealth on the table — not because they don't care, but because no one explained the rules.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '56%', label: 'of DC residents have life insurance', sub: 'Well below the national average — leaving families exposed' },
              { stat: '$0', label: 'estate plans for most working families', sub: 'Most families have no will, no trust, no plan — until it\'s too late' },
              { stat: '1/7th', label: 'the wealth of white families', sub: 'The racial wealth gap is real — and financial literacy is the starting point to close it' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-[#d4a017] mb-2">{item.stat}</div>
                <div className="font-semibold text-[#0a1628] mb-3">{item.label}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">What's Inside LegacyShield</h2>
            <p className="text-gray-600 text-lg">Everything your family needs — in one place, at a price that makes sense.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'Life Insurance 101',
                desc: 'Learn the difference between term and whole life, how much coverage you actually need, and how to stop overpaying. No agent. No pressure.'
              },
              {
                icon: '📋',
                title: 'Estate Planning Basics',
                desc: 'Wills, trusts, beneficiaries, power of attorney — explained simply. Protect what you\'ve built so your family keeps it.'
              },
              {
                icon: '💰',
                title: 'Generational Wealth Playbook',
                desc: 'How to start building wealth that outlasts you. Real strategies for DC working families — not Wall Street theory.'
              },
              {
                icon: '🤝',
                title: 'Community Workshops',
                desc: 'Monthly in-person workshops in the DC metro area. Ask questions, meet your neighbors, and learn together in a trusted space.'
              },
              {
                icon: '⚖️',
                title: 'Attorney Q&A Credits',
                desc: 'Premium members get quarterly credits to consult a licensed estate attorney. Real legal guidance at a fraction of the cost.'
              },
              {
                icon: '📱',
                title: 'On-Demand Video Library',
                desc: 'Watch at your pace. Short, clear video lessons on every topic — life insurance, wills, budgeting, and more. No jargon.'
              },
            ].map((f, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#d4a017]/30 hover:shadow-md transition-all">
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
            <p className="text-gray-300 text-lg">No commissions. No hidden upsells. Just education that pays for itself.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-2xl p-8">
              <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-4">Community Member</div>
              <div className="text-4xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-gray-400">/month</span></div>
              <p className="text-gray-400 text-sm mb-8">Or $399/year — save $69</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Full video course library',
                  'Monthly community workshops',
                  'Life insurance calculator & guides',
                  'Estate planning templates',
                  'Private community access',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-[#d4a017] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="/signup?plan=community" className="block text-center bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-bold py-3 rounded-full transition-colors">
                Join Community
              </a>
            </div>
            <div className="bg-[#d4a017] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#0a1628] text-[#d4a017] text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</div>
              <div className="text-[#0a1628] text-sm font-semibold uppercase tracking-wider mb-4">Legacy Builder</div>
              <div className="text-4xl font-bold text-[#0a1628] mb-1">$99<span className="text-xl font-normal text-[#0a1628]/60">/month</span></div>
              <p className="text-[#0a1628]/60 text-sm mb-8">Everything in Community, plus:</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Community',
                  'Quarterly attorney consult credits',
                  '1:1 legacy planning session/year',
                  'Insurance policy review',
                  'Priority workshop seating',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0a1628] text-sm">
                    <span className="font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="/signup?plan=legacy_builder" className="block text-center bg-[#0a1628] hover:bg-[#0f2040] text-[#d4a017] font-bold py-3 rounded-full transition-colors">
                Build My Legacy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Start Protecting Your Family Today</h2>
          <p className="text-gray-600 text-lg mb-10">
            Join the LegacyShield community — DC families learning, growing, and protecting each other.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            />
            <button type="submit" className="bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-bold text-sm px-7 py-3 rounded-full transition-colors whitespace-nowrap">
              Join Waitlist
            </button>
          </form>
          <p className="text-gray-400 text-sm">Early access opens soon. Join the waitlist — no commitment.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#d4a017] rounded-full flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-xs">L</span>
            </div>
            <span className="text-white font-bold">LegacyShield</span>
          </div>
          <p className="text-sm text-center">LegacyShield is a financial education platform. We do not provide legal or financial advice.</p>
          <p className="text-sm">© 2026 LegacyShield DC. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
