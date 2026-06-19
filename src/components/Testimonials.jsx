import { useRef } from 'react'
import { TESTIMONIALS } from '../data/index'
import SectionHeader from './SectionHeader'

export default function Testimonials() {
  const scrollRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Kind words" title="Testimonials" />

        {TESTIMONIALS.length > 3 ? (
          <>
            {/* Desktop: drag scroll */}
            <div
              ref={scrollRef}
              className="hidden md:flex gap-4 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none' }}
              onMouseDown={e => {
                isDown.current = true
                startX.current = e.pageX - scrollRef.current.offsetLeft
                scrollLeft.current = scrollRef.current.scrollLeft
              }}
              onMouseLeave={() => { isDown.current = false }}
              onMouseUp={() => { isDown.current = false }}
              onMouseMove={e => {
                if (!isDown.current) return
                e.preventDefault()
                const x = e.pageX - scrollRef.current.offsetLeft
                scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card flex flex-col flex-shrink-0 w-[320px]">
                  <i className="ti ti-quote text-xl text-[rgba(167,139,250,0.3)] mb-3" />
                  <p className="text-sm text-[rgba(255,255,255,0.42)] leading-relaxed flex-1 mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(167,139,250,0.1)] flex items-center justify-center text-[0.68rem] font-semibold text-[#a78bfa] flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[0.82rem] font-semibold text-[#d0d0d0]">{t.name}</p>
                      <p className="text-[0.72rem] text-[rgba(255,255,255,0.26)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: stacked grid */}
            <div className="grid grid-cols-1 md:hidden gap-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card flex flex-col">
                  <i className="ti ti-quote text-xl text-[rgba(167,139,250,0.3)] mb-3" />
                  <p className="text-sm text-[rgba(255,255,255,0.42)] leading-relaxed flex-1 mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(167,139,250,0.1)] flex items-center justify-center text-[0.68rem] font-semibold text-[#a78bfa] flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[0.82rem] font-semibold text-[#d0d0d0]">{t.name}</p>
                      <p className="text-[0.72rem] text-[rgba(255,255,255,0.26)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // 3 or fewer: normal grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card flex flex-col">
                <i className="ti ti-quote text-xl text-[rgba(167,139,250,0.3)] mb-3" />
                <p className="text-sm text-[rgba(255,255,255,0.42)] leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[rgba(167,139,250,0.1)] flex items-center justify-center text-[0.68rem] font-semibold text-[#a78bfa] flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[0.82rem] font-semibold text-[#d0d0d0]">{t.name}</p>
                    <p className="text-[0.72rem] text-[rgba(255,255,255,0.26)]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}