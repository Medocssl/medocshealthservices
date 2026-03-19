import { Link } from "react-router";
import "../app.css";

export default function Home() {
  const services = [
    { id: 'ambulance', name: 'Ambulance', icon: '🚑', img: 'https://images.unsplash.com/photo-1587748516483-228b4d3929b3?auto=format&fit=crop&q=80&w=400' },
    { id: 'home-visits', name: 'Home Visits', icon: '🏠', img: 'https://images.unsplash.com/photo-1584515933487-759f2121f2ec?auto=format&fit=crop&q=80&w=400' },
    { id: 'equipment', name: 'Equipment', icon: '🏥', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400' },
    { id: 'air-escorts', name: 'Air Escorts', icon: '✈️', img: 'https://images.unsplash.com/photo-1540339832862-47459980783f?auto=format&fit=crop&q=80&w=400' },
    { id: 'palliative', name: 'Palliative Care', icon: '❤️', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Your Health, Our Priority</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>MEDOCS Health Services (Pvt) Ltd provides premium home-based and emergency medical solutions.</p>
          <Link to="/contact" className="btn-primary">Emergency Assistance</Link>
        </div>
      </section>

      <section className="container" style={{ padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Specialized Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="service-card">
              <img src={s.img} alt={s.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
              <h3>{s.icon} {s.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Professional care and support tailored to your specific medical requirements.</p>
              <span style={{ color: '#004a99', fontWeight: 'bold' }}>Learn More →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
