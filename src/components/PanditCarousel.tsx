
import { Button } from "./ui/button";

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
    <h3 className="text-2xl font-bold mb-5 text-yellow-700 text-center">
      Pandit Recommendations
    </h3>
    <div className="flex gap-6 overflow-x-auto pb-2 md:gap-8 md:overflow-x-visible md:flex-wrap justify-center max-w-5xl mx-auto">
      {PANDITS.map((p, i) => (
        <div
          key={i}
          className="min-w-[220px] w-full max-w-xs bg-white border border-orange-100 shadow-md rounded-xl px-5 py-6 flex flex-col items-center text-center hover:shadow-xl transition md:w-[260px] md:min-w-[240px] mx-auto"
        >
          <img
            src={p.photo}
            alt={p.name}
            className="w-16 h-16 rounded-full mb-2 border border-yellow-300 object-cover"
          />
          <div className="font-bold text-base text-orange-800 mb-1">{p.name}</div>
          <span className="text-xs text-orange-600 mb-2">{p.city}</span>
          <p className="text-sm italic text-gray-700 mb-2">"{p.quote}"</p>
        </div>
      ))}
    </div>
    {/* Button below recommendations */}
    <div className="flex justify-center mt-7">
      <Button
        asChild
        className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-200 text-accent font-bold shadow-lg px-7 py-3 rounded-full text-lg hover:from-yellow-500 hover:to-yellow-300 transition-all"
        size="lg"
      >
        <a
          href="https://wa.me/919999999999?text=I%20want%20to%20book%20a%20pandit%20from%20Divine%20Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with a Pandit
        </a>
      </Button>
    </div>
  </div>
);

export default PanditCarousel;
