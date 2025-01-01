import React from "react";
import Image from "next/image";

export default function Card({ title, description, image, link }: { title: string; description: string; image: string; link: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={link} className="text-blue-500 mt-4 inline-block">Read More</a>
      </div>
    </div>
  );
}
