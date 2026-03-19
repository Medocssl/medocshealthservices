import { useParams, Link } from "react-router";

const info = {
  ambulance: { title: "Ambulance Services", text: "24/7 Emergency and non-emergency transport." },
  'home-visits': { title: "Home Visits", text: "Qualified doctors visiting you at home." },
  equipment: { title: "Equipment Rental", text: "Hospital beds, oxygen, and medical gear for home use." },
  'air-escorts': { title: "Air Escorts", text: "International medical repatriation and flight nursing." },
  palliative: { title: "Palliative Care", text: "Compassionate care for chronic or terminal conditions." }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = info[serviceId];

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>{service?.title || "Service"}</h1>
      <p style={{ fontSize: '1.2rem' }}>{service?.text}</p>
      <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#004a99' }}>← Back to Home</Link>
    </div>
  );
}
