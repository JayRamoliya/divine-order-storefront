
import React from "react";

const categories = [
  {
    name: "Rudraksha",
    link: "/shop?category=rudraksha",
    img: "https://img.icons8.com/color/48/rudraksha-mala.png",
  },
  {
    name: "Pooja Kits",
    link: "/shop?category=kits",
    img: "https://img.icons8.com/color/48/aarti-thali.png",
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
    <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[650px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-40"
         style={{ background: "radial-gradient(ellipse at center, #d58fff 10%, #7037ff12 65%, transparent 100%)" }}></div>
    
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
      Trusted by <span className="text-[#f6ab4b] font-extrabold underline underline-offset-2 decoration-[#f6ab4b]">10,000+</span> families and Pandits
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
      href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20order..."
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
      <svg className="w-8 h-8" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#25d366" />
        <path fill="#fff" d="M31 30.063A13.09 13.09 0 1 0 9.205 16.493L7 33l17.031-2.143A12.921 12.921 0 0 0 31 30.063Zm-11-1.6a11.09 11.09 0 1 1 0-22.18 11.09 11.09 0 0 1 0 22.18ZM15.583 13.502a1.175 1.175 0 0 0-.93-.55c-.234 0-.465.074-.67.215-.8.54-1.78 1.263-1.53 2.78.315 1.942 2.53 5.252 5.55 7.042.32.194.773.236 1.18.133.52-.134.8-.55 1.12-.97l.09-.126c.123-.17.254-.35.41-.449.18-.11.273-.085.386-.06.434.1 2.102.888 2.468 1.012.083.027.163.04.24.04.148 0 .288-.055.42-.164.25-.217.594-.487.368-.947-.2-.398-1.092-1.267-1.224-1.396s-.238-.184-.379-.136c-.127.042-.215.21-.305.297-.088.086-.157.155-.274.132-.657-.14-1.732-.609-3.143-2.154-.964-1.049-1.314-1.85-1.114-2.268.052-.11.168-.17.287-.19.842-.134 1.29-.805 1.267-1.19-.015-.234-.106-.394-.37-.605Z"/>
      </svg>
      Order via WhatsApp <span className="hidden md:inline">&nbsp;in Your Language</span>
    </a>
    {/* Hero Illustration (glowing idol) */}
    <img
      src="https://img.icons8.com/clouds/180/hanuman.png"
      alt="Hanuman Idol"
      className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 w-32 md:w-60 animate-bounce opacity-80 z-0 pointer-events-none select-none"
      style={{
        filter: "drop-shadow(0 10px 60px #fae57cb8) drop-shadow(0 1px 16px #a84ffd88)",
      }}
      draggable={false}
    />
  </section>
);

export default HeroBanner;
