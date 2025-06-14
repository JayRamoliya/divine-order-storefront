import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const categories = [
  {
    name: "Rudraksha",
    link: "/shop?category=rudraksha",
    img: "/Rudraksha logo.png",
  },
  {
    name: "Pooja Kits",
    link: "/shop?category=kits",
    img: "aarti-thali.png",
  },
  {
    name: "Samagri",
    link: "/shop?category=samagri",
    img: "https://img.icons8.com/color/48/incense.png",
  },
  {
    name: "Mandir",
    link: "/shop?category=mandir",
    img: "https://img.icons8.com/color/48/temple.png",
  },
];

const HeroBanner = () => (
  <section
    className="relative overflow-hidden py-14 md:py-24 flex flex-col items-center justify-center z-10
      bg-gradient-to-br from-[#19193c] via-[#3f0771] to-[#0d001a]"
    style={{
      // fallback for browsers not supporting tailwind, provides rich dark colors
      background:
        "radial-gradient(circle at 55% 100%, #8733fd 0%, #19193c 55%, #160d2c 100%)",
      minHeight: "500px",
    }}
  >
    {/* Glowing background visual (shimmer/shadow) */}
    <div
      className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[650px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(ellipse at center, #d58fff 10%, #7037ff12 65%, transparent 100%)",
      }}
    ></div>

    {/* Headline + Glow effect */}
    <h2
      className="relative z-20 text-[2.1rem] md:text-5xl font-extrabold text-transparent bg-clip-text
        bg-gradient-to-r from-[#fad961] via-[#ff61e2] to-[#43c6ac] drop-shadow-[0_3px_30px_#6207efaa]
        text-center mb-5 animate-[fade-in_0.8s_ease-out]"
    >
      Order Original Rudraksha, Pooja Kits & Mandirs
      <span className="block mt-2 text-lg md:text-2xl font-thin text-[#b3a8fd] bg-none">
        <span className="bg-gradient-to-r from-[#ffee80] via-[#ff90ec] to-[#7bffe2] text-transparent bg-clip-text animate-[pulse_2.5s_infinite]">
          Spiritual Power, Fast Home Delivery
        </span>
      </span>
    </h2>
    {/* Tagline */}
    <p className="text-lg md:text-2xl font-semibold text-[#fff8cc] text-center mb-8 animate-[fade-in_1.2s_ease-in] drop-shadow-lg">
      Trusted by{" "}
      <span className="text-[#f6ab4b] font-extrabold underline underline-offset-2 decoration-[#f6ab4b]">
        10,000+
      </span>{" "}
      families and Pandits
    </p>
    {/* Category Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-8 z-20 animate-[fade-in_1.3s_ease-in]">
      {categories.map(({ name, link, img }) => (
        <a
          key={name}
          href={link}
          className="flex items-center gap-2 px-5 py-3 rounded-xl
            bg-white/10 hover:bg-white/20 border border-white/20
            backdrop-blur-[2px] shadow-lg font-semibold text-base text-[#fcdeff]
            hover:text-[#ffee80] transition-all duration-150
            hover-scale relative overflow-hidden min-w-[146px]"
        >
          <img src={img} alt={name} className="w-7 h-7 drop-shadow-glow" />
          <span>{name}</span>
        </a>
      ))}
    </div>
    {/* WhatsApp CTA */}
    <a
      href="https://wa.me/916353716421?text=Hello%2C%20I%20want%20to%20order..."
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg md:text-xl
    bg-gradient-to-r from-[#fad961] via-[#ff61e2] to-[#43c6ac]
    text-[#440060] shadow-2xl border-0 transition hover:scale-105 hover:from-[#fae57c]
    animate-[fade-in_1.6s_ease-in]"
      style={{
        boxShadow: "0 6px 38px #a015fd55",
        letterSpacing: "0.03em",
      }}
    >
      <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
      Order via WhatsApp{" "}
      <span className="hidden md:inline">&nbsp;in Your Language</span>
    </a>
  </section>
);

export default HeroBanner;
