import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Heart, Shield, RotateCcw, Package } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-ivory min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <nav className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-charcoal/40">
            <Link href="/" className="hover:text-gold transition-colors">Início</Link>
            <span>/</span>
            <Link href="/colecoes" className="hover:text-gold transition-colors">Coleções</Link>
            <span>/</span>
            <span className="text-charcoal/70">{product.name}</span>
          </nav>
        </div>

        {/* Product */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden bg-cream group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.badge && (
                  <div className="absolute top-5 left-5 bg-gold text-white font-sans text-[9px] tracking-widest uppercase px-3 py-1">
                    {product.badge}
                  </div>
                )}
              </div>
              {/* Thumbnail grid */}
              <div className="grid grid-cols-4 gap-3">
                {[product.image, "/images/pd-09.jpeg", "/images/pd-10.jpeg", "/images/pd-11.jpeg"].map((img, i) => (
                  <div key={i} className={`relative aspect-square overflow-hidden bg-cream cursor-pointer border-2 transition-colors ${i === 0 ? "border-gold" : "border-transparent hover:border-gold/40"}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="10vw" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:py-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="w-10 h-px bg-gold mb-6" />
              <p className="font-serif text-3xl text-charcoal mb-8">
                {formatPrice(product.price)}
              </p>
              <p className="font-sans text-sm leading-8 text-charcoal/60 mb-10">
                {product.description} Uma peça feita à mão por artesãos experientes, combinando tradição e modernidade para criar algo verdadeiramente único.
              </p>

              {/* Size selector */}
              <div className="mb-8">
                <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-3">
                  Selecionar Tamanho
                </p>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      className="w-11 h-11 border border-charcoal/20 font-sans text-xs hover:border-gold hover:text-gold transition-colors first:border-gold first:text-gold"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-10">
                <button className="flex-1 btn-gold flex items-center justify-center gap-2 py-4">
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  Adicionar ao Carrinho
                </button>
                <button className="w-14 h-14 border border-charcoal/20 flex items-center justify-center text-charcoal/40 hover:border-gold hover:text-gold transition-colors">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Details */}
              <div className="border-t border-charcoal/10 pt-8 space-y-5">
                {[
                  { label: "Materiais", value: product.materials },
                  { label: "Dimensões", value: product.dimensions },
                  { label: "Cuidados", value: "Evite contacto com água e perfume. Limpe com pano macio." },
                  { label: "Disponibilidade", value: "Em Stock — Envio em 2–3 dias úteis" },
                ].map((detail) => (
                  <div key={detail.label} className="flex gap-6">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40 w-28 shrink-0 pt-0.5">
                      {detail.label}
                    </span>
                    <span className="font-sans text-sm text-charcoal/70">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Garantia 2 Anos" },
                  { icon: RotateCcw, label: "Devolução 30 Dias" },
                  { icon: Package, label: "Embalagem Premium" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center p-4 bg-cream">
                    <Icon size={16} strokeWidth={1} className="text-gold" />
                    <span className="font-sans text-[10px] tracking-wider uppercase text-charcoal/50">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-cream py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-serif text-3xl font-light text-charcoal mb-12 text-center">
                Pode também gostar de
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
