import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            Welcome to Sabeh Blog
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-6">
            Discover insights, stories, and knowledge curated for you.
          </p>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Learn More About Us <ArrowRightCircle className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Explore Our Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight Cards */}
            <CategoryCard
              title="Health & Fitness"
              description="Stay updated with tips and insights for a healthier lifestyle."
              link="/health"
            />
            <CategoryCard
              title="Technology"
              description="Discover the latest trends and updates in the tech world."
              link="/tech"
            />
            <CategoryCard
              title="Sports"
              description="Dive into the world of sports, updates, and exciting moments."
              link="/sports"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
