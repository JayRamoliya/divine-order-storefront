
const PANDITS = [
  {
    name: "Pandit R.K. Sharma",
    city: "Varanasi",
    photo: "https://img.icons8.com/color/96/hindu-priest.png",
    quote: "I recommend Divine Store for 100% original Rudraksha and fast Pooja delivery to my clients.",
  },
  {
    name: "Pandit Nidhi Mishra",
    city: "Haridwar",
    photo: "https://img.icons8.com/color/96/sari.png",
    quote: "The Mandirs and Kits here are energised by traditional vidhi. My devotees trust it for home setup.",
  },
  {
    name: "Pandit Om Prakash",
    city: "Nashik",
    photo: "https://img.icons8.com/color/96/yogi.png",
    quote: "Divine Store delivers what they promise — pure Samagri and prompt support.",
  },
];

const PanditCarousel = () => (
  <div>
    <h3 className="text-2xl font-bold mb-5 text-yellow-700 text-center">Pandit Recommendations</h3>
    <div className="flex flex-row gap-8 justify-center max-w-4xl mx-auto">
      {PANDITS.map((p, i) => (
        <div
          key={i}
          className="bg-white border border-orange-100 shadow-md rounded-xl px-7 py-6 flex flex-col items-center text-center min-w-[220px] hover:shadow-xl transition"
        >
          <img src={p.photo} alt={p.name} className="w-16 h-16 rounded-full mb-2 border border-yellow-300" />
          <div className="font-bold text-base text-orange-800 mb-1">{p.name}</div>
          <span className="text-xs text-orange-600 mb-2">{p.city}</span>
          <p className="text-sm italic text-gray-700 mb-2">"{p.quote}"</p>
        </div>
      ))}
    </div>
  </div>
);

export default PanditCarousel;
