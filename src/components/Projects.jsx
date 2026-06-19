
import { useState } from 'react'
import { PROJECTS } from '../data/index'
import SectionHeader from './SectionHeader'

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null)
  
  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Work" title="Selected projects" />

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="card card-hover flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="flex-1">
                {/* Title row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.18)] font-display">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[0.95rem] font-semibold text-[#e8e8e8]">
                    {project.title}
                  </h3>
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.18)]">{project.year}</span>
                </div>

                <p className="text-sm text-[rgba(255,255,255,0.36)] leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-purple">{tag}</span>
                  ))}
                </div>
                
              </div>

              {project.modal ? (
              <button
                onClick={() => setActiveModal(project)}
                className="text-[rgba(255,255,255,0.18)] hover:text-[#a78bfa] transition-colors flex-shrink-0 mt-1"
                aria-label={`View ${project.title}`}
              >
                <i className="ti ti-external-link text-lg" />
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                className="text-[rgba(255,255,255,0.18)] hover:text-[#a78bfa] transition-colors flex-shrink-0 mt-1"
                aria-label={`View ${project.title}`}
              >
                <i className="ti ti-external-link text-lg" />
              </a>
            )}
            </div>
          ))}
        </div>
      </div>
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#111] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-display text-[0.95rem] font-semibold text-[#e8e8e8] mb-2">
              {activeModal.title}
            </h3>
            <p className="text-sm text-[rgba(255,255,255,0.36)] leading-relaxed mb-6">
              {activeModal.description}
            </p>
            <div className="flex items-start gap-3 bg-[rgba(167,139,250,0.06)] border border-[rgba(167,139,250,0.15)] rounded-xl p-4 mb-6">
              <i className="ti ti-info-circle text-[#a78bfa] text-lg mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                {activeModal.modalMessage}
              </p>
            </div>
            {activeModal.modalLinks && (
              <div className="flex flex-col gap-2 mt-3">
                {activeModal.modalLinks.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#a78bfa] hover:underline"
                  >
                    <i className="ti ti-external-link text-lg" />
                    {l.label}
                  </a>
                ))}
              </div>
            )}
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl text-sm font-medium text-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(167,139,250,0.3)] hover:text-[#a78bfa] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
