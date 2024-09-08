"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { NavContent } from "./NavContent";

export function MobileNavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        type="button"
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div
        ref={menuRef}
        className={`bg-primary-500 fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <Logo />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-8 p-4 text-2xl font-medium">
            <NavContent onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
