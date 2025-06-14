import { Link, useLocation } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import React from "react";

// MobileNav: Hidden by default, slides in when open, overlays content
function MobileNav({
  open,
  onOpenChange,
  currentPath,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPath: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed left-0 right-0 top-0 z-50 bg-background border-b rounded-b-xl shadow p-4 pt-8 flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://img.icons8.com/color/52/om.png" alt="Om" width={36} height={36} className="w-8 h-8" />
            <h1 className="text-lg font-extrabold text-primary tracking-tight">Divine Store</h1>
          </div>
          <nav className="flex flex-col gap-2 text-lg">
            <Link to="/" className={currentPath === "/" ? "font-bold text-primary" : ""} onClick={() => onOpenChange(false)}>
              Home
            </Link>
            <Link to="/shop" className={currentPath === "/shop" ? "font-bold text-primary" : ""} onClick={() => onOpenChange(false)}>
              Shop
            </Link>
            <Link to="/blog" className={currentPath === "/blog" ? "font-bold text-primary" : ""} onClick={() => onOpenChange(false)}>
              Learn
            </Link>
            <Link to="/about" className={currentPath === "/about" ? "font-bold text-primary" : ""} onClick={() => onOpenChange(false)}>
              About
            </Link>
            <Link to="/contact" className={currentPath === "/contact" ? "font-bold text-primary" : ""} onClick={() => onOpenChange(false)}>
              Contact
            </Link>
          </nav>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-ctaGold via-yellow-400 to-ctaGold.end text-ctaGold.text font-bold rounded-full py-2 px-4 text-center shadow-md"
            onClick={() => onOpenChange(false)}
            style={{
              background: `linear-gradient(45deg, #FFD700, #FFC300)`,
              color: "#861919"
            }}
          >
            WhatsApp Order
          </a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 bg-background/95 shadow border-b flex items-center justify-between px-2 md:px-8 h-16 md:h-20">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Om logo added here for desktop header */}
        <img src="https://img.icons8.com/color/52/om.png" alt="Om" width={38} height={38} className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-2xl hidden md:inline-block" style={{marginRight:"4px"}} role="img" aria-label="Om">&#x1F549;️</span>
        <h1 className="text-lg md:text-xl font-extrabold text-primary tracking-tight">
          Divine Store
        </h1>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 md:gap-7 text-base font-medium text-foreground">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Learn</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* CTA + dark mode toggle desktop */}
      <div className="hidden md:flex items-center space-x-2">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-ctaGold via-yellow-400 to-ctaGold.end text-ctaGold.text font-bold rounded-full py-2 px-4 md:px-6 shadow transition"
          style={{
            background: `linear-gradient(45deg, #FFD700, #FFC300)`,
            color: "#861919"
          }}
        >
          WhatsApp Order
        </a>
      </div>
      {/* Mobile Hamburger + Drawer */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open mobile menu"
          className="rounded-full p-2 hover:bg-primary/10 border border-transparent hover:border-primary transition"
        >
          <Menu className="w-7 h-7 text-primary" />
        </button>
        <MobileNav open={menuOpen} onOpenChange={setMenuOpen} currentPath={location.pathname} />
      </div>
    </header>
  );
};

export default Header;
