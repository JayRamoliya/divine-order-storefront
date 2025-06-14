
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";

const BLOGS = [
  {
    title: "How to Identify Original Rudraksha",
    excerpt:
      "Discover expert tips to authenticate genuine Rudraksha beads and avoid imitations for your spiritual practices.",
    slug: "rudraksha-original",
    content: `
      <p>Identifying original Rudraksha beads is important for spiritual practices. Here are some methods to check authenticity:</p>
      <ul class="list-disc pl-6">
        <li><b>Count the Mukhi (faces):</b> Each bead should have natural lines running from one end to the other, known as Mukhi.</li>
        <li><b>Water Test:</b> Genuine beads do not float in water.</li>
        <li><b>No Drill Marks:</b> Holes in real beads form naturally; avoid beads with artificial holes.</li>
        <li><b>Consult a Priest or Trusted Seller:</b> Purchase from reputable sources.</li>
      </ul>
      <p>For more guidance, talk to a temple Pandit or trusted supplier.</p>
    `,
  },
  {
    title: "Daily Pooja Samagri List",
    excerpt:
      "A handy checklist of essential Pooja Samagri to keep your daily rituals pure and complete at home.",
    slug: "pooja-samagri-list",
    content: `
      <p>Daily pooja can be simple and powerful with the right Samagri:</p>
      <ul class="list-disc pl-6">
        <li>Dhoop (incense)</li>
        <li>Deepak (lamp & oil/ghee)</li>
        <li>Kumkum, Chandan, Haldi</li>
        <li>Flowers, Tulsi leaves</li>
        <li>Pure Water & Panchamrit</li>
        <li>Fresh Fruits & Sweets (for prasad)</li>
      </ul>
      <p>Prepare everything before starting for a peaceful ritual.</p>
    `,
  },
  {
    title: "How to Energize Pooja Items at Home",
    excerpt:
      "Simple steps to perform Pran Pratishtha and energize your Pooja items using traditional Vedic rituals.",
    slug: "energize-pooja-items",
    content: `
      <p>Energizing pooja items is called Pran Pratishtha:</p>
      <ol class="list-decimal pl-6">
        <li>Clean the items with Gangajal or clean water.</li>
        <li>Create a peaceful environment: light a diya, incense, and chant mantras (e.g., Gayatri Mantra, Om chants).</li>
        <li>Pray sincerely, inviting divine blessings on each item.</li>
      </ol>
      <p>Consult a priest for special rituals if needed.</p>
    `,
  },
  {
    title: "Vastu Tips for Mandir Setup",
    excerpt:
      "Follow these Vastu guidelines to create a spiritually uplifting Mandir space in your home.",
    slug: "vastu-mandir-setup",
    content: `
      <p>Vastu guidelines for mandir:</p>
      <ul class="list-disc pl-6">
        <li>Place the mandir in the northeast corner of your home.</li>
        <li>Keep idols clean and upright.</li>
        <li>Do not place mandir in bedroom or bathroom.</li>
        <li>Regularly light a diya and keep the space pure.</li>
      </ul>
      <p>Proper Vastu brings peace and spiritual elevation.</p>
    `,
  },
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = BLOGS.find((b) => b.slug === slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full py-8 md:py-12 max-w-3xl mx-auto px-3 md:px-4">
        {blog ? (
          <Card className="p-6 md:p-10 shadow mx-auto w-full">
            <h1 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">{blog.title}</h1>
            <div className="text-muted-foreground mb-2 text-sm md:text-base">{blog.excerpt}</div>
            <hr className="my-4" />
            <div className="prose max-w-none prose-orange prose-li:marker:text-orange-400" dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
            <div className="mt-10">
              <Link to="/blog" className="text-accent font-semibold underline hover:text-primary">
                ← Back to Blogs
              </Link>
            </div>
          </Card>
        ) : (
          <Card className="p-8 text-center shadow">
            <div className="text-2xl font-bold text-accent mb-4">Blog Not Found</div>
            <Link to="/blog" className="text-accent font-semibold underline hover:text-primary">Back to Blogs</Link>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
