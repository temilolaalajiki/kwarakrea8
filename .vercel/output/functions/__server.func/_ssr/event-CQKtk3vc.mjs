const EVENT = {
  name: "Kwara Kre8ives 2.0",
  tagline: "Empowering 2,000 Creatives for the Future",
  dateISO: "2026-06-30T09:00:00+01:00",
  dateLabel: "30th June, 2026",
  arrivalTime: "9:00 AM",
  venue: {
    name: "Ilorin Innovation Hub",
    address: "9a Ahmadu Bello Way, GRA, Ilorin, Nigeria",
    mapsEmbed: "https://www.google.com/maps?q=Ilorin+Innovation+Hub,+9a+Ahmadu+Bello+Way,+GRA,+Ilorin,+Nigeria&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ilorin+Innovation+Hub,+9a+Ahmadu+Bello+Way,+GRA,+Ilorin,+Nigeria"
  },
  contact: {
    phone: "0705 846 3821",
    instagram: "Kwara_Kre8ives",
    facebook: "Kwara Kre8ives"
  }
};
const CLASSES = [
  { name: "Photography", icon: "Camera", desc: "Master composition, lighting, and visual storytelling." },
  { name: "Videography", icon: "Video", desc: "Shoot and edit cinematic video for brands and creators." },
  { name: "Content Creation", icon: "Sparkles", desc: "Build a creator brand audiences come back for." },
  { name: "Branding & Digital Marketing", icon: "Megaphone", desc: "Position brands and grow them with paid + organic." },
  { name: "Social Media Management", icon: "Hash", desc: "Strategy, calendars, analytics, and growth playbooks." }
];
const CLASS_NAMES = CLASSES.map((c) => c.name);
const AGE_RANGES = ["13–17", "18–24", "25–34", "35+"];
const BATCH_CAPACITY = 50;
export {
  AGE_RANGES as A,
  BATCH_CAPACITY as B,
  CLASS_NAMES as C,
  EVENT as E,
  CLASSES as a
};
