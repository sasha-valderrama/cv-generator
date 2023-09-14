import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Instructions from './components/Instructions'
import Form from './components/Form'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Instructions />} />
      <Route path="/form" element={<Form />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={appRouter} />
}

export default App
