
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import PopularCategories from "../components/PopularCategories";
import PanditCarousel from "../components/PanditCarousel";
import WhatsappCTA from "../components/WhatsappCTA";
import ReviewsTestimonials from "../components/ReviewsTestimonials";
import DeliveryInfo from "../components/DeliveryInfo";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        {/* About section */}
        <section className="max-w-5xl mx-auto mt-10 md:mt-16 px-3 md:px-4">
          <div className="bg-white/80 rounded-2xl flex flex-col md:flex-row items-center gap-8 p-7 shadow">
            <img
              src="https://img.icons8.com/color/120/lotus.png"
              alt="Divine Store"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-2xl font-extrabold text-yellow-700 mb-2">About Divine Store</h3>
              <p className="text-gray-700 text-base md:text-lg">
                Divine Store is your authentic destination for original Rudraksha, energised Pooja Kits, Mandirs, and pure Samagri—shipped directly to your home, verified by temple priests. We bring timeless tradition to your doorstep with trusted support from expert Pandits and 10,000+ happy families across India.
              </p>
            </div>
          </div>
        </section>
        {/* How it works */}
        <section className="max-w-5xl mx-auto mt-10 md:mt-16 px-3 md:px-4">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-700 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch">
            <div className="flex-1 bg-white rounded-xl p-6 shadow flex flex-col items-center text-center border border-orange-50">
              <img src="https://img.icons8.com/color/96/shopping-bag--v2.png" alt="Step 1" className="w-12 h-12 mb-2" />
              <div className="font-semibold text-orange-900 mb-1">1. Choose Product</div>
              <div className="text-sm text-gray-600">Explore our range & select from Rudraksha, kits and more.</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-6 shadow flex flex-col items-center text-center border border-orange-50">
              <img src="https://img.icons8.com/stickers/96/whatsapp.png" alt="Step 2" className="w-12 h-12 mb-2" />
              <div className="font-semibold text-orange-900 mb-1">2. Order on WhatsApp</div>
              <div className="text-sm text-gray-600">Connect on WhatsApp for 1-on-1 guidance & fast checkout.</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-6 shadow flex flex-col items-center text-center border border-orange-50">
              <img src="https://img.icons8.com/color/96/delivery--v1.png" alt="Step 3" className="w-12 h-12 mb-2" />
              <div className="font-semibold text-orange-900 mb-1">3. Safe Home Delivery</div>
              <div className="text-sm text-gray-600">Get genuine, energised products shipped quickly to your door.</div>
            </div>
          </div>
        </section>
        {/* Popular Categories */}
        <section className="max-w-7xl mx-auto mt-10 md:mt-14 px-2 md:px-4">
          <PopularCategories />
        </section>
        {/* Pandit Carousel - now with improved responsiveness */}
        <section className="max-w-7xl mx-auto mt-10 md:mt-14 px-2 md:px-4">
          <PanditCarousel />
        </section>
        <section className="max-w-7xl mx-auto mt-10 md:mt-12 px-2 md:px-4">
          <WhatsappCTA />
        </section>
        <section className="max-w-7xl mx-auto mt-12 md:mt-16 px-2 md:px-4">
          <ReviewsTestimonials />
        </section>
        <section className="max-w-4xl mx-auto mt-10 md:mt-12 mb-16 md:mb-24 px-2 md:px-4">
          <DeliveryInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
