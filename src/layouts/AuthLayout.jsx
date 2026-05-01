import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
    </div>
  )
}
