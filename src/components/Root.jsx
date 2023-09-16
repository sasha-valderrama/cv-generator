import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Root() {
  const { pathname } = useLocation()
  return (
    <>
      <Header />
      <div className={pathname === '/' ? 'root-page' : 'main-page'}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
