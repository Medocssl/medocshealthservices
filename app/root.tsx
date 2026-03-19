import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 5%', background: 'white', position: 'sticky', top: 0, zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <Link to="/">
            {/* Exactly matching your logo filename */}
            <img src="/Medocs logo full new.jpg" alt="MEDOCS Logo" style={{ height: '60px' }} />
          </Link>
          
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" style={{ 
              background: '#012a4a', color: 'white', padding: '10px 20px', 
              borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' 
            }}>
              Hotline: 0770 118 118
            </Link>
          </div>
        </nav>
        
        <Outlet />
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
