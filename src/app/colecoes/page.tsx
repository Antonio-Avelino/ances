"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { Search, SlidersHorizontal, X } from "lucide-react";

const sortOptions = [
  { value: "default", label: "Em Destaque" },
  { value: "price-asc", label: "Preço: Menor" },
  { value: "price-desc", label: "Preço: Maior" },
  { value: "name-asc", label: "Nome A-Z" },
];

export default function ColecoesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-ivory">
        {/* Header */}
        <div className="bg-cream py-20 px-6 md:px-10 text-center border-b border-charcoal/5">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
            ANCÉS
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-4">
            As Nossas Coleções
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Pesquisar joias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-gold"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-charcoal/10 font-sans text-xs text-charcoal px-4 py-3 focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <span className="font-sans text-xs text-charcoal/40 ml-auto md:ml-0">
                {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar filters */}
            <aside className="lg:w-56 shrink-0">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-5 flex items-center gap-2">
                  <SlidersHorizontal size={12} />
                  Categorias
                </h2>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveCategory("all")}
                      className={`w-full text-left font-sans text-sm transition-colors duration-200 py-1.5 border-l-2 pl-4 ${
                        activeCategory === "all"
                          ? "border-gold text-gold"
                          : "border-transparent text-charcoal/50 hover:text-charcoal"
                      }`}
                    >
                      Todas as Peças
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left font-sans text-sm transition-colors duration-200 py-1.5 border-l-2 pl-4 flex items-center justify-between ${
                          activeCategory === cat.id
                            ? "border-gold text-gold"
                            : "border-transparent text-charcoal/50 hover:text-charcoal"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 p-5 bg-cream border border-charcoal/5">
                  <p className="font-sans text-[9px] tracking-widest uppercase text-gold mb-2">
                    Encomenda Especial
                  </p>
                  <p className="font-serif text-sm font-light text-charcoal leading-snug mb-4">
                    Crie a sua joia personalizada com os nossos artesãos.
                  </p>
                  <a
                    href="/contacto"
                    className="font-sans text-[10px] tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
                  >
                    Saiba Mais →
                  </a>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-serif text-2xl font-light text-charcoal/40 mb-2">
                    Nenhuma peça encontrada
                  </p>
                  <p className="font-sans text-sm text-charcoal/30">
                    Tente outro termo de pesquisa ou categoria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
