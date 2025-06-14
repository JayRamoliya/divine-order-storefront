// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Star, Video, Check } from "lucide-react";
// import PRODUCTS from '../products.js'; // Adjust path as per your project structure


// const REVIEWS = [
//   {
//     name: "R. Sharma",
//     city: "Delhi",
//     text: "The Rudraksha was original and already energized. Helped me meditate longer. Thank you!",
//     stars: 5,
//   },
//   {
//     name: "Pooja S.",
//     city: "Bangalore",
//     text: "Lovely product, fast delivery. I could feel peaceful energy from day one.",
//     stars: 5,
//   },
// ];

// const WhatsappNumber = "916353716421";

// const ProductDetail = () => {
//   const discountedPrice = Math.round(PRODUCT.price * (1 - PRODUCT.discount / 100));

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="py-10 max-w-4xl mx-auto px-4 flex-1 w-full">
//         {/* Product Top Section */}
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/2 flex-shrink-0 relative">
//             <img
//               src={PRODUCT.image}
//               alt={PRODUCT.name}
//               className="rounded-2xl border object-cover w-full h-64 md:h-80 shadow-md"
//               loading="lazy"
//             />
//             {PRODUCT.energized && (
//               <Badge className="absolute left-4 top-4 bg-green-600 text-white font-bold px-3 py-1 shadow">
//                 ✅ Temple Energized
//               </Badge>
//             )}
//           </div>
//           <div className="md:w-1/2 flex flex-col gap-5">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">{PRODUCT.name}</h2>
//               <div className="flex gap-2 items-center mb-2">
//                 <span className="font-bold text-xl text-green-700">
//                   ₹{discountedPrice}
//                 </span>
//                 {PRODUCT.discount > 0 && (
//                   <>
//                     <span className="line-through text-gray-400 text-base">
//                       ₹{PRODUCT.price}
//                     </span>
//                     <Badge className="bg-yellow-500 text-white text-xs px-2">
//                       -{PRODUCT.discount}%
//                     </Badge>
//                   </>
//                 )}
//               </div>
//               <div className="text-gray-600 text-base mb-2">{PRODUCT.desc}</div>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {PRODUCT.energized && (
//                 <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
//                   <Check size={16} /> Temple Energized
//                 </Badge>
//               )}
//               <Badge className="bg-orange-100 text-orange-800 text-xs">Medium Size</Badge>
//               <Badge className="bg-amber-100 text-yellow-700 text-xs">Free Shipping</Badge>
//             </div>

//             {/* Uses */}
//             <div>
//               <div className="font-semibold mb-2 text-orange-900">Uses:</div>
//               <ul className="flex flex-wrap gap-2">
//                 {PRODUCT.uses.map((use) => (
//                   <li key={use}>
//                     <Badge className="bg-orange-50 text-orange-900 border">{use}</Badge>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* WhatsApp Order */}
//             <div className="flex gap-3 mt-4">
//               <a
//                 href={`https://wa.me/${WhatsappNumber}?text=${encodeURIComponent(
//                   `Hello, I want to order: ${PRODUCT.name}\n- Quantity: 1\n- Name:\n- Address:\n- Pincode:\n- Delivery Date (if any):\n- Gift Wrap? [Yes/No]\n- Payment Method: COD / UPI / Paytm`
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1"
//               >
//                 <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold flex gap-2 items-center text-base py-3 text-center">
//                   Order on WhatsApp
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Description, Benefits */}
//         <div className="mt-10 grid md:grid-cols-2 gap-8">
//           {/* Spiritual Benefits */}
//           <div>
//             <h3 className="text-lg font-bold text-yellow-700 mb-2">Spiritual Benefits</h3>
//             <ul className="space-y-2">
//               {PRODUCT.benefits.map((b, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <Check className="mt-1 text-green-600" size={18} /> <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* How to Use */}
//           <div>
//             <Accordion type="single" collapsible>
//               <AccordionItem value="how-to-use">
//                 <AccordionTrigger className="font-bold text-orange-700 flex gap-2 items-center">
//                   <Video className="mr-1" size={20} />
//                   How to Use / Energize Guide
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <ol className="list-decimal ml-5 space-y-2 text-gray-700">
//                     <li>Hold the Rudraksha in your right palm, close your eyes, and chant "Om Namah Shivaya" 108 times.</li>
//                     <li>Rinse with pure water, then place in your puja area.</li>
//                     <li>Light a diya (lamp), offer flowers and incense, and pray for your intention.</li>
//                     <li>Wear as pendant or keep in altar for best results.</li>
//                   </ol>
//                   <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
//                     <Video size={18} /> <span>Video guide coming soon...</span>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-12">
//           <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-1">
//             <Star className="text-yellow-500" size={22} />
//             Customer Reviews
//           </h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {REVIEWS.map((rev, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-yellow-100 rounded-xl px-5 py-4 flex flex-col shadow-sm"
//               >
//                 <div className="flex items-center gap-2 mb-2 text-yellow-500">
//                   {Array.from({ length: rev.stars }).map((_, idx) => (
//                     <Star
//                       key={idx}
//                       size={18}
//                       className="inline"
//                       fill="#FACC15"
//                       color="#FACC15"
//                     />
//                   ))}
//                   <span className="text-sm text-yellow-800 font-bold ml-2">
//                     {rev.name} ({rev.city})
//                   </span>
//                 </div>
//                 <div className="text-gray-700 text-base">{rev.text}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetail;



import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Video, Check } from "lucide-react";
import PRODUCTS from "../products.js";

const REVIEWS = [
  {
    name: "R. Sharma",
    city: "Delhi",
    text: "The Rudraksha was original and already energized. Helped me meditate longer. Thank you!",
    stars: 5,
  },
  {
    name: "Pooja S.",
    city: "Bangalore",
    text: "Lovely product, fast delivery. I could feel peaceful energy from day one.",
    stars: 5,
  },
];

const WhatsappNumber = "916353716421";

const ProductDetail = () => {
  
  const { id } = useParams(); // 👈 Get product ID from URL
  const PRODUCT = PRODUCTS.find((p) => p.id === id); // 👈 Find product by ID

  if (!PRODUCT) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <Header />
        <div className="flex-1 py-20">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you’re looking for doesn’t exist or was removed.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const discountedPrice = Math.round(PRODUCT.price * (1 - PRODUCT.discount / 100));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="py-10 max-w-4xl mx-auto px-4 flex-1 w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <img
              src={PRODUCT.image}
              alt={PRODUCT.name}
              className="rounded-2xl border object-cover w-full h-64 md:h-80 shadow-md"
              loading="lazy"
            />
            {PRODUCT.energized && (
              <Badge className="absolute left-4 top-4 bg-green-600 text-white font-bold px-3 py-1 shadow">
                ✅ Temple Energized
              </Badge>
            )}
          </div>

          <div className="md:w-1/2 flex flex-col gap-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">{PRODUCT.name}</h2>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-bold text-xl text-green-700">₹{discountedPrice}</span>
                {PRODUCT.discount > 0 && (
                  <>
                    <span className="line-through text-gray-400 text-base">₹{PRODUCT.price}</span>
                    <Badge className="bg-yellow-500 text-white text-xs px-2">-{PRODUCT.discount}%</Badge>
                  </>
                )}
              </div>
              <div className="text-gray-600 text-base mb-2">{PRODUCT.desc}</div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {PRODUCT.energized && (
                <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
                  <Check size={16} /> Temple Energized
                </Badge>
              )}
              <Badge className="bg-orange-100 text-orange-800 text-xs">Medium Size</Badge>
              <Badge className="bg-amber-100 text-yellow-700 text-xs">Free Shipping</Badge>
            </div>

            <div>
              <div className="font-semibold mb-2 text-orange-900">Uses:</div>
              <ul className="flex flex-wrap gap-2">
                {PRODUCT.uses.map((use) => (
                  <li key={use}>
                    <Badge className="bg-orange-50 text-orange-900 border">{use}</Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={`https://wa.me/${WhatsappNumber}?text=${encodeURIComponent(
                  `Hello, I want to order: ${PRODUCT.name}\n- Quantity: 1\n- Name:\n- Address:\n- Pincode:\n- Delivery Date (if any):\n- Gift Wrap? [Yes/No]\n- Payment Method: COD / UPI / Paytm`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold flex gap-2 items-center text-base py-3 text-center">
                  Order on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits and Guide */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-yellow-700 mb-2">Spiritual Benefits</h3>
            <ul className="space-y-2">
              {PRODUCT.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="mt-1 text-green-600" size={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="how-to-use">
                <AccordionTrigger className="font-bold text-orange-700 flex gap-2 items-center">
                  <Video className="mr-1" size={20} />
                  How to Use / Energize Guide
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                    <li>Hold the Rudraksha in your right palm, close your eyes, and chant "Om Namah Shivaya" 108 times.</li>
                    <li>Rinse with pure water, then place in your puja area.</li>
                    <li>Light a diya (lamp), offer flowers and incense, and pray for your intention.</li>
                    <li>Wear as pendant or keep in altar for best results.</li>
                  </ol>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <Video size={18} />
                    <span>Video guide coming soon...</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-1">
            <Star className="text-yellow-500" size={22} />
            Customer Reviews
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-white border border-yellow-100 rounded-xl px-5 py-4 flex flex-col shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-yellow-500">
                  {Array.from({ length: rev.stars }).map((_, idx) => (
                    <Star key={idx} size={18} fill="#FACC15" color="#FACC15" />
                  ))}
                  <span className="text-sm text-yellow-800 font-bold ml-2">
                    {rev.name} ({rev.city})
                  </span>
                </div>
                <div className="text-gray-700 text-base">{rev.text}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
