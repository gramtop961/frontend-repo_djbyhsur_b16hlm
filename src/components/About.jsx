import { Award, Users, ShieldCheck, Globe2 } from 'lucide-react'

const highlights = [
  { icon: Award, title: '92%+ Erfolgsquote', desc: 'Strukturierte Playbooks und forensische Exzellenz.' },
  { icon: Users, title: '8+ Jahre', desc: 'Cross‑functional Team aus IR, Forensik und Krypto‑Engineering.' },
  { icon: ShieldCheck, title: 'Compliance‑First', desc: 'DSGVO, KYC‑Prozesse und rechtssichere Beweisketten.' },
  { icon: Globe2, title: 'Global aktiv', desc: 'Kooperation mit Börsen, Ermittlern und Custodians.' },
]

export default function About() {
  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Über uns</h2>
            <p className="mt-3 text-white/80 max-w-2xl">Spezialisiertes Recovery‑Team mit Kryptographie‑, IR‑ und Forensik‑DNA. Diskret, präzise, messbar.</p>
          </div>
          <div className="text-sm text-white/60">Vertrauen • Präzision • Transparenz</div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-6">
          <div className="md:col-span-4 md:row-span-2 rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/10 to-white/5">
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-3 text-white/70 max-w-2xl">Wir geben Kontrolle zurück: durch schnelle Triage, belastbare Beweise und sauberes Risikomanagement. Jede Lage ist anders – unser Framework bleibt konstant stark.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <Icon className="h-5 w-5 text-orange-400" />
                  <div className="mt-2 text-sm font-medium">{title}</div>
                  <div className="text-xs text-white/60">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Werte</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Diskretion & Integrität</li>
              <li>• Evidenz statt Hypothesen</li>
              <li>• Klare Kommunikation</li>
            </ul>
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Zertifizierungen</h3>
            <p className="mt-2 text-sm text-white/70">CISSP • CISM • CHFI • Chainalysis Reactor</p>
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Vertrauen</h3>
            <p className="mt-2 text-sm text-white/70">NDA‑First, Referenzen auf Anfrage, Mandanten aus EU/CH/US.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
