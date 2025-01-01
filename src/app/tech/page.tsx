import React from "react";
import Card from "@/components/Card";
import { techArticles } from "@/data/techArticles";

export default function TechPage() {
  return (
    <main className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Tech News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              link={`/tech/${article.id}`} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
