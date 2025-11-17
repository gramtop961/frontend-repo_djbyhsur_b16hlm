import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Premium Crypto Recovery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
        >
          Wir helfen Ihnen, verlorene oder kompromittierte Krypto-Assets zurückzugewinnen – diskret, schnell und mit modernster Forensik.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/recovery" className="px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold shadow-lg shadow-orange-500/30">
            Recovery starten
          </a>
          <a href="/services" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/5">
            Leistungen ansehen
          </a>
        </motion.div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
          {['Blockchain-Forensik', 'Wallet-Wiederherstellung', 'Transaktionsanalyse', '24/7 Support'].map((t) => (
            <div key={t} className="backdrop-blur bg-white/5 border border-white/10 rounded-md px-4 py-3">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
