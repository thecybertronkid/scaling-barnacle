import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Vision & Mission', path: '/vision' },
    { label: 'Annual Report', path: '/reports' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-1.5">
              <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-gray-400 dark:text-white"
                placeholder="Search resources..."
                type="text"
              />
            </div>
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors inline-block hidden md:block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-gray-100 dark:bg-slate-800'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-4 my-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}