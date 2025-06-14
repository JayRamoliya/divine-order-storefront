
const HeroBanner = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white shadow-md py-12 md:py-20 flex flex-col items-center justify-center">
    <h2 className="text-3xl md:text-5xl font-black text-yellow-800 mb-4 text-center drop-shadow">
      Order Original Rudraksha, Pooja Kits & Mandirs
    </h2>
    <p className="text-lg md:text-2xl font-medium text-orange-900 text-center mb-7">
      Trusted by <span className="underline decoration-amber-500">10,000+</span> families and Pandits
    </p>
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {[
        ["Rudraksha", "/shop?category=rudraksha", "https://img.icons8.com/color/48/rudraksha-mala.png"],
        ["Pooja Kits", "/shop?category=kits", "https://img.icons8.com/color/48/aarti-thali.png"],
        ["Samagri", "/shop?category=samagri", "https://img.icons8.com/color/48/incense.png"],
        ["Mandir", "/shop?category=mandir", "https://img.icons8.com/color/48/temple.png"],
      ].map(([name, link, img]) => (
        <a
          key={name}
          href={link}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-orange-50 border border-orange-100 group"
        >
          <img src={img as string} alt={name as string} className="w-7 h-7" />
          <span className="font-semibold text-orange-800 group-hover:text-orange-600">{name}</span>
        </a>
      ))}
    </div>
    <img
      src="https://img.icons8.com/clouds/180/hanuman.png"
      alt="Hanuman Idol"
      className="absolute bottom-0 right-8 w-32 md:w-52 animate-bounce opacity-80 pointer-events-none"
      style={{ filter: "drop-shadow(0 2px 24px #fff0)" }}
    />
  </section>
);

export default HeroBanner;
