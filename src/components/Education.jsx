import { EDUCATION } from '../data/index'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Academic background" title="Education" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.07)]" />

          {EDUCATION.map((item, i) => (
            <div key={item.institution} className="relative pl-8 pb-10 last:pb-0">
              {/* Dot */}
              <div className={i === 0 ? 'timeline-dot-active' : 'timeline-dot'} />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <div>
                  <h3 className="font-display text-[0.95rem] font-semibold text-[#e8e8e8]">
                    {item.degree}
                  </h3>
                  {item.field && (
                    <p className="text-sm text-[rgba(255,255,255,0.4)] mt-0.5">{item.field}</p>
                  )}
                  <p className="text-[0.82rem] text-[#a78bfa] mt-0.5">
                    {item.institution} · {item.location}
                  </p>
                </div>
                <span className="text-[0.72rem] text-[rgba(255,255,255,0.22)] whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
