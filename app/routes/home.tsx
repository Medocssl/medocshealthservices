import { Link } from "react-router";
import "../app.css";

export default function Home() {
  const services = [
    { id: 'ambulance', name: 'Ambulance', img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.jpg', desc: 'Emergency response with modern ICU-equipped vehicles.' },
    { id: 'home-visits', name: 'Home Visits', img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.jpg', desc: 'Professional medical care at your doorstep.' },
    { id: 'palliative', name: 'Palliative Care', img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.jpg', desc: 'Compassionate end-of-life care and pain management.' },
    { id: 'air-escorts', name: 'Air Escorts', img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.jpg', desc: 'International medical repatriation and flight nursing.' },
  ];

  return (
    <div>
      {/* Hero Section using your Letterhead Background */}
      <section style={{ 
        height: '85vh', position: 'relative', display: 'flex', alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("/PHOTO-2026-03-17-17-26-27.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container" style={{ paddingLeft: '5%' }}>
          <h1 style={{ fontSize: '4rem', color: '#012a4a', margin: '0' }}>Trusted.</h1>
          <h1 style={{ fontSize: '4rem', color: '#00a8cc', margin: '0' }}>Compassionate.</h1>
          <h1 style={{ fontSize: '4rem', color: '#012a4a', margin: '0' }}>Rapid.</h1>
          <p style={{ maxWidth: '500px', fontSize: '1.2rem', color: '#444', margin: '20px 0' }}>
            Sri Lanka’s premier health service provider for emergency, home, and palliative care.
          </p>
          <Link to="/contact" className="btn-primary" style={{ background: '#004a99', color: 'white', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block' }}>
            Book a Service
          </Link>
        </div>
      </section>

      {/* Services Grid with Interactive Hover */}
      <section className="container" style={{ padding: '100px 5%' }}>
        <h2 style={{ textAlign: 'center', color: '#012a4a', fontSize: '2.5rem', marginBottom: '50px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="service-card" style={{ textDecoration: 'none' }}>
              <div style={{ overflow: 'hidden', borderRadius: '15px' }}>
                <img src={s.img} alt={s.name} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: '0.5s' }} 
                     onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                     onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <h3 style={{ color: '#012a4a', marginTop: '20px' }}>{s.name}</h3>
              <p style={{ color: '#666' }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive WhatsApp Float */}
      <a href="https://wa.me/94763400400" target="_blank" style={{
        position: 'fixed', bottom: '30px', right: '30px', background: '#25D366',
        color: 'white', padding: '15px 25px', borderRadius: '50px', 
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)', textDecoration: 'none', fontWeight: 'bold'
      }}>
        WhatsApp Us
      </a>
    </div>
  );
}
