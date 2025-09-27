import { stats } from '../data/site.js'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Professional Vehicle Service—Fast, Fair, Guaranteed.</h1>
          <p className="sub">From oil changes to diagnostics, DriveMint keeps your car feeling new. Book online in under a minute.</p>
          <div className="cta">
            <Link to="/booking" className="btn primary">Book Appointment</Link>
            <Link to="/services" className="btn secondary">Browse Services</Link>
          </div>

          <div className="hero-card">
            <div className="panel">
              <strong>Why DriveMint</strong>
              <ul>
                <li>OEM-spec parts, nationwide warranty</li>
                <li>Transparent pricing before work begins</li>
                <li>Comfort lounge, Wi‑Fi, coffee</li>
              </ul>
              <Link to="/deals" className="btn ghost">View Current Deals</Link>
            </div>
            <div className="panel">
              <div className="kpis">
                <div className="kpi"><div className="big">{stats.vehicles.toLocaleString()}</div><div>Vehicles Serviced</div></div>
                <div className="kpi"><div className="big">{stats.rating}★</div><div>Average Rating</div></div>
                <div className="kpi"><div className="big">{stats.technicians}</div><div>ASE Techs</div></div>
              </div>
              <div style={{marginTop:12, display:'flex', gap:10}}>
                <Link to="/locations" className="btn secondary">Find a Location</Link>
                <Link to="/fleet" className="btn ghost">Fleet Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
