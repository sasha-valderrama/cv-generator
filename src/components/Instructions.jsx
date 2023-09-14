import { Link } from 'react-router-dom'

export default function Instructions() {
  return (
    <div className="instructions">
      <h2>Create a bold CV here!</h2>
      <ul>
        <li>If you need some inspiration click on SHOW TEMPLATE.</li>
        <li>You can add or remove items in each section.</li>
        <li>If you want to have a clean start, click on ERASE ALL.</li>
        <li>Click on RESET to lose all your info and come back here</li>
      </ul>
      <Link to="/form">
        <button>Let´s get started</button>
      </Link>
    </div>
  )
}
