import { Mail, Phone, Shield, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-gradient-to-b from-zinc-950 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Kontakt</h2>
            <p className="mt-3 text-white/70">Diskret, sicher, 24/7. Wir melden uns innerhalb von 30 Minuten.</p>
          </div>
          <div className="text-sm text-white/60">NDA‑First • PGP optional • Reaktionszeit &lt; 30 Min</div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-6">
          <div className="md:col-span-4 md:row-span-2 rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Shield className="h-5 w-5 text-orange-400"/>Soforthilfe</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-white/80">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-orange-400"/> support@cryptorecovery.example</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-orange-400"/> +49 (0) 000 000000</div>
              <div className="flex items-center gap-3"><MessageSquare className="h-4 w-4 text-orange-400"/> Signal/Telegram: @cryptorecovery</div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-orange-400"/> 24/7 Reaktion</div>
            </div>
            <a href="/recovery" className="mt-6 inline-flex rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold px-4 py-2">Recovery starten</a>
          </div>

          <form action="/recovery" method="get" className="md:col-span-2 md:row-span-2 rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/10 to-white/5">
            <div className="grid grid-cols-1 gap-3">
              <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2 placeholder-white/50" placeholder="Vorname Nachname" />
              <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2 placeholder-white/50" placeholder="E‑Mail" />
              <select className="bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white/80">
                <option>Vorfalltyp wählen…</option>
                <option>Phishing</option>
                <option>Hack/Exploit</option>
                <option>Seed verloren</option>
                <option>Technischer Defekt</option>
              </select>
            </div>
            <button className="mt-4 w-full px-5 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold">Kostenfrei anfragen</button>
            <p className="mt-3 text-xs text-white/60">Mit Klick bestätigst du unsere Datenschutzhinweise.</p>
          </form>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Standorte</h3>
            <p className="mt-2 text-sm text-white/70">Remote‑First (EU/CH/US) • Vor‑Ort möglich nach NDA.</p>
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Sichere Kommunikation</h3>
            <p className="mt-2 text-sm text-white/70">PGP, Signal, Matrix. Schlüssel auf Anfrage.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
