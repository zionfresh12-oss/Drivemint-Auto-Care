import { deals } from '../data/deals.js'
export default function Deals(){
  return (
    <main className="container" style={{padding:'20px 0 32px'}}>
      <h1>Deals & Coupons</h1>
      <div className="grid" style={{marginTop:12}}>
        {deals.map(d => (
          <article className="card" key={d.id} style={{padding:14}}>
            <h3>{d.title}</h3>
            <p className="muted" style={{margin:0}}>{d.details}</p>
            <div className="badgelist" style={{marginTop:8}}>
              <span className="chip">Code: {d.code}</span>
              <span className="chip">Show on phone</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
