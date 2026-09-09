import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, testimonials, essence } from "@/lib/data";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/pd-16.jpeg"
            alt="ANCÉS — Joias Artesanais de Luxo"
            fill
            priority
            className="object-cover"
          />
          <div className="overlay-dark" />

          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
              backgroundSize: "200px",
            }}
          />

          <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
            <p className="font-sans text-[10px] tracking-ultra uppercase text-gold mb-8 animate-fade-in">
              ✦ &nbsp; Joalharia Artesanal de Luxo &nbsp; ✦
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 animate-slide-up">
              Joias Artesanais para<br />
              <em>Mulheres que Valorizam</em><br />
              a Exclusividade
            </h1>
            <div className="gold-divider" />
            <p className="font-sans text-sm md:text-base text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Cada criação ANCÉS nasce do encontro entre a tradição artesanal e o luxo contemporâneo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/colecoes" className="btn-gold min-w-[200px]">
                Descobrir Coleção
              </Link>
              <Link href="/sobre" className="btn-outline min-w-[200px] text-white border-white hover:bg-white hover:text-charcoal">
                A Nossa História
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
            <span className="font-sans text-[9px] tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </section>

        {/* ── ANNOUNCEMENT BAR ── */}
        <div className="bg-charcoal py-3">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-12 overflow-hidden">
            {[
              "✦  Produção 100% Artesanal",
              "◈  Materiais Selecionados",
              "◇  Edição Limitada",
              "○  Entrega Segura e Discreta",
            ].map((item) => (
              <span key={item} className="font-sans text-[10px] tracking-widest uppercase text-white/60 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── NOSSA ESSÊNCIA ── */}
        <section className="py-32 px-6 md:px-10 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src="/images/pd-17.jpeg"
                      alt="Artesanato ANCÉS"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] relative overflow-hidden mt-10">
                    <Image
                      src="/images/pd-13.jpeg"
                      alt="Joias ANCÉS"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-gold text-white p-6 shadow-xl hidden md:block">
                  <p className="font-serif text-3xl font-light">+10</p>
                  <p className="font-sans text-[9px] tracking-widest uppercase mt-1">Anos de Arte</p>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="section-subtitle mb-4">A Nossa Essência</p>
                <h2 className="section-title mb-6">
                  Arte que se<br />
                  <em>usa com orgulho</em>
                </h2>
                <div className="gold-divider ml-0" />
                <p className="font-sans text-sm leading-8 text-charcoal/60 mb-8">
                  Na ANCÉS, cada joia é um poema em ouro. Inspiramo-nos na natureza, na elegância clássica e na essência feminina para criar peças que atravessam gerações. Os nossos artesãos dedicam horas a cada criação, garantindo que cada detalhe reflecte a excelência que nos define.
                </p>
                <p className="font-sans text-sm leading-8 text-charcoal/60 mb-10">
                  Combinamos madeiras nobres com ouro 18k e pedras semipreciosas naturais, criando uma harmonia única entre a terra e o eterno. O resultado são joias que contam histórias e marcam momentos.
                </p>
                <Link href="/sobre" className="btn-dark inline-flex items-center gap-3">
                  Descobrir a Nossa História
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLEÇÕES ── */}
        <section className="py-32 px-6 md:px-10 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-subtitle mb-4">As Nossas Coleções</p>
              <h2 className="section-title">Explore por Categoria</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/colecoes?categoria=${cat.id}`}
                  className="group relative overflow-hidden aspect-[2/3] block"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-sans text-[9px] tracking-widest uppercase text-gold/80 mb-1">
                      {cat.count} peças
                    </p>
                    <h3 className="font-serif text-lg font-light text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUTOS DESTAQUE ── */}
        <section className="py-32 px-6 md:px-10 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="section-subtitle mb-4">Seleção Especial</p>
                <h2 className="section-title">Peças em Destaque</h2>
                <div className="gold-divider ml-0 mt-4" />
              </div>
              <Link
                href="/colecoes"
                className="hidden md:inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-200"
              >
                Ver Tudo
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12 md:hidden">
              <Link href="/colecoes" className="btn-outline">
                Ver Toda a Coleção
              </Link>
            </div>
          </div>
        </section>

        {/* ── BECAUSE ANCÉS ── */}
        <section className="py-32 px-6 md:px-10 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">
                Os Nossos Pilares
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light">
                Porque Escolher ANCÉS
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {essence.map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="text-gold text-3xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-light mb-4">{item.title}</h3>
                  <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-xs leading-7 text-white/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BANNER CENTRAL ── */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/pd-14.jpeg"
            alt="ANCÉS Luxury"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="relative text-center text-white px-6 max-w-3xl mx-auto">
            <p className="font-sans text-[10px] tracking-ultra uppercase text-gold mb-6">
              Nova Coleção
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-8">
              Elegância que<br />
              <em>define quem és</em>
            </h2>
            <Link href="/colecoes" className="btn-gold">
              Explorar Coleção
            </Link>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="py-32 px-6 md:px-10 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-subtitle mb-4">Testemunhos</p>
              <h2 className="section-title">O Que Dizem de Nós</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-ivory p-8 md:p-10 text-center group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-gold fill-gold mx-0.5"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-lg font-light italic text-charcoal/80 leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div className="w-12 h-px bg-gold mx-auto mb-6" />
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-base font-light">{t.name}</h4>
                  <p className="font-sans text-[10px] tracking-wider uppercase text-gold/70 mt-1">
                    {t.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section className="py-20 px-6 md:px-10 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-2">@ances.jewelry</p>
              <h2 className="font-serif text-3xl font-light">Siga-nos no Instagram</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {["/images/pd-01.jpeg", "/images/pd-02.jpeg", "/images/pd-03.jpeg", "/images/pd-04.jpeg", "/images/pd-05.jpeg", "/images/pd-06.jpeg"].map((img, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-square overflow-hidden group block"
                >
                  <Image
                    src={img}
                    alt={`ANCÉS Instagram ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="16vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
