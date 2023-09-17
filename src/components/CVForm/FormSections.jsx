/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
export default function FormSections({ section }) {
  return (
    <div className="section-container" section={section}>
      {section}
    </div>
  )
}
