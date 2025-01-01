import React from "react";
import { Sheet, SheetTrigger, SheetClose, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { Heart, Monitor, Volleyball } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-4 px-8 shadow-lg">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">
          <Link
            href="/"
            className="hover:text-blue-300 transition duration-300"
          >
            Sabeh Blog
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-8 text-lg font-medium">
            <li className="flex items-center gap-2 hover:text-blue-300 transition duration-300">
              <Heart className="w-5 h-5" />
              <Link href="/health">Health</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition duration-300">
              <Monitor className="w-5 h-5" />
              <Link href="/tech">Tech</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-300 transition duration-300">
              <Volleyball className="w-5 h-5" />
              <Link href="/sports">Sports</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-white focus:outline-none">
                <span className="text-2xl">&#9776;</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-b from-blue-800 to-blue-900 text-white"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                <SheetClose>
                  <Link
                    href="/health"
                    className="flex items-center gap-2 text-lg hover:text-blue-300 transition duration-300"
                  >
                    <Heart className="w-5 h-5" />
                    Health
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    href="/tech"
                    className="flex items-center gap-2 text-lg hover:text-blue-300 transition duration-300"
                  >
                    <Monitor className="w-5 h-5" />
                    Tech
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    href="/sports"
                    className="flex items-center gap-2 text-lg hover:text-blue-300 transition duration-300"
                  >
                    <Volleyball className="w-5 h-5" />
                    Sports
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
