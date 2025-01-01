import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  link: string;
}

const CategoryCard = ({ title, description, link }: CategoryCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-2"
      >
        Learn More <ArrowRightCircle className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default CategoryCard;

