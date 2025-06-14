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
        <section className="max-w-7xl mx-auto mt-6 md:mt-8 px-2 md:px-4">
          <PopularCategories />
        </section>
        {/* ComboOffers section removed */}
        <section className="max-w-7xl mx-auto mt-10 md:mt-12 px-2 md:px-4">
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
