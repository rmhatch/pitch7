'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

/* ---------- helper components ---------- */
type SectionProps = HTMLAttributes<HTMLElement> & { children: ReactNode }
const Section = ({ children, className = '', ...rest }: SectionProps) => (
  <section
    {...rest}
    className={`max-w-6xl mx-auto px-4 py-20 ${className}`}
  >
    {children}
  </section>
)
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-4xl font-semibold text-center mb-12">{children}</h2>
)
/* ---------- page component ---------- */
export default function Home() {
  /* ----- AOS scroll-reveal init ----- */
  useEffect(() => {
    import('aos').then(AOS => AOS.init({ duration: 800, once: true }))
  }, [])

  /* ----- ROI calculator state ----- */
  const [reps, setReps] = useState(5)
  const [rev, setRev] = useState(10_000)
  const baseline = reps * rev

  return (
    <main className="font-sans text-gray-900 bg-white scroll-smooth">
      {/* HERO with gradient + blob */}
      <div className="relative overflow-hidden text-center py-24 px-4 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-200">
        {/* floating blob */}
        <svg
          className="absolute -top-32 -left-32 w-[500px] h-[500px] text-orange-300 opacity-30 animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M56.1,-57.6C71.9,-41,80.6,-20.5,79.3,-0.4C77.9,19.6,66.5,39.2,50.6,55.2C34.6,71.1,14.3,83.4,-4.5,84.5C-23.3,85.6,-46.5,75.4,-60.6,58.5C-74.7,41.6,-79.6,18,-78.9,-6.3C-78.3,-30.6,-71.9,-55.4,-57.7,-72C-43.5,-88.5,-21.7,-96.7,-0.6,-96C20.5,-95.2,41,-85.5,56.1,-57.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <h1 className="relative text-5xl font-bold mb-4 text-white drop-shadow">
          Meet <span className="text-black">Lily Bell</span> — The AI Built for
          Commercial Junk-Removal Pros
        </h1>
        <p className="relative text-xl max-w-3xl mx-auto mb-10 text-white/90">
          She’s trained by nine-figure revenue leaders—so you sell smarter and
          3-5× faster.
        </p>

        {/* Hero CTAs + mock-up */}
        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* CTAs */}
          <div className="flex flex-col gap-4">
            <a
              href="#roi"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-transform hover:scale-105"
            >
              Get a Free Demo
            </a>
            <a
              href="#how"
              className="inline-block border border-black text-black px-8 py-4 rounded-lg text-lg transition hover:bg-black hover:text-white"
            >
              How It Works
            </a>
          </div>

          {/* mock-up image (replace /mock.png) */}
          <Image
            src="/mock.png"
            alt="PitchBotics mock-up"
            width={420}
            height={280}
            className="rounded-xl shadow-xl hidden lg:block"
            data-aos="zoom-in"
          />
        </div>
      </div>

      {/* WHAT CAN SHE DO */}
      <Section data-aos="fade-up">
        <H2>What Can Lily Bell Do?</H2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              'Onboarding Like a Pro',
              'Walks new reps step-by-step so they sound seasoned on Day 1.',
            ],
            [
              'Live Rebuttals + Coaching',
              'Mid-call? Type the objection—Lily feeds you three winning pivots.',
            ],
            [
              'Your AI Sales Partner',
              'Follow-ups, role-plays, account farming—just ask and she delivers.',
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="shadow-xl p-6 rounded-xl hover:shadow-2xl transition"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-2 text-orange-600">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <div id="how" className="bg-orange-50">
        <Section data-aos="fade-up">
          <H2>She’s Not a Tool — She’s a Teammate</H2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-center">
            Built by CROs, VPs, and territory dominators, Lily Bell coaches,
            strategizes, and motivates like a human partner.
          </p>
          <ul className="max-w-xl mx-auto space-y-3 text-lg leading-relaxed">
            <li>✅ Role-play every scenario</li>
            <li>✅ Real-time objection handling</li>
            <li>✅ Tone & delivery analysis</li>
            <li>✅ Custom game-plan builder</li>
            <li>✅ 3-5× output in 90 days</li>
          </ul>
        </Section>
      </div>

      {/* ROI CALCULATOR */}
      <Section id="roi" data-aos="fade-up">
        <H2>What’s 30 Minutes with Lily Worth?</H2>
        <p className="text-center mb-6">
          Use Lily just 30 min/day — if you don’t 5× output in 90 days, you
          don’t pay.
        </p>
        <div className="mx-auto max-w-xl backdrop-blur-sm bg-white/70 border border-orange-200 p-6 rounded-xl shadow">
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
              <label className="font-semibold block mb-1">
                Avg Monthly&nbsp;Rev / Rep ($)
              </label>
              <input
                type="number"
                value={rev}
                onChange={e => setRev(+e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
          <p className="text-center mt-6">
            <span className="font-semibold">Baseline:</span>{' '}
            ${baseline.toLocaleString()}
          </p>
          <p className="text-center text-2xl font-bold text-orange-600 mt-2">
            With Lily:{' '}
            {(baseline * 3).toLocaleString('en-US')} –{' '}
            {(baseline * 5).toLocaleString('en-US')} / mo
          </p>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-orange-100">
        <Section data-aos="fade-up">
          <H2>What Teams Are Saying</H2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                'We gave Lily to new reps — they sounded like pros in a week.',
                'Sales Director, National Junk Brand',
              ],
              [
                'She fed me the perfect script mid-walk-in. Closed the school in one meeting.',
                'Territory Rep, Florida',
              ],
            ].map(([quote, who]) => (
              <div
                key={who}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <p className="italic mb-2">“{quote}”</p>
                <p className="font-semibold">— {who}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p className="text-xl mb-3">
          Lily Bell isn’t just software. She’s the cheat-code everyone wishes
          they had.
        </p>
        <p className="italic mb-6">This is you — fully activated.</p>
        <a
          href="#roi"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg transition-transform hover:-translate-y-1"
        >
          Try Lily Bell Now
        </a>
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} PitchBotics.
        </p>
      </footer>
    </main>
  )
}
