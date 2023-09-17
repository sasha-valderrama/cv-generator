import ContactPreview from './ContactPreview'
import PersonalPreview from './PersonalPreview'
import SkillsPreview from './SkillsPreview'
import WorkPreview from './WorkPreview'
import EducationPreview from './EducationPreview'
import LanguagesPreview from './LanguagesPreview'

export default function CVPreview() {
  return (
    <div className="preview-container">
      <h2>Preview page</h2>
      <PersonalPreview />
      <ContactPreview />
      <SkillsPreview />
      <WorkPreview />
      <EducationPreview />
      <LanguagesPreview />
    </div>
  )
}
