import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#004680] mb-6">
            MEDOCS Health Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Bringing Hospital Care Home with Comfort & Compassion.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#004680] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Explore Services
            </button>
            <button className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition">
              Contact Us
            </button>
          </div>
        </motion.div>
        
        {/* Background Subtle Shape */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-full blur-3xl" />
      </section>

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Specialized Care</h2>
          <div className="h-1 w-20 bg-[#00a0e3] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card Example */}
          <ServiceCard 
            title="Ground Ambulance" 
            img="https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800"
            desc="Swift, 24/7 emergency medical transportation with expert paramedics."
          />
          <ServiceCard 
            title="Doctor Home Visits" 
            img="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&w=800"
            desc="Professional medical consultation in the comfort of your own bed."
          />
          <ServiceCard 
            title="Nurse Home Visits" 
            img="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800"
            desc="Dedicated nursing care, wound dressing, and medication management."
          />
        </div>
      </section>
    </main>
  );
}

// 🧩 Reusable Card Component
function ServiceCard({ title, img, desc }: { title: string, img: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{desc}</p>
        <button className="text-[#00a0e3] font-semibold hover:underline">Learn More →</button>
      </div>
    </motion.div>
  );
}
