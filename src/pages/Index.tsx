
import HeroBanner from "../components/HeroBanner";
import PopularCategories from "../components/PopularCategories";
import ComboOffers from "../components/ComboOffers";
import PanditCarousel from "../components/PanditCarousel";
import WhatsappCTA from "../components/WhatsappCTA";
import ReviewsTestimonials from "../components/ReviewsTestimonials";
import DeliveryInfo from "../components/DeliveryInfo";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Top Navigation */}
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
          <Link to="/combos">Combo Deals</Link>
          <Link to="/blog">Learn</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <WhatsappCTA small />
        </div>
      </header>

      {/* For mobile nav */}
      <nav className="flex md:hidden justify-center gap-2 py-2 bg-white shadow border-b">
        {["Home", "Shop", "Combos", "Learn", "About", "Contact"].map((txt, i) => (
          <Link 
            key={txt} 
            to={txt === "Home" ? "/" : txt.toLowerCase()}
            className="text-sm font-medium rounded px-2 py-1 hover:bg-orange-50 text-yellow-700">
            {txt}
          </Link>
        ))}
      </nav>

      {/* Hero Section */}
      <HeroBanner />

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <PopularCategories />
      </section>

      {/* Combo Offers */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <ComboOffers />
      </section>

      {/* Pandit Recommendation Carousel */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <PanditCarousel />
      </section>

      {/* WhatsApp CTA Large */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <WhatsappCTA />
      </section>

      {/* Testimonials/Reviews */}
      <section className="max-w-7xl mx-auto mt-16 px-4">
        <ReviewsTestimonials />
      </section>
      
      {/* Delivery, COD Info, Trust badges */}
      <section className="max-w-4xl mx-auto mt-12 mb-24 px-4">
        <DeliveryInfo />
      </section>
    </div>
  );
};

export default Index;

