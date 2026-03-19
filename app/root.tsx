import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="#004a99" strokeWidth="4"/>
      <rect x="42" y="25" width="16" height="50" rx="8" fill="#00aaff"/>
      <rect x="25" y="42" width="50" height="16" rx="8" fill="#004a99"/>
    </svg>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 5%' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Logo />
            <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#004a99', letterSpacing: '1px' }}>
              MEDOCS <small style={{ fontWeight: '400', fontSize: '0.7rem', display: 'block' }}>HEALTH SERVICES</small>
            </span>
          </Link>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
            <Link to="/about" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>About</Link>
            <Link to="/contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Contact</Link>
          </div>
        </nav>
        
        <main className="page-enter">
          <Outlet />
        </main>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
