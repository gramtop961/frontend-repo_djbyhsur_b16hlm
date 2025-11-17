import { ShieldCheck, Wallet, Search, Clock, Lock, LifeBuoy, Fingerprint, Sparkles } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Incident Response',
    desc: 'Sofortige Erstmaßnahmen bei Hacks, Phishing und kompromittierten Wallets.',
    badge: 'SLA < 30 Min',
    span: 'lg:col-span-3 lg:row-span-2'
  },
  {
    icon: Wallet,
    title: 'Wallet‑Wiederherstellung',
    desc: 'Wiederherstellung defekter oder gesperrter Wallets & Seeds.',
    badge: 'Hardware / Software',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    icon: Search,
    title: 'Blockchain‑Forensik',
    desc: 'On‑Chain‑Analyse, Adress‑Clustering, Beweissicherung für Zivil- und Strafverfahren.',
    badge: 'Chain Agnostic',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: Clock,
    title: '24/7 Notfall',
    desc: 'Rund um die Uhr erreichbar. Diskret, sicher und zuverlässig.',
    badge: 'Global',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    icon: Lock,
    title: 'Multisig & Key Management',
    desc: 'Sichere Setups, Rotation, Policy‑Design und HSM‑Integration.',
    badge: 'Enterprise',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    icon: Fingerprint,
    title: 'Malware & Phishing Response',
    desc: 'Triage, IOC‑Hunting, Kompromittierungsprüfung und Sicherung.',
    badge: 'IR Playbooks',
    span: 'lg:col-span-2 lg:row-span-1'
  },
]

function Card({ icon: Icon, title, desc, badge, span }){
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur ${span}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(251,146,60,0.15),transparent_60%)]" />
      <div className="relative p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400/90 text-black flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Icon className="h-5 w-5" />
          </div>
          {badge && (
            <span className="text-xs px-2 py-1 rounded-md border border-white/10 bg-black/30 text-white/70">{badge}</span>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
      </div>
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
    </div>
  )
}

export default function Services() {
  // pointer gradient enhancer
  const handleMove = (e) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--x', `${e.clientX - rect.left}px`)
    target.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Leistungen</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Hochmoderne, forensisch fundierte Services mit Premium‑Betreuung.</p>
          </div>
          <div className="text-sm text-white/60">ISO‑ähnliche Playbooks • NDA‑First • Chain‑agnostisch</div>
        </div>

        <div onMouseMove={handleMove} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-6">
          {/* Hero card spanning more space */}
          <div className="lg:col-span-4 lg:row-span-2 rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_70%_-10%,rgba(251,146,60,0.15),transparent_60%)]" />
            <div className="relative z-10 max-w-md">
              <div className="inline-flex items-center gap-2 text-xs text-white/60">
                <Sparkles className="h-4 w-4 text-orange-400" /> Premium Playbooks
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Schnelle, strukturierte Incident Response</h3>
              <p className="mt-3 text-white/70">Priorisierte Triage, On‑Chain‑Einfrieren, Kontakt zu Börsen, rechtssichere Beweiskette. Startbereit in unter 30 Minuten.</p>
            </div>
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          {services.map((s) => (
            <Card key={s.title} {...s} />
          ))}

          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-white/10 p-8 flex flex-col justify-between bg-white/5">
            <div>
              <h3 className="text-xl font-semibold">Engagement‑Modelle</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Erfolgsbasiert (No Win, Low Fee)</li>
                <li>• Retainer für Institutionen</li>
                <li>• Festpreis für forensische Gutachten</li>
              </ul>
            </div>
            <a href="/recovery" className="mt-6 inline-flex justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold px-4 py-2">Kostenfrei anfragen</a>
          </div>
        </div>
      </div>
    </section>
  )
}
