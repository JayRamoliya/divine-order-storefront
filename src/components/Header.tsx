import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => (
  <header className="sticky top-0 z-30 bg-background/95 shadow border-b flex items-center justify-between px-2 md:px-8 h-16 md:h-20">
    <div className="flex items-center gap-3 md:gap-4">
      <img src="https://img.icons8.com/color/52/om.png" alt="Om" width={38} height={38} className="w-8 h-8 md:w-10 md:h-10" />
      <h1 className="text-lg md:text-xl font-extrabold text-primary tracking-tight">
        Divine Store
      </h1>
    </div>
    <nav className="hidden md:flex gap-4 md:gap-7 text-base font-medium text-foreground">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/blog">Learn</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <div className="flex items-center">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary hover:bg-secondary/80 text-white rounded-full py-2 px-4 md:px-6 font-bold shadow transition"
      >
        WhatsApp Order
      </a>
      <DarkModeToggle />
    </div>
  </header>
);

export default Header;
