/**
 * Smooth-scrolls to a section by its id,
 * offsetting for the fixed 60px navbar.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id.toLowerCase())
  if (!el) return
  const navHeight = 60
  const y = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top: y, behavior: 'smooth' })
}
