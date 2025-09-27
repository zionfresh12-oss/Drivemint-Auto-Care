import { locations } from '../data/locations.js'
export default function Locations(){
  return (
    <main className="container" style={{padding:'20px 0 32px'}}>
      <h1>Locations</h1>
      <div className="grid" style={{marginTop:12}}>
        {locations.map(l => (
          <article className="card" key={l.id} style={{padding:14}}>
            <h3>{l.name}</h3>
            <p className="muted">{l.address}</p>
            <div className="badgelist">
              <span className="chip">{l.phone}</span>
              <span className="chip">{l.hours}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
