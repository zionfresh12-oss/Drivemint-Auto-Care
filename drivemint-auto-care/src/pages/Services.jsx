import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Services(){
  return (
    <main className="container" style={{padding:'20px 0 32px'}}>
      <h1>Our Services</h1>
      <p className="muted">Everything your vehicle needs—performed by ASE‑certified technicians.</p>
      <div className="grid" style={{marginTop:12}}>
        {services.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </main>
  )
}
