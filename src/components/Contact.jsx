export default function Contact() {
  return (
    <section id="kontakt" className="bg-gradient-to-b from-zinc-950 to-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Kontakt</h2>
        <p className="mt-3 text-white/70">Diskret, sicher, 24/7. Wir melden uns innerhalb von 30 Minuten.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h3 className="font-semibold">Soforthilfe</h3>
            <p className="text-white/70 mt-2">E-Mail: support@cryptorecovery.example</p>
            <p className="text-white/70">Signal/Telegram: @cryptorecovery</p>
          </div>
          <form action="/recovery" method="get" className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Vorname Nachname" />
              <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="E-Mail" />
            </div>
            <button className="mt-4 px-5 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold">Recovery starten</button>
          </form>
        </div>
      </div>
    </section>
  )
}
