
import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

const BLOGS = [
  {
    title: "How to Identify Original Rudraksha",
    excerpt:
      "Discover expert tips to authenticate genuine Rudraksha beads and avoid imitations for your spiritual practices.",
    slug: "#rudraksha-original",
  },
  {
    title: "Daily Pooja Samagri List",
    excerpt:
      "A handy checklist of essential Pooja Samagri to keep your daily rituals pure and complete at home.",
    slug: "#pooja-samagri-list",
  },
  {
    title: "How to Energize Pooja Items at Home",
    excerpt:
      "Simple steps to perform Pran Pratishtha and energize your Pooja items using traditional Vedic rituals.",
    slug: "#energize-pooja-items",
  },
  {
    title: "Vastu Tips for Mandir Setup",
    excerpt:
      "Follow these Vastu guidelines to create a spiritually uplifting Mandir space in your home.",
    slug: "#vastu-mandir-setup",
  },
];

const Blog = () => (
  <div className="py-12 max-w-5xl mx-auto px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
      Learn &amp; Read (Blogs)
    </h1>
    <p className="mb-10 text-gray-700">
      Guides, tips, and info from our experts and temple Pandits to help you on your spiritual journey.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {BLOGS.map((blog) => (
        <Card
          key={blog.title}
          className="transition-transform hover:scale-105 border-orange-200 shadow-md"
        >
          <CardContent className="p-6">
            <CardTitle className="mb-2 text-xl text-orange-900">{blog.title}</CardTitle>
            <div className="mb-4 text-gray-700">{blog.excerpt}</div>
            <a
              href={blog.slug}
              className="text-orange-700 font-semibold underline hover:text-orange-900 text-sm"
            >
              Read More
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Blog;
