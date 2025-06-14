
import { Link } from "react-router-dom";

const Header = () => (
  <header className="sticky top-0 z-30 bg-white/95 shadow border-b flex items-center justify-between px-8 h-20">
    <div className="flex items-center gap-4">
      <img src="https://img.icons8.com/color/52/om.png" alt="Om" width={40} height={40} />
      <h1 className="text-xl font-extrabold text-yellow-700 tracking-tight">
        Divine Store
      </h1>
    </div>
    <nav className="hidden md:flex gap-7 text-base font-medium text-gray-700">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/blog">Learn</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <div className="hidden md:block">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white rounded-full py-2 px-6 font-bold shadow transition"
      >
        WhatsApp Order
      </a>
    </div>
  </header>
);

export default Header;
