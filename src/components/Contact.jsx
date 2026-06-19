import { useState } from 'react'
import { CONTACT_LINKS } from '../data/index'
import SectionHeader from './SectionHeader'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdqlpyl'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-xl mx-auto">
        <SectionHeader eyebrow="Let's talk" title="Get in touch" />

        <p className="text-[0.92rem] text-[rgba(255,255,255,0.3)] leading-relaxed mb-8">
          Open to full-time roles, freelance projects, and collaborations.
          Based in Abu Dhabi - available immediately.
        </p>

        {status === 'sent' ? (
          <div className="bg-[rgba(167,139,250,0.07)] border border-[rgba(167,139,250,0.2)]
                          rounded-xl p-8 text-center">
            <i className="ti ti-circle-check text-3xl text-[#a78bfa] mb-2 block" />
            <p className="text-[#e8e8e8] font-medium mb-1">Message sent!</p>
            <p className="text-sm text-[rgba(255,255,255,0.35)]">
              Thanks for reaching out - I'll get back to you soon.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="input-field resize-y"
            />

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Email me directly:{' '}
                <a href="mailto:wasiullahkhalique25@gmail.com" className="underline">
                  wasiullahkhalique25@gmail.com
                </a>
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                'Sending…'
              ) : (
                <>Send message <i className="ti ti-send text-xs" /></>
              )}
            </button>
          </div>
        )}

        {/* Contact links */}
        <div className="flex flex-wrap gap-5 mt-10">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="flex items-center gap-2 text-[0.83rem] text-[rgba(255,255,255,0.32)]
                         no-underline hover:text-[#a78bfa] transition-colors break-all"
            >
              <i className={`ti ${link.icon} text-base flex-shrink-0`} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
