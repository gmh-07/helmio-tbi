import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Droplets, Zap, Wind, Sun, Shield, CircleCheck, Sparkles,
  Building2, Mail, Phone, Instagram, MessageCircle, ChevronDown,
} from 'lucide-react'
import { SITE, IMG } from './config.js'

const APPLE = "font-['-apple-system']"

/* ---------- helpers ---------- */
const Reveal = ({ children, className = '', delay = 0, x = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: x ? 0 : 30, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

const Pic = ({ src, alt, className = '' }) =>
  src ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div
      role="img"
      aria-label={alt}
      className={`${className} bg-gradient-to-br from-teal/50 via-slate-700 to-slate-900 flex items-center justify-center text-white/70 text-sm p-2 text-center`}
    >
      {alt}
    </div>
  )

const Card = ({ className = '', children }) => (
  <div className={`flex flex-col gap-6 rounded-xl border py-6 ${className}`}>{children}</div>
)

const goContact = () =>
  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })

const Arrow = () => (
  <motion.span
    className="inline-block ml-2"
    animate={{ x: [0, 6, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    →
  </motion.span>
)

const Particles = () => {
  const dots = useMemo(
    () => Array.from({ length: 20 }, () => ({
      l: Math.random() * 100, t: Math.random() * 100,
      d: 3 + Math.random() * 4, y: 10 + Math.random() * 20,
    })), [])
  return (
    <div className="absolute inset-0 opacity-30">
      {dots.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal rounded-full"
          style={{ left: p.l + '%', top: p.t + '%' }}
          animate={{ y: [0, -p.y, 0] }}
          transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ---------- data ---------- */
const pains = ['Itchy Scalp', 'Unpleasant Odor', 'Hair Fall & Acne', 'Urge to Wash Hair']

const steps = [
  { icon: Droplets, title: 'Steam Cleaning', text: 'High-temperature steam penetrates deep into every surface, loosening dirt, sweat, and bacteria that accumulate over time.' },
  { icon: Zap, title: 'UV Sterilization', text: 'Medical-grade UV-C light eliminates 99.9% of pathogens, viruses, and bacteria without any chemicals.' },
  { icon: Wind, title: 'Fog Disinfection', text: "Controlled fog reaches every corner and crevice, ensuring complete coverage where hands can't reach." },
  { icon: Wind, title: 'Engineered Airflow', text: 'Precision-engineered airflow removes moisture and contaminants, preparing your helmet for the final step.' },
  { icon: Sun, title: 'Thermal Drying', text: 'Controlled thermal drying leaves your helmet fresh, dry, and ready to wear—no waiting required.' },
]

const trusted = [
  { icon: Shield, title: 'Medical-Grade UV-C', text: 'Hospital-standard sterilization technology proven to eliminate pathogens' },
  { icon: CircleCheck, title: 'Lab-Tested Process', text: 'Rigorously tested and validated for safety and effectiveness' },
  { icon: Sparkles, title: 'Chemical-Free', text: 'No harsh chemicals, no residue, just clean and fresh helmets' },
]

const experience = [
  { e: '🪖', t: 'Place Helmet', d: 'Simply place your helmet in the pod' },
  { e: '📱', t: 'Scan & Pay', d: 'Quick QR code payment' },
  { e: '✨', t: 'Sanitize', d: 'Relax for 4 minutes' },
  { e: '🏍️', t: 'Ride', d: 'Fresh helmet, safer ride' },
]

const places = [
  ['Bike Wash Stations', 'wash'], ['Apartments', 'apartments'], ['Metro Stations', 'metro'],
  ['Cafes', 'cafes'], ['Service Centres', 'service'],
]

const highlights = [
  { e: '📊', t: 'Quick Break-Even', d: 'Break-even typically within 2 months for high-footfall areas.' },
  { e: '🤖', t: 'Safe & Automated', d: 'Safe, touch-free, fully automated operation.' },
  { e: '💰', t: 'Low Running Cost', d: 'Generates daily cash flow with low running cost (< ₹10 per sanitization cycle).' },
]

const faqs = [
  ['Is it safe for helmets & skin?', 'Yes. The process is chemical-free and designed to be gentle on helmet liners, shells, and visors. It leaves no residue on surfaces that touch your skin.'],
  ['How long does it take?', 'A complete cycle takes about 4 minutes.'],
  ['Is it chemical-free?', 'Yes. Helmio uses steam, medical-grade UV-C light, fog, airflow, and thermal drying. No harsh chemicals are used.'],
  ['Can it be used daily?', 'Yes. The process is gentle enough for regular use, so you can sanitize your helmet as often as you ride.'],
  ['What helmets are supported?', 'Helmio is designed for standard motorcycle helmets, including full-face and open-face styles.'],
]

/* ---------- sections ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Pic src={IMG.hero} alt="Helmio - Premium helmet sanitizing lifestyle" className="w-full h-full object-cover blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <div className="text-center space-y-8">
          <motion.div className="mt-[120px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className={`text-6xl xl:text-9xl font-black tracking-tight ${APPLE} relative inline-block`}>
              <span className="relative">
                <span className="absolute inset-0 blur-2xl opacity-50 text-teal">HELMIO</span>
                <span className="relative text-white drop-shadow-2xl">HELMIO</span>
              </span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className={`xl:text-4xl text-[20px] font-medium ${APPLE} relative inline-block`}>
              <span className="relative">
                <span className="absolute inset-0 blur-xl opacity-80 bg-black/50 rounded-full" />
                <span className="relative text-white/95 drop-shadow-lg px-6 py-2 inline-block">Helmet Sanitizing Made Simple</span>
              </span>
            </p>
          </motion.div>
          <motion.div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <button onClick={goContact} className="inline-flex items-center justify-center rounded-md bg-teal hover:bg-teal-dark text-white px-8 py-6 text-lg font-inter shadow-2xl shadow-teal/30 hover:shadow-teal/50 transition-all duration-300">
              Get in Touch<Arrow />
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}

function Problem() {
  return (
    <section className="py-16 xl:py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="text-center space-y-6 mb-12">
          <h2 className={`text-4xl xl:text-6xl font-bold ${APPLE}`}>Ever felt this after wearing a helmet?</h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${APPLE}`}>
            If you've experienced any of these, you're not alone. Millions of riders deal with this every single day.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 xl:gap-6">
          {pains.map((p, i) => (
            <Reveal key={p} delay={i * 0.1} className="cursor-pointer">
              <Card className="h-full border-border bg-card hover:border-teal transition-all duration-500 hover-lift overflow-hidden !py-0">
                <div className="relative w-full aspect-[4/2.5] overflow-hidden group">
                  <Pic src={IMG.pain[i]} alt={p} className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="px-3 pb-3 xl:px-4 xl:pb-4 -mt-3">
                  <h3 className={`text-base xl:text-lg font-bold ${APPLE} text-center`}>{p}</h3>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12 space-y-4">
          <p className={`text-xl text-muted-foreground ${APPLE}`}>
            You've tried washing pads, helmet sprays, inner caps. They help a little, but let's be honest—they're slow, inconvenient, and they don't really solve the problem.
          </p>
          <p className={`font-bold text-teal ${APPLE} text-[32px]`}>There's a better way.</p>
        </Reveal>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-16 xl:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <Reveal className="text-center space-y-3 mb-10 xl:space-y-6 xl:mb-20">
          <h2 className={`text-3xl xl:text-7xl font-bold ${APPLE}`}>How Helmio Works?</h2>
          <p className={`text-base xl:text-2xl text-white/80 ${APPLE}`}>A 5-step engineered process for complete sanitization</p>
        </Reveal>

        <div className="space-y-12 xl:space-y-32">
          {steps.map((s, i) => {
            const Icon = s.icon
            const rev = i % 2 === 1
            return (
              <Reveal key={s.title} x={rev ? 60 : -60} className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 items-center">
                <div className={`space-y-3 xl:space-y-6 ${rev ? 'xl:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl xl:text-6xl font-black text-teal/30 font-league-spartan">0{i + 1}</span>
                    <div className="text-teal scale-75 xl:scale-100"><Icon className="w-16 h-16" /></div>
                  </div>
                  <h3 className="text-2xl xl:text-5xl font-bold font-league-spartan">{s.title}</h3>
                  <p className="text-base xl:text-xl text-white/80 font-inter leading-relaxed">{s.text}</p>
                </div>
                <div className={`relative ${rev ? 'xl:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Pic src={IMG.steps[i]} alt={s.title} className="w-full h-[250px] xl:h-[400px] object-cover" />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="text-center mt-10 xl:mt-20">
          <div className="relative inline-block max-w-4xl mx-auto px-4">
            <div className="absolute inset-0 bg-teal blur-3xl opacity-30 animate-pulse" />
            <div className="relative bg-gradient-to-r from-teal via-cyan-400 to-teal p-1 rounded-2xl xl:rounded-3xl">
              <div className="bg-slate-900 px-4 py-4 xl:px-12 xl:py-8 rounded-2xl xl:rounded-3xl">
                <p className={`text-lg xl:text-5xl xl:leading-normal font-black text-transparent bg-clip-text bg-gradient-to-r from-teal via-white to-teal animate-pulse ${APPLE}`}>
                  Designed to sanitize what hands can't reach.
                </p>
              </div>
            </div>
            <motion.div className="absolute -top-2 -right-2 xl:-top-4 xl:-right-4 text-teal text-2xl xl:text-4xl" animate={{ rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>✨</motion.div>
            <motion.div className="absolute -bottom-2 -left-2 xl:-bottom-4 xl:-left-4 text-cyan-400 text-2xl xl:text-4xl" animate={{ rotate: [0, -360] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>✨</motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="py-16 xl:py-20 bg-teal text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {[['99.9%', 'Pathogen Elimination'], ['4 min', 'Sanitization Time'], ['100%', 'Chemical-Free']].map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.15} className="text-center">
              <div className="text-6xl xl:text-8xl font-black font-league-spartan mb-4">{n}</div>
              <p className="text-xl font-inter opacity-90">{l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trusted() {
  return (
    <section className="py-12 xl:py-20 bg-card">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="text-center space-y-6 xl:space-y-12">
          <h2 className="text-3xl xl:text-6xl font-bold font-league-spartan">Trusted Technology</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8 max-w-5xl mx-auto">
            {trusted.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal key={t.title} delay={i * 0.15}>
                  <Card className="border-border bg-background hover-lift h-full">
                    <div className="p-4 xl:p-8 space-y-2 xl:space-y-4 text-center">
                      <div className="flex justify-center"><Icon className="h-8 w-8 xl:h-12 xl:w-12 text-teal" /></div>
                      <h3 className="text-lg xl:text-xl font-bold font-league-spartan">{t.title}</h3>
                      <p className="text-sm xl:text-base text-muted-foreground font-inter">{t.text}</p>
                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="py-16 xl:py-20 bg-subtle-gradient">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="text-center space-y-12">
          <h2 className="text-4xl xl:text-6xl font-bold font-league-spartan">The Helmio Experience</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {experience.map((x, i) => (
              <Reveal key={x.t} delay={i * 0.1}>
                <Card className="border-border bg-card hover:border-teal transition-all duration-300 h-full">
                  <div className="p-6 xl:p-8 space-y-4 text-center">
                    <div className="text-5xl xl:text-6xl mb-4">{x.e}</div>
                    <h3 className="text-lg xl:text-xl font-bold font-league-spartan">{x.t}</h3>
                    <p className="text-sm xl:text-base text-muted-foreground font-inter">{x.d}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="pt-8">
            <div className="inline-block bg-gradient-to-r from-teal/20 via-cyan-400/20 to-teal/20 p-6 rounded-2xl border-2 border-teal">
              <p className="text-xl xl:text-2xl font-bold text-teal font-inter">
                🎁 Plus, get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-cyan-400">FREE anti-fog visor wipe</span> with every sanitization!
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const PlaceCard = ({ title, src, tall }) => (
  <Reveal>
    <Card className="cursor-pointer border-border bg-background hover:border-teal transition-all duration-300 hover-lift overflow-hidden !py-0 !gap-0">
      <div className={`w-full overflow-hidden ${tall ? 'h-48 xl:h-64' : 'h-32 xl:h-48'}`}>
        <Pic src={src} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className={`text-center ${tall ? 'p-3 xl:p-6' : 'p-2 xl:p-4'}`}>
        <h4 className={`${tall ? 'text-lg xl:text-2xl' : 'text-sm xl:text-lg'} font-bold font-league-spartan`}>{title}</h4>
      </div>
    </Card>
  </Reveal>
)

const Bullets = ({ items }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className="flex items-center gap-3 font-inter">
        <CircleCheck className="h-5 w-5 text-teal flex-shrink-0" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
)

function Business() {
  return (
    <>
      <section className="py-16 xl:py-20 bg-card">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="space-y-12">
            <Reveal className="text-center space-y-4">
              <h2 className="text-4xl xl:text-6xl font-bold font-league-spartan">Business Opportunity</h2>
              <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
                Join the future of helmet hygiene. Install a Helmio pod and create a new revenue stream.
              </p>
            </Reveal>

            <div className="space-y-4 xl:space-y-6">
              <h3 className="text-2xl xl:text-3xl font-bold font-league-spartan text-center">Perfect Locations</h3>
              <PlaceCard tall title="Fuel Stations" src={IMG.places.fuel} />
              <div className="grid grid-cols-2 gap-3 xl:gap-6">
                <PlaceCard title="IT & Mall Parking Lots" src={IMG.places.mall} />
                {places.map(([t, k]) => <PlaceCard key={k} title={t} src={IMG.places[k]} />)}
              </div>
            </div>

            <div className="pt-6 xl:pt-12">
              <h3 className="text-2xl xl:text-4xl font-bold font-league-spartan text-center mb-4 xl:mb-8">Key Highlights</h3>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6">
                {highlights.map((h, i) => (
                  <Reveal key={h.t} delay={i * 0.1}>
                    <Card className="border-border bg-card hover:border-teal transition-all duration-300 h-full">
                      <div className="p-4 xl:p-6 space-y-2 xl:space-y-4 text-center">
                        <div className="text-3xl xl:text-5xl mb-2 xl:mb-4">{h.e}</div>
                        <h4 className="text-lg xl:text-xl font-bold font-league-spartan">{h.t}</h4>
                        <p className="text-sm xl:text-base text-muted-foreground font-inter">{h.d}</p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-8">
              <Reveal>
                <Card className="border-border bg-background hover-lift h-full">
                  <div className="p-8 space-y-6">
                    <div className="flex justify-center"><Shield className="h-12 w-12 text-teal" /></div>
                    <h3 className="text-2xl font-bold font-league-spartan text-center">Service & Support</h3>
                    <Bullets items={['1-year comprehensive warranty', 'Minimal maintenance', 'Remote troubleshooting & setup assistance', 'Guided onboarding for first-time operators']} />
                  </div>
                </Card>
              </Reveal>
              <Reveal delay={0.15}>
                <Card className="border-border bg-background hover-lift h-full">
                  <div className="p-8 space-y-6">
                    <div className="flex justify-center"><Building2 className="h-12 w-12 text-teal" /></div>
                    <h3 className="text-2xl font-bold font-league-spartan text-center">Built-in Ad Display</h3>
                    <Bullets items={['19-inch display screen', 'Run your business ads', 'Engage waiting customers', 'Promote your products & services']} />
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-20 bg-gradient-to-br from-teal/10 via-background to-teal/5">
        <div className="container mx-auto max-w-4xl px-4">
          <Reveal className="text-center space-y-8">
            <h2 className="text-3xl xl:text-5xl font-bold font-league-spartan">Thinking of using Helmio?</h2>
            <button onClick={goContact} className="inline-flex items-center justify-center rounded-md bg-teal hover:bg-teal-dark text-white px-10 py-7 text-lg xl:text-xl font-inter shadow-2xl shadow-teal/30 hover:shadow-teal/50 transition-all duration-300">
              Let's Talk<Arrow />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

function Calculator() {
  const [price, setPrice] = useState('50')
  const [count, setCount] = useState(50)
  const p = parseFloat(price) || 0
  const daily = p * count
  return (
    <section className="py-16 xl:py-20 bg-teal-gradient">
      <div className="container mx-auto max-w-4xl px-4">
        <Reveal className="text-center space-y-8 mb-12">
          <h2 className="text-4xl xl:text-6xl font-bold font-league-spartan">Calculate Your Revenue</h2>
          <p className="text-xl text-muted-foreground font-inter">See how much you can earn with a Helmio pod at your location</p>
        </Reveal>
        <Reveal>
          <div className="rounded-xl py-6 border-2 border-teal bg-gradient-to-br from-[#0d5f5f] to-[#0a4a4a] shadow-2xl">
            <div className="p-6 xl:p-8 space-y-6 xl:space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-2xl xl:text-3xl font-bold text-white">Revenue Calculator</h3>
                <p className="text-sm text-white/80">Calculate your potential monthly earnings</p>
              </div>

              <div className="space-y-5 xl:space-y-6">
                <div className="space-y-2 xl:space-y-3">
                  <label htmlFor="helmet-price" className="text-white font-semibold text-base">Price per Helmet Cycle (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 font-semibold text-lg">₹</span>
                    <input
                      id="helmet-price" type="text" inputMode="decimal" placeholder="Enter price" value={price}
                      onChange={(e) => /^\d*\.?\d*$/.test(e.target.value) && setPrice(e.target.value)}
                      className="w-full rounded-md border pl-10 h-12 xl:h-14 text-base xl:text-lg font-semibold bg-white/10 border-white/30 text-white placeholder:text-white/50 outline-none focus:border-teal focus:ring-2 focus:ring-teal"
                    />
                  </div>
                </div>

                <div className="space-y-3 xl:space-y-4">
                  <div className="flex justify-between items-center">
                    <label htmlFor="helmet-count" className="text-white font-semibold text-base">Helmet Count per Day</label>
                    <div className="bg-teal px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg">
                      <span className="text-white font-bold text-lg xl:text-xl">{count}</span>
                    </div>
                  </div>
                  <input id="helmet-count" type="range" min="1" max="100" value={count} onChange={(e) => setCount(+e.target.value)} className="w-full cursor-pointer accent-teal" />
                  <div className="flex justify-between text-xs text-white/60"><span>1 helmet</span><span>100 helmets</span></div>
                </div>
              </div>

              <div className="border-t border-white/20" />

              <div className="bg-gradient-to-r from-teal to-teal-dark rounded-2xl p-6 xl:p-8 text-center space-y-2 xl:space-y-3 shadow-xl border-2 border-white/20">
                <p className="text-sm xl:text-base text-white/90 font-medium uppercase tracking-wider">Monthly Revenue Potential</p>
                <div className="space-y-1">
                  <p className="text-4xl xl:text-6xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">{inr(daily * 30)}</p>
                  <p className="text-xs xl:text-sm text-white/70">Based on {count} helmets/day × 30 days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 xl:gap-4 pt-2">
                <div className="bg-white/5 rounded-lg p-3 xl:p-4 text-center border border-white/10">
                  <p className="text-xs text-white/60 mb-1">Daily Revenue</p>
                  <p className="text-lg xl:text-xl font-bold text-teal">{inr(daily)}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 xl:p-4 text-center border border-white/10">
                  <p className="text-xs text-white/60 mb-1">Per Helmet</p>
                  <p className="text-lg xl:text-xl font-bold text-teal">{inr(p)}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-16 xl:py-20 bg-subtle-gradient">
      <div className="container mx-auto max-w-4xl px-4">
        <Reveal className="text-center space-y-12">
          <h2 className="text-4xl xl:text-6xl font-bold font-league-spartan">Frequently Asked Questions</h2>
          <div className="w-full text-left">
            {faqs.map(([q, a], i) => (
              <div key={q} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left text-lg font-medium hover:text-teal font-inter transition-colors"
                >
                  {q}
                  <ChevronDown className={`h-4 w-4 shrink-0 translate-y-1 text-muted-foreground transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-muted-foreground font-inter">{a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: Mail, title: 'Email', text: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, title: 'Phone', text: SITE.phoneLabel, href: `tel:${SITE.phone}` },
    { icon: Instagram, title: 'Instagram', text: SITE.instagramLabel, href: SITE.instagram },
  ]
  return (
    <section id="contact-section" className="py-16 xl:py-20 px-4 bg-gradient-to-br from-teal via-teal-dark to-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center space-y-12">
          <h2 className="text-4xl xl:text-6xl font-bold font-league-spartan">Get in Touch</h2>
          <p className="text-xl font-inter opacity-90">Have questions? Want to partner with us? We'd love to hear from you.</p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
            {items.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.1}>
                  <a href={c.href} className="block h-full" target={c.title === 'Instagram' ? '_blank' : undefined} rel="noreferrer">
                    <Card className="border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 h-full">
                      <div className="p-8 space-y-4 text-center">
                        <div className="flex justify-center text-white"><Icon className="h-8 w-8" /></div>
                        <h3 className="text-xl font-bold font-league-spartan">{c.title}</h3>
                        <p className="font-inter font-bold text-white break-words">{c.text}</p>
                      </div>
                    </Card>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 bg-black text-white/60">
      <div className="container mx-auto max-w-6xl px-4 text-center space-y-4">
        <p className="text-2xl font-bold font-league-spartan text-white">HELMIO</p>
        <p className="font-inter">Clean Helmet. Safer Ride.</p>
        <p className="text-sm font-inter">© {new Date().getFullYear()} Helmio. All rights reserved.</p>
      </div>
    </footer>
  )
}

function WhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.a
        href={SITE.whatsapp} target="_blank" rel="noreferrer"
        initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-teal hover:bg-teal-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 px-6 py-4"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </div>
        <span className="hidden xl:block font-inter font-medium text-sm whitespace-nowrap">Chat with us on WhatsApp</span>
      </motion.a>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="min-h-screen bg-background overflow-hidden">
          <Hero />
          <Problem />
          <HowItWorks />
          <Stats />
          <Trusted />
          <Experience />
          <Business />
          <Calculator />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsApp />
        </div>
      </main>
    </div>
  )
}
