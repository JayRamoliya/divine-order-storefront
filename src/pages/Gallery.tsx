
import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
];

const Gallery: React.FC = () => (
  <div className="py-10 min-h-[65vh]">
    <h1 className="text-3xl font-bold mb-6 text-center">📷 ગેલેરી</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {galleryImages.map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform">
          <img
            src={img}
            alt={`Satvik Gallery photo ${idx + 1}`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
    <p className="text-center text-muted-foreground mt-8">નવી તસવીરો સમયાંતરે ઉમેરવામાં આવશે.</p>
  </div>
);

export default Gallery;
