
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  // 🔁 CHANGE THIS: Update with real contact info
  const hotline = "076 440 0400";
  const whatsappLink = "https://wa.me/94764400400";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            {/* 🔁 CHANGE THIS: Replace with actual MEDOCS logo image path */}
            <div className="w-10 h-10 bg-medocs-teal rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-bold text-medocs-blue tracking-tight">MEDOCS</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-medocs-teal transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-medocs-teal transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-medocs-teal transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-medocs-teal transition-colors">Contact</Link>
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${hotline}`} className="flex items-center gap-2 text-medocs-blue font-medium hover:opacity-80 transition-opacity">
              <Phone size={18} /> {hotline}
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#1ebd5a] transition-colors shadow-sm">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
