import FormSections from './FormSections'

const sections = [
  'Personal Data',
  'Contact Information',
  'Education',
  'Work Experience',
  'Languages',
  'Skills',
]

export default function CVForm() {
  return (
    <div className="CVForm-container">
      {sections.map((section) => {
        return <FormSections key={section} section={section} />
      })}
    </div>
  )
}
