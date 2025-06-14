
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
  <section className="relative py-10 md:py-14 bg-gradient-to-b from-yellow-50/80 to-orange-50/30 rounded-3xl shadow-inner">
    <h3 className="text-2xl md:text-3xl font-black mb-10 text-yellow-700 text-center tracking-tight flex items-center justify-center gap-2">
      <img src="https://img.icons8.com/color/48/om.png" alt="Om" className="w-8 h-8" />
      Pandit Recommendations
    </h3>
    <div className="flex flex-col sm:flex-row gap-7 md:gap-10 justify-center items-stretch max-w-5xl mx-auto w-full sm:flex-wrap">
      {PANDITS.map((p, i) => (
        <div
          key={i}
          className="flex-1 min-w-[220px] max-w-xs mx-auto bg-white border-2 border-yellow-100 shadow-lg rounded-2xl px-7 py-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative"
        >
          <div className="border-4 border-yellow-200 group-hover:border-orange-200 bg-gradient-to-t from-yellow-100 to-orange-50 rounded-full p-1 mb-4 shadow-md transition">
            <img
              src={p.photo}
              alt={p.name}
              className="w-20 h-20 rounded-full border-4 border-orange-100 object-cover transition"
              loading="lazy"
            />
          </div>
          <div className="font-bold text-lg text-orange-800 mb-0.5">{p.name}</div>
          <span className="text-xs font-medium text-orange-600 mb-2 tracking-wide">{p.city}</span>
          <p className="text-sm italic text-gray-700 px-2 mb-2 mt-1 leading-relaxed">
            "{p.quote}"
          </p>
          <span className="absolute right-7 top-7 text-xl opacity-15 text-yellow-400 pointer-events-none select-none">“</span>
        </div>
      ))}
    </div>
    {/* Button below recommendations */}
    <div className="flex justify-center mt-10">
      <Button
        asChild
        className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-200 text-accent font-bold shadow-lg px-8 py-3 rounded-full text-lg md:text-xl hover:from-yellow-500 hover:to-yellow-300 transition-all border border-yellow-300"
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
  </section>
);

export default PanditCarousel;
