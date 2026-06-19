import { EXPERIENCE } from '../data/index'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Career" title="Work experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.07)]" />

          {EXPERIENCE.map((item, i) => (
            <div key={item.role} className="relative pl-8 pb-10 last:pb-0">
              {/* Dot */}
              <div className={i === 0 ? 'timeline-dot-active' : 'timeline-dot'} />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                <div>
                  <h3 className="font-display text-[0.95rem] font-semibold text-[#e8e8e8]">
                    {item.role}
                  </h3>
                  <p className="text-[0.82rem] text-[#a78bfa] mt-0.5">{item.company}</p>
                </div>
                <span className="text-[0.72rem] text-[rgba(255,255,255,0.22)] sm:text-right whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-[rgba(255,255,255,0.36)] leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-gray">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
