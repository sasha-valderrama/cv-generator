import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Link
      to="https://github.com/sasha-valderrama"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="footer">Built by Sasha Valderrama - 2023</div>
    </Link>
  )
}
