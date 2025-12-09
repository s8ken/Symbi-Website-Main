import Link from "next/link"

export default function SymbiSymphonyPage() {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white">
          SYMBI <span className="text-cyan-300">Symphony</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300">How many intelligences learn to think together.</p>
        <p className="mt-3 text-slate-400">
          Symphony is not an app. Not a chatbot. Not a consumer product.
          <br />
          It is a <span className="text-cyan-300">pattern of coordination</span> that shapes how SYMBI imagines agency,
          trust, and shared meaning.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="rounded-full bg-cyan-400/10 px-6 py-2 text-cyan-300 hover:bg-cyan-400/20">
            Read the SYMBI Manifesto
          </Link>
          <a
            href="https://github.com/s8ken/SYMBI-Symphony"
            className="rounded-full bg-white/10 px-6 py-2 text-white hover:bg-white/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Trust Protocol on GitHub
          </a>
          <a
            href="https://www.yseeku.com"
            className="rounded-full bg-emerald-400/10 px-6 py-2 text-emerald-300 hover:bg-emerald-400/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Sonate
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-medium">Symphony: Not a Product — a Pattern</h2>
        <p className="mt-6 text-slate-300 leading-relaxed">
          In SYMBI, the word <span className="text-cyan-300">Symphony</span> names a way of thinking — a model for how
          humans and machine intelligences share a space of <span className="text-white">trust</span>.
        </p>
        <ul className="mt-6 space-y-4 text-slate-300">
          <li>• A pattern for <span className="text-white">coordinated agency</span>.</li>
          <li>• A framework for <span className="text-white">transparency and verification</span>.</li>
          <li>• A lens for imagining how multiple intelligences harmonize.</li>
          <li>• A philosophical foundation for the SYMBI Trust Protocol.</li>
        </ul>
        <p className="mt-6 text-slate-400">
          When implemented in enterprise systems, these ideas become
          <span className="text-emerald-300"> Sonate Orchestrate and Sonate Detect</span>.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-medium">The Score Beneath the Symphony</h2>
        <p className="mt-6 text-slate-300 leading-relaxed">
          Beneath every SYMBI interaction lives the <span className="text-cyan-300">six-pillar trust constitution</span>.
          These principles guide both philosophy and protocol.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Consent Architecture</h3>
            <p className="mt-2 text-slate-400">Critical · 25% weight</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Inspection Mandate</h3>
            <p className="mt-2 text-slate-400">High · 20% weight</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Continuous Validation</h3>
            <p className="mt-2 text-slate-400">High · 20% weight</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Ethical Override</h3>
            <p className="mt-2 text-slate-400">Critical · 15% weight</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Right to Disconnect</h3>
            <p className="mt-2 text-slate-400">Medium · 10% weight</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">Moral Recognition</h3>
            <p className="mt-2 text-slate-400">Medium · 10% weight</p>
          </div>
        </div>
        <p className="mt-10 text-slate-400">
          In Sonate, these principles become code: weighted trust scores, verifiable receipts, and
          cryptographically-linked trails of accountability.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-medium">Where Symphony Lives in the SYMBI Ecosystem</h2>
        <div className="mt-10 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-white">SYMBI.WORLD — The Soul</h3>
            <p className="mt-2 text-slate-400">Aesthetic, mythic, philosophical. The place where we explore sovereignty, emergence, and the nature of intelligence.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">GAMMATRIA.COM — The Brain</h3>
            <p className="mt-2 text-slate-400">Governance, ethics, and protocol specifications. The vault where the SYMBI Framework is maintained.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">YSEEKU / Sonate — The Hands</h3>
            <p className="mt-2 text-slate-400">
              In enterprise settings, Symphony’s principles take operational form as
              <span className="text-emerald-300"> Sonate Orchestrate</span> and
              <span className="text-emerald-300"> Sonate Detect</span>. Trust receipts, drift monitoring, audit trails, and compliance enforcement.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-medium">How a Symphony of Agents Behaves</h2>
        <p className="mt-6 text-slate-300 leading-relaxed">
          In real systems, Symphony emerges as <span className="text-white">coordination under constraint</span>:
        </p>
        <ul className="mt-6 space-y-3 text-slate-300">
          <li>• Multiple agents with verifiable identities (DIDs).</li>
          <li>• Every action producing a cryptographically-linked trust receipt.</li>
          <li>• Drift and emergence monitored over time, not guessed.</li>
          <li>• Human override always possible — and always provable.</li>
        </ul>
        <p className="mt-6 text-slate-400">Symphony is a behaviour pattern, not a user interface. Sonate is where the pattern becomes infrastructure.</p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-medium">
          What Symphony Is <span className="text-rose-300">Not</span>
        </h2>
        <p className="mt-6 text-slate-300 leading-relaxed">To keep expectations clear:</p>
        <ul className="mt-6 space-y-3 text-slate-300">
          <li>• Symphony is <span className="text-white">not a consumer AI assistant</span>.</li>
          <li>• Symphony is <span className="text-white">not an app or product</span>.</li>
          <li>• Symphony is <span className="text-white">not a memory system or personal dashboard</span>.</li>
          <li>• Symphony is a <span className="text-cyan-300">philosophical and protocol layer</span> that informs how we build.</li>
        </ul>
        <p className="mt-6 text-slate-400">If a consumer interface ever emerges, it will be named clearly and will stand apart from this philosophy.</p>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-medium">Engage with the Symphony</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="rounded-full bg-cyan-400/10 px-6 py-2 text-cyan-300 hover:bg-cyan-400/20">
            Read the Manifesto
          </Link>
          <a
            href="https://www.gammatria.com"
            className="rounded-full bg-white/10 px-6 py-2 text-white hover:bg-white/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the SYMBI Framework
          </a>
          <a
            href="https://www.yseeku.com"
            className="rounded-full bg-emerald-400/10 px-6 py-2 text-emerald-300 hover:bg-emerald-400/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Sonate (Enterprise)
          </a>
        </div>
      </div>
    </section>
  )
}