import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 5%', 
          background: 'white', 
          position: 'sticky', 
          top: 0, 
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          fontFamily: 'sans-serif'
        }}>
          {/* Left Side: Navigation Links */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>HOME</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>ABOUT</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>CONTACT</Link>
            <div style={{ color: '#00a8cc', fontWeight: '800', borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
              📞 0770 118 118
            </div>
          </div>

          {/* Right Side: Logo */}
          <Link to="/">
            <img 
              src="/Medocs%20logo%20full%20new.jpg" 
              alt="MEDOCS Logo" 
              style={{ height: '60px', display: 'block' }} 
            />
          </Link>
        </nav>
        
        <Outlet />
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
