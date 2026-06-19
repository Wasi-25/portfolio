export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
