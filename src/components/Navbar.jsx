import { Link, NavLink } from 'react-router-dom'
import { Menu, Shield, PhoneCall } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg" />
            <span className="text-white font-semibold tracking-wide">Crypto Recovery</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Start' },
              { to: '/services', label: 'Leistungen' },
              { to: '/about', label: 'Über uns' },
              { to: '/contact', label: 'Kontakt' },
              { to: '/recovery', label: 'Recovery-Formular' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 hover:text-white">
              <PhoneCall className="h-4 w-4 text-orange-400" /> Soforthilfe
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
