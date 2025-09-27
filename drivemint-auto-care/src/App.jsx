import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Booking from './pages/Booking.jsx'
import Deals from './pages/Deals.jsx'
import Locations from './pages/Locations.jsx'
import Fleet from './pages/Fleet.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function Header(){
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <span className="logo" aria-hidden></span>
          <div>
            <strong>DriveMint</strong><div style={{fontSize:12, color:'#5b6b7f'}}>Auto Care</div>
          </div>
        </div>

        <NavLink to="/" className={({isActive})=>isActive?'active':undefined}>Home</NavLink>
        <NavLink to="/services" className={({isActive})=>isActive?'active':undefined}>Services</NavLink>
        <NavLink to="/booking" className={({isActive})=>isActive?'active':undefined}>Book</NavLink>
        <NavLink to="/deals" className={({isActive})=>isActive?'active':undefined}>Deals</NavLink>
        <NavLink to="/locations" className={({isActive})=>isActive?'active':undefined}>Locations</NavLink>
        <NavLink to="/fleet" className={({isActive})=>isActive?'active':undefined}>Fleet</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?'active':undefined}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?'active':undefined}>Contact</NavLink>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container">© {new Date().getFullYear()} DriveMint Auto Care — Demo site.</div>
    </footer>
  )
}

export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
