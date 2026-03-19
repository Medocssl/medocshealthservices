import { Link } from "react-router";
import "../app.css";

export default function Home() {
  return (
    <div>
      {/* Hero with dynamic background */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,74,153,0.8), rgba(0,74,153,0.9)), url("https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80")',
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Quality Care. Directly to You.</h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '40px' }}>24/7 Medical Support across Sri Lanka.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ background: 'white', color: '#004a99' }}>Emergency Call</Link>
            <Link to="/about" className="btn-primary" style={{ background: 'transparent', border: '2px solid white' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Services with interaction */}
      <section className="container" style={{ padding: '100px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#00aaff', fontWeight: 'bold', textTransform: 'uppercase' }}>Our Services</span>
            <h2 style={{ fontSize: '2.5rem', color: '#004a99' }}>Modern Healthcare Solutions</h2>
            <p>From rapid ambulance dispatch to specialized home palliative care, MEDOCS brings the hospital to your doorstep with compassion and advanced technology.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
             <ServiceIconBox icon="🚑" title="Ambulance" link="/services/ambulance" />
             <ServiceIconBox icon="🏠" title="Home Visit" link="/services/home-visits" />
             <ServiceIconBox icon="🏥" title="Equipment" link="/services/equipment" />
             <ServiceIconBox icon="✈️" title="Air Escorts" link="/services/air-escorts" />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp for Interaction */}
      <a href="https://wa.me/947XXXXXXXXX" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#25D366',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        zIndex: 9999
      }}>
        💬 Chat with a Medic
      </a>
    </div>
  );
}

function ServiceIconBox({ icon, title, link }) {
  return (
    <Link to={link} style={{ 
      padding: '30px', 
      textAlign: 'center', 
      background: '#f8fbff', 
      borderRadius: '15px', 
      textDecoration: 'none', 
      color: '#004a99',
      transition: 'all 0.3s ease'
    }} onMouseOver={(e) => e.currentTarget.style.background = '#eef6ff'}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{title}</div>
    </Link>
  );
}
