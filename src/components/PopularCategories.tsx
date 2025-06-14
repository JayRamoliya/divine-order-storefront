
const DATA = [
  {
    name: "Rudraksha",
    desc: "Premium Himalayan beads, single & multi mukhi.",
    img: "https://img.icons8.com/color/96/rudraksha-mala.png",
    to: "/shop?category=rudraksha",
  },
  {
    name: "Pooja Kits",
    desc: "All-in-one kits for daily & festival needs.",
    img: "https://img.icons8.com/color/96/aarti-thali.png",
    to: "/shop?category=kits",
  },
  {
    name: "Samagri",
    desc: "Pure, Vedic, and temple-procured ingredients.",
    img: "https://img.icons8.com/color/96/incense.png",
    to: "/shop?category=samagri",
  },
  {
    name: "Mandir",
    desc: "Wooden & marble home temples for every size.",
    img: "https://img.icons8.com/color/96/temple.png",
    to: "/shop?category=mandir",
  },
];

const PopularCategories = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4 text-yellow-700">Popular Categories</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {DATA.map(cat => (
        <a
          key={cat.name}
          href={cat.to}
          className="group bg-white rounded-xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition p-5 flex flex-col items-center text-center"
        >
          <img src={cat.img} alt={cat.name} className="w-16 h-16 mb-2" />
          <div className="font-bold text-xl text-orange-900">{cat.name}</div>
          <div className="text-sm text-gray-600 mt-1">{cat.desc}</div>
        </a>
      ))}
    </div>
  </div>
);

export default PopularCategories;
