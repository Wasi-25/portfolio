import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/index'
import { scrollToSection } from '../utils/scroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#hamburger')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  function handleNav(id) {
    setMenuOpen(false)
    setTimeout(() => scrollToSection(id), 50)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-10
                      bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]">

        {/* Logo */}
        <button
          onClick={() => handleNav('about')}
          className="font-display font-bold text-[#e8e8e8] tracking-tight bg-transparent border-none cursor-pointer"
        >
          {'<Wasiullah />'}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              className="text-[0.82rem] text-[rgba(255,255,255,0.45)] bg-transparent border-none cursor-pointer
                         hover:text-[#a78bfa] transition-colors font-sans"
            >
              {link}
            </button>
          ))}
          <a
            href="/Wasiullah_Khalique_Resume.pdf"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[rgba(167,139,250,0.4)]
                       text-[#a78bfa] text-[0.8rem] font-medium no-underline hover:bg-[rgba(167,139,250,0.08)] transition-colors"
          >
            <i className="ti ti-download text-xs" /> Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-[rgba(255,255,255,0.6)] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'} text-[22px]`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[60px] left-0 right-0 z-40 flex flex-col bg-[rgba(10,10,10,0.98)]
                     border-b border-[rgba(255,255,255,0.08)] animate-fadeIn md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              className="w-full text-left px-6 py-4 text-[0.95rem] text-[rgba(255,255,255,0.7)]
                         border-b border-[rgba(255,255,255,0.05)] bg-transparent cursor-pointer
                         hover:text-[#a78bfa] hover:bg-[rgba(167,139,250,0.04)] transition-colors font-sans"
            >
              {link}
            </button>
          ))}
          <a
            href="/Wasiullah_Khalique_Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-4 text-[0.95rem] text-[#a78bfa] no-underline"
          >
            <i className="ti ti-download text-sm" /> Download Resume
          </a>
        </div>
      )}
    </>
  )
}
