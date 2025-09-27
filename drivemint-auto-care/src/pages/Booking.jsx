import { useLocation } from 'react-router-dom'

export default function Booking(){
  const loc = useLocation()
  const prefillService = loc.state?.service || ''
  const submit = e => { e.preventDefault(); alert('Thanks! Demo only—no booking created.') }
  return (
    <main className="container" style={{padding:'20px 0 32px'}}>
      <h1>Book an Appointment</h1>
      <p className="muted">Pick a service and time. We’ll confirm by text and email.</p>
      <form onSubmit={submit} className="card" style={{padding:16, marginTop:12}}>
        <div className="row">
          <div>
            <label>Service</label>
            <select defaultValue={prefillService} className="input" required>
              <option value="">Select a service…</option>
              <option>Full Synthetic Oil Change</option>
              <option>Tires & Mount/Balance</option>
              <option>Computerized 4-Wheel Alignment</option>
              <option>Brakes: Pads • Rotors • Fluid</option>
              <option>Battery • Start/Charge/Load Test</option>
              <option>A/C Service & Recharge</option>
              <option>State & Safety Inspections</option>
              <option>Check Engine Light Diagnostics</option>
              <option>Fluid Exchange (ATF • Coolant • Brake)</option>
              <option>Suspension & Steering</option>
              <option>Wipers • Bulbs • Headlight Restore</option>
              <option>Detailing • Ceramic • Interior</option>
              <option>EV Maintenance</option>
            </select>
          </div>
          <div>
            <label>Date</label>
            <input type="date" className="input" required/>
          </div>
        </div>
        <div className="row">
          <div><label>Time</label><input type="time" className="input" required/></div>
          <div><label>Preferred Location</label><input className="input" placeholder="Nearest DriveMint"/></div>
        </div>
        <div className="row">
          <div><label>Vehicle</label><input className="input" placeholder="Year / Make / Model" required/></div>
          <div><label>Mileage</label><input className="input" placeholder="e.g., 72,000"/></div>
        </div>
        <div className="row">
          <div><label>Name</label><input className="input" required/></div>
          <div><label>Phone</label><input className="input" required/></div>
        </div>
        <div style={{marginTop:10}}><label>Email</label><input className="input" type="email" required/></div>
        <div style={{marginTop:10}}><label>Notes</label><textarea rows="4" className="input" placeholder="Tell us any symptoms or requests…"/></div>
        <button className="btn primary" style={{marginTop:12}}>Request Appointment</button>
      </form>
    </main>
  )
}
