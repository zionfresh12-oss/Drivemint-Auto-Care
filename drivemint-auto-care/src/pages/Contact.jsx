export default function Contact(){
  const submit = e => { e.preventDefault(); alert('Thanks! Demo form only.') }
  return (
    <main className="container" style={{padding:'20px 0 32px'}}>
      <h1>Contact Us</h1>
      <form onSubmit={submit} className="card" style={{padding:14, marginTop:12}}>
        <div className="row">
          <div><label>Name</label><input className="input" required/></div>
          <div><label>Email</label><input type="email" className="input" required/></div>
        </div>
        <div className="row">
          <div><label>Phone</label><input className="input"/></div>
          <div><label>Topic</label><select className="input"><option>General</option><option>Feedback</option><option>Careers</option></select></div>
        </div>
        <div style={{marginTop:10}}><label>Message</label><textarea rows="4" className="input" required/></div>
        <button className="btn primary" style={{marginTop:12}}>Send</button>
      </form>
    </main>
  )
}
