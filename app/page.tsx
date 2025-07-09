// app/page.tsx  – PitchBotics full landing page (TypeScript, Tailwind)
import Image from 'next/image'
import { ReactNode } from 'react'

// ------------------------------------------------------------------
// Small helper components
const Section = ({ children }: { children: ReactNode }) => (
  <section className="max-w-6xl mx-auto px-4 py-20">{children}</section>
)
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-4xl font-semibold text-center mb-12">{children}</h2>
)
// ------------------------------------------------------------------

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* HERO */}
      <div className="bg-orange-100 text-center py-24 px-4">
        {/* Replace with your real logo in /public if you have one */}
        {/* <Image src="/logo.png" alt="PitchBotics" width={120} height={120} className="mx-auto mb-6" /> */}
        <h1 className="text-5xl font-bold mb-4">
          Meet <span className="text-orange-600">Lily Bell</span> — The AI Built for Commercial Junk-Removal Pros
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          She’s not just smart. She’s not just fast. She’s the first AI trained by nine-figure revenue leaders in your industry.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#demo" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg">
            Get a Free Demo
          </a>
          <a href="#how" className="border border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg">
            How It Works
          </a>
        </div>
      </div>

      {/* WHAT CAN SHE DO */}
      <Section>
        <H2>What Can Lily Bell Do?</H2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Onboarding Like a Pro', 'Lily walks new reps step-by-step so they sound seasoned on day one.'],
            ['Live Rebuttals + Coaching', 'Mid-call? Type the objection and Lily feeds you three winning pivots.'],
            ['Your AI Sales Partner', 'Follow-ups, role-plays, account farming—just ask and she delivers.'],
          ].map(([title, desc]) => (
            <div key={title} className="shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-2 text-orange-600">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <div id="how" className="bg-orange-50">
        <Section>
          <H2>She’s Not a Tool — She’s a Teammate</H2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-center">
            Built by CROs, VPs, and territory dominators, Lily Bell coaches, strategizes, and motivates like a human partner.
          </p>
          <ul className="max-w-xl mx-auto space-y-3 text-lg">
            <li>✅ Role-play every scenario</li>
            <li>✅ Real-time objection handling</li>
            <li>✅ Tone & delivery analysis</li>
            <li>✅ Custom game-plan builder</li>
            <li>✅ 3-5× output in 90 days</li>
          </ul>
        </Section>
      </div>

      {/* ROI CALCULATOR */}
      <Section>
        <H2>What’s 30 Minutes with Lily Worth?</H2>
        <p className="text-center mb-6">
          Use Lily just 30 min/day — if you don’t 5× output in 90 days, you don’t pay.
        </p>
        {/* Simple client-side calculator */}
        <Calculator />
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-orange-100">
        <Section>
          <H2>What Teams Are Saying</H2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['“We gave Lily to brand-new reps — they sounded like pros in one week.”', 'Sales Director, National Junk Brand'],
              ['“She fed me the perfect script mid-walk-in. Closed the school in one meeting.”', 'Territory Rep, Florida'],
            ].map(([quote, who]) => (
              <div key={who} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                <p className="italic mb-2">“{quote}”</p>
                <p className="font-semibold">— {who}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p className="text-xl mb-2">Lily Bell isn’t just software. She’s the cheat-code everyone wishes they had.</p>
        <p className="italic mb-6">This is you — fully activated.</p>
        <a
          href="#demo"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg"
        >
          Try Lily Bell Now
        </a>
        <p className="mt-6 text-sm">© {new Date().getFullYear()} PitchBotics.</p>
      </footer>
    </main>
  )
}

// ---------- tiny client-side ROI calculator ----------
'use client'
import { useState } from 'react'
function Calculator() {
  const [reps, setReps] = useState(5)
  const [rev, setRev] = useState(10000)
  const baseline = reps * rev
  return (
    <div className="mx-auto max-w-xl bg-white border border-orange-200 p-6 rounded-xl shadow">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold block mb-1"># Sales Reps</label>
          <input
            type="number"
            value={reps}
            onChange={e => setReps(+e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label className="font-semibold block mb-1">Avg Monthly Rev / Rep ($)</label>
          <input
            type="number"
            value={rev}
            onChange={e => setRev(+e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      </div>
      <p className="text-center mt-6">
        <span className="font-semibold">Baseline:</span> ${baseline.toLocaleString()}
      </p>
      <p className="text-center text-2xl font-bold text-orange-600 mt-2">
        With Lily: ${ (baseline*3).toLocaleString() } – ${ (baseline*5).toLocaleString() } / mo
      </p>
    </div>
  )
}
