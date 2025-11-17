import { ShieldCheck, Wallet, Search, Clock } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Incident Response',
    desc: 'Sofortige Erstmaßnahmen bei Hacks, Phishing und kompromittierten Wallets.',
  },
  { icon: Wallet, title: 'Wallet-Wiederherstellung', desc: 'Wiederherstellung defekter oder gesperrter Wallets & Seeds.' },
  { icon: Search, title: 'Blockchain-Forensik', desc: 'Analyse von Transaktionsflüssen, On-Chain-Nachverfolgung, Beweissicherung.' },
  { icon: Clock, title: '24/7 Notfall', desc: 'Rund-um-die-Uhr erreichbar. Diskret, sicher und zuverlässig.' },
]

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Leistungen</h2>
        <p className="text-white/70 mt-3 max-w-2xl">Hochmoderne, forensisch fundierte Services mit Premium-Betreuung.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-orange-400" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
