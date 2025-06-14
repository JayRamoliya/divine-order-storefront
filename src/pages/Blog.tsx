
import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BLOGS = [
  {
    title: "How to Identify Original Rudraksha",
    excerpt:
      "Discover expert tips to authenticate genuine Rudraksha beads and avoid imitations for your spiritual practices.",
    slug: "rudraksha-original",
  },
  {
    title: "Daily Pooja Samagri List",
    excerpt:
      "A handy checklist of essential Pooja Samagri to keep your daily rituals pure and complete at home.",
    slug: "pooja-samagri-list",
  },
  {
    title: "How to Energize Pooja Items at Home",
    excerpt:
      "Simple steps to perform Pran Pratishtha and energize your Pooja items using traditional Vedic rituals.",
    slug: "energize-pooja-items",
  },
  {
    title: "Vastu Tips for Mandir Setup",
    excerpt:
      "Follow these Vastu guidelines to create a spiritually uplifting Mandir space in your home.",
    slug: "vastu-mandir-setup",
  },
];

const Blog = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 w-full">
      <div className="py-8 md:py-12 max-w-5xl mx-auto px-2 md:px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Learn &amp; Read (Blogs)
        </h1>
        <p className="mb-8 md:mb-10 text-foreground">
          Guides, tips, and info from our experts and temple Pandits to help you on your spiritual journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BLOGS.map((blog) => (
            <Card
              key={blog.title}
              className="transition-transform hover:scale-105 border-primary/20 shadow-md"
            >
              <CardContent className="p-4 md:p-6">
                <CardTitle className="mb-2 text-base md:text-xl text-accent">{blog.title}</CardTitle>
                <div className="mb-4 text-foreground">{blog.excerpt}</div>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-accent font-semibold underline hover:text-primary text-sm"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
