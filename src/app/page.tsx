export default function Home() {

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500/30">
      <main className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          <span className="text-sm text-neutral-300 font-medium">Credex AI Spend Audit</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
          Stop overpaying for AI. <br className="hidden md:block"/> Find leaked spend.
        </h1>
        
        <p className="text-xl text-neutral-400 max-w-2xl mb-12">
          Startups waste thousands a year on redundant AI tools, wrong tiers, and unused seats. Enter your stack to get an instant, actionable audit.
        </p>

        <div className="w-full max-w-md bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-left">Start your free audit</h2>
          
          <div className="space-y-4">
            <div className="text-left">
              <label className="block text-sm font-medium text-neutral-400 mb-1.5">Primary AI Tool</label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all">
                <option>Cursor</option>
                <option>GitHub Copilot</option>
                <option>Windsurf</option>
              </select>
            </div>
            
            <div className="text-left">
              <label className="block text-sm font-medium text-neutral-400 mb-1.5">Current Plan</label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all">
                <option>Pro ($20/mo)</option>
                <option>Teams ($40/mo)</option>
                <option>Enterprise</option>
              </select>
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-neutral-400 mb-1.5">Number of Seats</label>
              <input type="number" defaultValue={5} className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" />
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg px-4 py-3.5 transition-colors mt-4">
              Calculate Savings →
            </button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-800 w-full">
          <p className="text-sm text-neutral-500 uppercase tracking-widest font-semibold mb-8">Trusted by engineering leaders</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
              <p className="text-neutral-300 mb-4">"We were paying for Copilot and Cursor, plus ChatGPT Team seats we weren't using. Saved $8,400 on our annual run rate."</p>
              <p className="text-sm text-neutral-500">— Sarah J., VP Eng</p>
            </div>
            <div className="text-left p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
              <p className="text-neutral-300 mb-4">"Instantly showed me we were on the wrong Anthropic tier for our usage volume. Switched to API direct and cut spend by 40%."</p>
              <p className="text-sm text-neutral-500">— Michael T., Founder</p>
            </div>
            <div className="text-left p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/50">
              <p className="text-neutral-300 mb-4">"The PDF export was perfect for my board deck. Finally, a way to visualize our SaaS creep."</p>
              <p className="text-sm text-neutral-500">— Elena R., CTO</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
