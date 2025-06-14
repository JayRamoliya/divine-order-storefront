
import { FaWhatsapp } from "react-icons/fa";
const WhatsappCTA = ({ small = false }: { small?: boolean }) => (
  <div className={`flex justify-center w-full ${small ? "" : "mt-3"}`}>
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
  </div>
);

export default WhatsappCTA;
