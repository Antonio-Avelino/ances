"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Coleções", href: "/colecoes" },
  { label: "Novidades", href: "/colecoes?filter=novo" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-wood/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-serif text-2xl tracking-ultra font-light transition-colors duration-200",
              scrolled ? "text-charcoal" : "text-white"
            )}
          >
            ANCÉS
          </Link>

          {/* Right nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button
                aria-label="Pesquisar"
                className={cn(
                  "transition-colors duration-200 hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link
                href="/carrinho"
                aria-label="Carrinho"
                className={cn(
                  "relative transition-colors duration-200 hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-4">
            <Link
              href="/carrinho"
              aria-label="Carrinho"
              className={cn(
                "relative transition-colors duration-200",
                scrolled ? "text-charcoal" : "text-white"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              className={cn(
                "transition-colors duration-200",
                scrolled ? "text-charcoal" : "text-white"
              )}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-charcoal flex flex-col transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <span className="font-serif text-2xl tracking-ultra font-light text-white">ANCÉS</span>
          <button onClick={() => setMenuOpen(false)} className="text-white hover:text-gold transition-colors">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center items-center gap-10 px-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl font-light text-white hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-10 py-8 border-t border-white/10 flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-xs tracking-widest uppercase text-white/60 hover:text-gold transition-colors">Instagram</a>
          <a href="https://wa.me" target="_blank" rel="noreferrer" className="font-sans text-xs tracking-widest uppercase text-white/60 hover:text-gold transition-colors">WhatsApp</a>
        </div>
      </div>
    </>
  );
}
