import { SKILLS } from '../data/index'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Tech stack" title="Skills & tools" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="bg-[#141414] rounded-xl border border-[rgba(255,255,255,0.06)] p-5">
              <p className="text-[0.7rem] text-[#a78bfa] uppercase tracking-widest font-semibold mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
