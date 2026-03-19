import { Link } from "react-router";

export default function Home() {
  const services = [
    { id: '1', name: 'Ambulance Services', img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.JPG' },
    { id: '2', name: 'Doctor Home Visit', img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.JPG' },
    { id: '3', name: 'Palliative Care', img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.JPG' },
    { id: '4', name: 'Medical Air Escort', img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.JPG' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        padding: '12% 5%', 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("/PHOTO-2026-03-17-17-26-27.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '50vh'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.2rem, 10vw, 4rem)', 
          color: '#012a4a', 
          margin: 0, 
          lineHeight: '1.1' 
        }}>
          MEDOCS
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 5vw, 1.5rem)', 
          color: '#00a8cc', 
          fontWeight: 'bold', 
          marginTop: '5px' 
        }}>
          HEALTH SERVICES (PVT) LTD
        </p>
        <Link to="/contact" style={{
          background: '#012a4a', color: 'white', padding: '12px 25px',
          textDecoration: 'none', borderRadius: '5px', width: 'fit-content',
          marginTop: '20px', fontWeight: 'bold', fontSize: '14px'
        }}>
          BOOK NOW
        </Link>
      </section>

      {/* Services Grid - Smart stacking for Mobile */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px', 
        padding: '40px 5%',
        backgroundColor: '#f9f9f9'
      }}>
        {services.map((s) => (
          <div key={s.id} style={{ 
            background: 'white', 
            borderRadius: '10px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
          }}>
            <img src={s.img} alt={s.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: 0, color: '#012a4a', fontSize: '1.2rem' }}>{s.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Call Button (Visible mainly on Mobile) */}
      <a href="tel:0770118118" style={{
        position: 'fixed', bottom: '20px', left: '20px', background: '#012a4a',
        color: 'white', padding: '15px', borderRadius: '50px', textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)', fontWeight: 'bold', zIndex: 1000
      }}>
        📞 Call Now
      </a>
    </div>
  );
}
