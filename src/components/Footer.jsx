export default function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Crypto Recovery – Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Datenschutz</a>
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="/recovery" className="text-orange-400 hover:text-orange-300">Recovery starten</a>
        </div>
      </div>
    </footer>
  )
}
