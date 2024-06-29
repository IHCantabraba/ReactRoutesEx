import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact/:name' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
