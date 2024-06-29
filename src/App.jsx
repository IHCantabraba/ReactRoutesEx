import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <header>
          <nav>
            <NavLink to=''>Home </NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact/contact'>Contact </NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer> Create by Iñigo</footer>
      </div>
    </>
  )
}

export default App
