import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto py-10 px-5 flex flex-col lg:flex-row justify-between">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-2xl font-extrabold tracking-wide">
            <Link
              href="/"
              className="hover:text-blue-300 transition duration-300"
            >
              Sabeh Blog
            </Link>
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Sharing knowledge and insights since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/health"
                className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
              >
                <span>Health</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tech"
                className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
              >
                <span>Tech</span>
              </Link>
            </li>
            <li>
              <Link
                href="/sports"
                className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
              >
                <span>Sports</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/Sabeh420/"
              className="hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/shaikh_sabeh"
              className="hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabeh-shaikh-016623245/"
              className="hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/SabehShaikh"
              className="hover:text-gray-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-800 py-4 text-center">
        <p className="text-sm text-gray-300">
          © 2025 Sabeh Blog —
          <Link
            href="https://personal-portfolio-sabeh.vercel.app/"
            className="text-blue-300 ml-1 underline hover:text-blue-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sabeh Shaikh
          </Link>
        </p>
      </div>
    </footer>
  );
}
