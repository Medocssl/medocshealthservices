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
            {/* Using the exact name from your upload */}
            <img src="/Medocs logo full new.jpg" alt="MEDOCS" style={{ height: '60px' }} />
          </Link>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>About</Link>
            <Link to="/contact" style={{ 
              background: '#012a4a', color: 'white', padding: '8px 15px', 
              borderRadius: '4px', textDecoration: 'none' 
            }}>
              0764400400
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
