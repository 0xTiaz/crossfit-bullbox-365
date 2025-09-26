import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { cn } from "../../lib/utils";
import { LuX } from "react-icons/lu";
import { navItems } from "../../utils/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 10) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 backdrop-blur shadow-xs transition-all duration-300",
        isScrolled ? "py-3 bg-black/80 backdrop-blur shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10 text-foreground">
            <span>
              Crossfit <span className="text-primary">Bullbox 365</span>
            </span>
          </span>
        </a>

        <div className="hidden md:flex space-x-3 xl:space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.id}
              className="text-foreground hover:text-orange-500 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navbar */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-70"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <LuX size={30} className="text-foreground" />
          ) : (
            <IoMenu size={30} className="text-foreground" />
          )}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-[#121212]/95 background-blur-md z-60 flex flex-col items-center h-screen justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.id}
                className={
                  "text-white hover:text-orange-500 transition-colors duration-300"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
