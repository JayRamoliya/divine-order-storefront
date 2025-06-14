
const REVIEWS = [
  {
    name: "R. Sharma (Delhi)",
    text: "Received original Rudraksha and all items were neatly packed. Delivery was super fast. Thank you!",
  },
  {
    name: "Pooja S. (Bangalore)",
    text: "The Mandir kit was energised as promised. The WhatsApp ordering was very easy.",
  },
  {
    name: "Omkar T. (Kolkata)",
    text: "Prompt support, temple-prasad quality samagri, and authentic products.",
  },
];

const ReviewsTestimonials = () => (
  <div>
    <h3 className="text-2xl font-bold mb-5 text-yellow-700">What Customers Say</h3>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {REVIEWS.map((r, i) => (
        <div
          key={i}
          className="bg-white border border-yellow-100 shadow-md rounded-xl px-7 py-6 flex flex-col items-center text-center max-w-xs mx-auto"
        >
          <span className="text-2xl font-black text-yellow-500 mb-2">⭐️⭐️⭐️⭐️⭐️</span>
          <p className="text-gray-800 text-base mb-2">"{r.text}"</p>
          <div className="mt-2 font-medium text-yellow-800">{r.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewsTestimonials;
