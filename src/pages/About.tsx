import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PANDITS = [
  {
    name: "Pandit R.K. Sharma",
    title: "Spiritual Advisor",
    city: "Varanasi",
    photo: "https://img.icons8.com/color/96/hindu-priest.png",
    bio: "Over 30 years guiding families in Vedic rituals. Trusted advisor for temple purchases."
  },
  {
    name: "Nidhi Mishra",
    title: "Pooja Consultant",
    city: "Haridwar",
    photo: "https://img.icons8.com/color/96/sari.png",
    bio: "Expert in home Pooja setup and energizing products using traditional rituals."
  },
  {
    name: "Om Prakash",
    title: "Product Quality Lead",
    city: "Nashik",
    photo: "https://img.icons8.com/color/96/yogi.png",
    bio: "Ensures every product meets the highest standards for spiritual use."
  },
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 w-full">
      <div className="py-8 md:py-12 max-w-4xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">About Us</h2>
        <section className="mb-5 md:mb-7">
          <div className="text-base md:text-lg font-semibold text-secondary mb-1">Mission:</div>
          <div className="italic text-lg md:text-xl text-accent">"Spiritual purity to every home"</div>
        </section>
        {/* <section className="mb-7 md:mb-10">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-3">Meet the Pandits / Founders</h3>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            {PANDITS.map((p) => (
              <div
                key={p.name}
                className="flex-1 bg-card border border-primary/20 rounded-xl px-4 md:px-5 py-3 md:py-4 flex flex-col items-center text-center shadow-sm"
              >
                <img src={p.photo} alt={p.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-2 border border-yellow-300" />
                <div className="font-bold text-accent">{p.name}</div>
                <div className="text-xs text-secondary mb-1">{p.title}, {p.city}</div>
                <div className="text-sm text-muted-foreground">{p.bio}</div>
              </div>
            ))}
          </div>
        </section> */}
        <section className="mb-7 md:mb-10">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-3">Why Our Products are 100% Genuine</h3>
          <ul className="list-disc ml-5 md:ml-6 space-y-2 text-muted-foreground text-base">
            <li>Direct sourcing from trusted, traditional suppliers and temples.</li>
            <li>All items are verified for authenticity before sale.</li>
            <li>Each energized kit is blessed by our partner Pandits with Vedic rituals.</li>
            <li>Transparent process: what you see is exactly what you receive.</li>
            <li>No artificial coloring or misleading claims—100% spiritual purity.</li>
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
