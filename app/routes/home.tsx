import { Link } from "react-router";
import "../app.css";

export default function Home() {
  const services = [
    { 
      id: 'ambulance', 
      name: 'Ambulance Services', 
      img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.jpg', 
      desc: '24/7 ICU-equipped emergency transport.' 
    },
    { 
      id: 'home-visits', 
      name: 'Doctor Home Visits', 
      img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.jpg', 
      desc: 'Expert medical consultations in the comfort of your home.' 
    },
    { 
      id: 'palliative', 
      name: 'Palliative Care', 
      img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.jpg', 
      desc: 'Compassionate care for chronic and terminal conditions.' 
    },
    { 
      id: 'air-escorts', 
      name: 'Medical Air Escorts', 
      img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.jpg', 
      desc: 'International repatriation and flight nursing support.' 
    },
  ];

  return (
    <div className="page-fade">
      {/* Hero Section using your Letterhead Background */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.6)), url("/PHOTO-2026-03-17-17-26-27.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}>
        <div className="container" style={{ padding: '0 5%' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#012a4a', lineHeight: '1.1' }}>
            Professional Medical <br /> 
            <span style={{ color: '#00a8cc' }}>Care at Your Doorstep</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#444', margin: '25px 0' }}>
            MEDOCS Health Services (Pvt) Ltd provides premium emergency and home-based healthcare solutions across Sri Lanka.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/contact" className="btn-primary" style={{ background: '#012a4a', color: 'white', padding: '15px 35px', borderRadius: '5px', textDecoration: 'none' }}>
              Request Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container" style={{ padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', color: '#012a4a', fontSize: '2.5rem', marginBottom: '50px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', height: '250px' }}>
                <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s' }} 
                     onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <h3 style={{ color: '#012a4a', marginTop: '15px' }}>{s.name}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/94763400400" target="_blank" rel="noreferrer" style={{
        position: 'fixed', bottom: '30px', right: '30px', background: '#25D366',
        color: 'white', padding: '15px 25px', borderRadius: '50px', 
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)', textDecoration: 'none', fontWeight: 'bold', zIndex: 1000
      }}>
        💬 WhatsApp 076 3400 400
      </a>
    </div>
  );
}
