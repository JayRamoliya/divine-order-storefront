
import React from "react";

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
  <div className="py-12 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-yellow-700 mb-4">About Us</h2>
    {/* Mission */}
    <section className="mb-7">
      <div className="text-lg font-semibold text-orange-700 mb-1">Mission:</div>
      <div className="italic text-xl text-orange-900">
        "Spiritual purity to every home"
      </div>
    </section>

    {/* Meet the Pandits / Founders */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">Meet the Pandits / Founders</h3>
      <div className="flex flex-col sm:flex-row gap-5">
        {PANDITS.map((p) => (
          <div
            key={p.name}
            className="flex-1 bg-white border border-orange-100 rounded-xl px-5 py-4 flex flex-col items-center text-center shadow-sm"
          >
            <img src={p.photo} alt={p.name} className="w-16 h-16 rounded-full mb-2 border border-yellow-300" />
            <div className="font-bold text-orange-900">{p.name}</div>
            <div className="text-xs text-orange-700 mb-1">{p.title}, {p.city}</div>
            <div className="text-sm text-gray-600">{p.bio}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Our Products are 100% Genuine */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">Why Our Products are 100% Genuine</h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 text-base">
        <li>Direct sourcing from trusted, traditional suppliers and temples.</li>
        <li>All items are verified for authenticity before sale.</li>
        <li>Each energized kit is blessed by our partner Pandits with Vedic rituals.</li>
        <li>Transparent process: what you see is exactly what you receive.</li>
        <li>No artificial coloring or misleading claims—100% spiritual purity.</li>
      </ul>
    </section>

    {/* Temple Partnerships */}
    <section className="mb-12">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">Temple Partnerships</h3>
      <div className="rounded-xl border border-dashed border-orange-200 p-5 text-center text-gray-500">
        {/* Replace this with actual temple partners/logos when available */}
        Trusted temples and spiritual trusts partner with us to energize select products. 
        <br />
        <span className="text-xs text-orange-400">[Temple partnership details coming soon...]</span>
      </div>
    </section>
  </div>
);

export default About;

