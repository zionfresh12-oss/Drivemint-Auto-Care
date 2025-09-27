import { Link } from 'react-router-dom'
import SafeImg from './SafeImg.jsx'

export default function ServiceCard({ service }){
  return (
    <article className="card">
      <figure className="img">
        <SafeImg src={service.cover} alt={service.name} loading="lazy" />
      </figure>
      <div className="body">
        <h3 style={{margin:'0 0 4px'}}>{service.name}</h3>
        <p className="muted" style={{margin:0}}>{service.blurb}</p>
        <div className="service-footer">
          <div className="badgelist">
            {service.badges?.map(b => <span className="chip" key={b}>{b}</span>)}
          </div>
          <Link to="/booking" state={{ service: service.name }} className="btn primary">Book</Link>
        </div>
      </div>
    </article>
  )
}
