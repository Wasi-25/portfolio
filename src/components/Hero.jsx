import { scrollToSection } from '../utils/scroll'

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10
                 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#12091f]"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start
                        justify-between gap-12 text-center md:text-left">

          {/* Text content */}
          <div className="flex-1">
            <p className="text-[0.78rem] text-[#a78bfa] tracking-[0.14em] uppercase font-medium mb-5">
              Software Developer · Abu Dhabi, UAE (Open to relocate)
            </p>

            <h1 className="font-display text-[clamp(2.6rem,8vw,4.2rem)] font-bold text-[#f0f0f0]
                           leading-[1.08] tracking-tight mb-5">
              Wasiullah<br />
              <span className="text-[#a78bfa]">Khalique</span>
            </h1>

            <p className="text-[rgba(255,255,255,0.52)] leading-[1.8] max-w-md mx-auto md:mx-0 mb-8">
            Fullstack developer with 3+ years building web apps for clients across India and UAE - spanning frontend interfaces, backend APIs, database design, real-time features, and third-party integrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View projects <i className="ti ti-arrow-right text-xs" />
              </button>
              <a href="/Wasiullah_Khalique_CV.pdf" download className="btn-outline">
                <i className="ti ti-download text-xs" /> Download Resume
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn-ghost">
                Get in touch
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-10">
              {[
                ['3+', 'Years exp.'],
                ['8+', 'Projects'],
                ['Immediate', 'Joiner'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-[#f0f0f0] tracking-tight">{num}</div>
                  <div className="text-[0.7rem] text-[rgba(255,255,255,0.28)] uppercase tracking-widest mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-[rgba(167,139,250,0.25)]
                            bg-[#110d1a] flex flex-col items-center justify-center">
                <img src="/Photo.jpeg" alt="Wasiullah Khalique"
                     className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
