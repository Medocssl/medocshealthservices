import { Link } from "react-router";

export default function Home() {
  const services = [
    { id: '1', name: 'Ambulance Services', img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.JPG' },
    { id: '2', name: 'Doctor Home Visits', img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.JPG' },
    { id: '3', name: 'Palliative Care', img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.JPG' },
    { id: '4', name: 'Medical Air Escorts', img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.JPG' }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 5%', 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("/PHOTO-2026-03-17-17-26-27.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'left',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', color: '#012a4a', margin: 0, fontWeight: '900' }}>MEDOCS</h1>
        <p style={{ fontSize: '1.5rem', color: '#00a8cc', marginTop: '5px', fontWeight: 'bold', letterSpacing: '2px' }}>
          HEALTH SERVICES (PVT) LTD
        </p>
        <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '600px', lineHeight: '1.6' }}>
          Your trusted partner in premium emergency medical care and home healthcare solutions across Sri Lanka.
        </p>
        <Link to="/contact" style={{ 
          background: '#012a4a', color: 'white', padding: '15px 40px', 
          borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', width: 'fit-content', marginTop: '20px' 
        }}>
          GET ASSISTANCE NOW
        </Link>
      </section>

      {/* Services Grid */}
      <div style={{ padding: '80px 5%', background: '#f4f7f6' }}>
        <h2 style={{ textAlign: 'center', color: '#012a4a', fontSize: '2.5rem', marginBottom: '50px' }}>Our Expertise</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {services.map((s) => (
            <div key={s.id} style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s'
            }}>
              <img src={s.img} alt={s.name} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              <div style={{ padding: '25px' }}>
                <h3 style={{ margin: 0, color: '#012a4a' }}>{s.name}</h3>
                <p style={{ color: '#666', marginTop: '10px' }}>Professional medical support available 24/7.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/94763400400" target="_blank" rel="noreferrer" style={{
        position: 'fixed', bottom: '30px', right: '30px', background: '#25D366',
        color: 'white', padding: '15px 30px', borderRadius: '50px', 
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)', textDecoration: 'none', fontWeight: 'bold', zIndex: 1000
      }}>
        WHATSAPP US
      </a>
    </div>
  );
}
