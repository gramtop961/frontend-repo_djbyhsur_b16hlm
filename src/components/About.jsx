export default function About() {
  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Über uns</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Wir sind ein spezialisiertes Recovery-Team mit tiefem Know-how in Kryptographie, Incident Response und
          Blockchain-Forensik. Unser Ansatz vereint technische Exzellenz mit strenger Diskretion. Jede Recovery ist
          ein maßgeschneidertes Projekt – mit klarer Kommunikation, realistischen Erwartungen und höchster
          Compliance.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { k: 'Erfolgsquote', v: '92%+' },
            { k: 'Jahre Erfahrung', v: '8+' },
            { k: 'Wiederhergestellte Assets', v: '€150M+' },
          ].map(({ k, v }) => (
            <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-white/60 text-sm">{k}</div>
              <div className="text-2xl font-semibold mt-2 text-orange-400">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
