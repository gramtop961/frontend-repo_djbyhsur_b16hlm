import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function RecoveryForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // Map fields to API schema
    const body = {
      vorname_nachname: payload.name,
      email: payload.email,
      kontaktweg: payload.kontaktweg,
      telefon_oder_handle: payload.kontakt,
      wallet_typ: payload.wallet_typ,
      netzwerk: payload.netzwerk,
      betroffene_assets: payload.assets,
      vorfall_typ: payload.vorfall_typ,
      transaktionshash: payload.tx,
      betrag_oder_wert: payload.wert,
      beschreibung: payload.beschreibung,
      dringlichkeit: payload.dringlichkeit,
      datenschutz_einwilligung: payload.einwilligung === 'on',
    }

    try {
      const res = await fetch(`${BACKEND}/api/recovery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('Fehler beim Senden')
      const data = await res.json()
      setSuccess(`Anfrage eingereicht. Ticket-ID: ${data.id}`)
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message || 'Unbekannter Fehler')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Recovery-Formular</h2>
        <p className="mt-3 text-white/70">Beschreiben Sie den Vorfall so präzise wie möglich. Wir reagieren umgehend.</p>
        <form onSubmit={handleSubmit} className="mt-8 rounded-xl bg-white/5 border border-white/10 p-6 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Vorname Nachname" />
            <input name="email" required type="email" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="E-Mail" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <select name="kontaktweg" className="bg-black/40 border border-white/10 rounded-md px-3 py-2">
              {['E-Mail','Telefon','Telegram','Signal','WhatsApp'].map(v=> <option key={v}>{v}</option>)}
            </select>
            <input name="kontakt" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Telefon/Handle (optional)" />
            <select name="wallet_typ" required className="bg-black/40 border border-white/10 rounded-md px-3 py-2">
              {['Hardware','Software','Custodial','Seed Phrase','Sonstiges'].map(v=> <option key={v}>{v}</option>)}
            </select>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <input name="netzwerk" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Netzwerk (z. B. Ethereum)" />
            <input name="assets" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Assets (z. B. ETH, USDT)" />
            <select name="vorfall_typ" required className="bg-black/40 border border-white/10 rounded-md px-3 py-2">
              {['Verlorener Zugriff','Phishing/Hack','Fehlerhafte Transaktion','Beschädigte Hardware','Unbekannt'].map(v=> <option key={v}>{v}</option>)}
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="tx" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Transaktionshash (optional)" />
            <input name="wert" className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Geschätzter Wert (optional)" />
          </div>
          <textarea name="beschreibung" required rows={5} className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Kurzbeschreibung des Vorfalls"></textarea>
          <div className="grid sm:grid-cols-2 gap-4 items-center">
            <select name="dringlichkeit" className="bg-black/40 border border-white/10 rounded-md px-3 py-2">
              {['Niedrig','Mittel','Hoch','Kritisch'].map(v=> <option key={v}>{v}</option>)}
            </select>
            <label className="flex items-center gap-3 text-white/80"><input type="checkbox" name="einwilligung" required /> Ich stimme der Datenverarbeitung zu.</label>
          </div>
          <button disabled={loading} className="px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold disabled:opacity-60">
            {loading ? 'Senden…' : 'Anfrage senden'}
          </button>
          {success && <p className="text-green-400">{success}</p>}
          {error && <p className="text-red-400">{error}</p>}
        </form>
      </div>
    </section>
  )
}
