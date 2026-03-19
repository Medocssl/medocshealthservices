import { Link } from "react-router";

export default function Home() {
  const services = [
    { 
      id: '1', 
      name: 'Ambulance Services', 
      img: '/810BAE48-7E8B-426D-B949-CD397B8DB004.JPG' // Check if this is .JPG or .jpg in GitHub
    },
    { 
      id: '2', 
      name: 'Home Visit', 
      img: '/36D24EF7-7AB3-4C21-965F-376E81E837BF.JPG' 
    },
    { 
      id: '3', 
      name: 'Palliative Care', 
      img: '/AF27A051-B3D3-4353-BF0A-76DEE889B540.JPG' 
    },
    { 
      id: '4', 
      name: 'Air Escort', 
      img: '/3EB632EA-D771-44D2-9F15-75E56ECED7B2.JPG' 
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#012a4a' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("/PHOTO-2026-03-17-17-26-27.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'left'
      }}>
        <h1 style={{ fontSize: '3.5rem', margin: 0 }}>MEDOCS</h1>
        <p style={{ fontSize: '1.5rem', color: '#00a8cc' }}>Health Services (Pvt) Ltd</p>
      </section>

      {/* Services Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '25px', 
        padding: '60px 5%' 
      }}>
        {services.map((s) => (
          <div key={s.id} style={{ 
            background: '#fff', 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)' 
          }}>
            <img 
              src={s.img} 
              alt={s.name} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                console.error("Image failed to load:", s.img);
                e.currentTarget.src = "https://via.placeholder.com/400x250?text=Image+Not+Found";
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: 0 }}>{s.name}</h3>
              <Link to="/contact" style={{ color: '#00a8cc', textDecoration: 'none', fontWeight: 'bold', display: 'block', marginTop: '10px' }}>
                Book Service →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
