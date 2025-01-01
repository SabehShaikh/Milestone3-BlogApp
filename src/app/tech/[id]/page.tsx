import React from "react";
import { techArticles } from "@/data/techArticles";
import Image from "next/image";
import Comments from "@/components/Comments";

export default function TechArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const article = techArticles.find((article) => article.id === id);

  return (
    <div className="container mx-auto px-5 py-10">
      {article ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
          <p className="text-gray-600 mt-2">{article.description}</p>
          <p className="text-gray-800 mt-4">{article.content}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
        </div>
      )}

      <Comments />
    </div>
  );
}
