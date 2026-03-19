import { Link } from "react-router";

export default function Home() {
  const services = [
    { id: '1', name: 'Ambulance', img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.JPG' },
    { id: '2', name: 'Home Visit', img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.JPG' },
    { id: '3', name: 'Palliative', img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.JPG' },
    { id: '4', name: 'Air Escort', img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.JPG' }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <section style={{ 
        padding: '80px 5%', 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("/PHOTO-2026-03-17-17-26-27.jpg")',
        backgroundSize: 'cover',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#012a4a' }}>MEDOCS Health Services</h1>
        <p style={{ fontSize: '1.2rem' }}>Premium Medical Care in Sri Lanka</p>
      </section>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '50px 5%' 
      }}>
        {services.map((s) => (
          <div key={s.id} style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={s.img} alt={s.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: 0, color: '#012a4a' }}>{s.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
