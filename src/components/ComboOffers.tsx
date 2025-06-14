
const OFFERS = [
  {
    name: "Ganesh Chaturthi Special",
    included: "Rudraksha, Samagri, Mini Mandir",
    img: "https://img.icons8.com/color/96/ganesh.png",
    discount: 18,
  },
  {
    name: "Daily Pooja Essentials",
    included: "Rudraksha, Samagri, Copper Diya",
    img: "https://img.icons8.com/color/96/diya-lamp.png",
    discount: 15,
  },
  {
    name: "Vastu Protection Pack",
    included: "Panchmukhi Rudraksha, Gomati Chakra, Samagri",
    img: "https://img.icons8.com/color/96/energy.png",
    discount: 12,
  },
];

const ComboOffers = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4 text-orange-700">Combo Offers</h3>
    <div className="flex gap-6 overflow-x-auto pb-2">
      {OFFERS.map((offer, i) => (
        <div
          key={offer.name}
          className="relative min-w-[260px] bg-white rounded-lg border border-yellow-100 shadow-lg flex flex-col items-center p-4 hover:border-orange-300 transition"
          style={{ marginLeft: i === 0 ? "8px" : 0, marginRight: i === OFFERS.length - 1 ? "8px" : 0 }}
        >
          <img src={offer.img} alt={offer.name} className="w-16 h-16 mb-2" />
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 rounded-full shadow">
            -{offer.discount}%
          </span>
          <div className="font-bold text-lg mt-2 text-orange-900 mb-1">{offer.name}</div>
          <div className="text-sm text-gray-600 mb-2">{offer.included}</div>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full px-5 py-2 shadow transition">
            Order on WhatsApp
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ComboOffers;
