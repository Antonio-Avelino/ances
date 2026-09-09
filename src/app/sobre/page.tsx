import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Artesanato Genuíno",
    text: "Cada peça ANCÉS é criada manualmente por artesãos com décadas de experiência. Cada gesto, cada entalhe, cada detalhe é executado com total atenção e amor pela arte.",
  },
  {
    title: "Materiais da Natureza",
    text: "Selecionamos madeiras nobres certificadas, ouro 18k e pedras semipreciosas naturais. A harmonia entre a terra e o eterno é a essência de cada criação.",
  },
  {
    title: "Exclusividade Real",
    text: "As nossas coleções são produzidas em séries muito limitadas. Cada cliente possui uma peça verdadeiramente única, impossível de replicar em série.",
  },
  {
    title: "Herança e Futuro",
    text: "ANCÉS inspira-se nas técnicas de joalharia tradicional, mas abraça o design contemporâneo. As nossas peças são feitas para durar gerações.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
          <Image
            src="/images/pd-15.jpeg"
            alt="Sobre ANCÉS"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-white">
            <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">
              A Nossa História
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight max-w-2xl">
              Arte que<br />
              <em>nasce das mãos</em>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-28 px-6 md:px-10 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-subtitle mb-6">A Nossa Essência</p>
                <h2 className="section-title mb-6">
                  Joias que contam<br />
                  <em>uma história</em>
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="font-sans text-sm leading-9 text-charcoal/60 mb-6">
                  ANCÉS nasceu de uma paixão profunda pela arte da joalharia e pela beleza dos materiais naturais. O nome evoca ancestralidade, raízes e a ligação entre o que foi e o que será.
                </p>
                <p className="font-sans text-sm leading-9 text-charcoal/60 mb-6">
                  Cada coleção é inspirada nos elementos da natureza — a madeira, a terra, o ouro — combinados com técnicas artesanais passadas de geração em geração. O resultado são peças com alma, que as mulheres usam com orgulho e transmitem com amor.
                </p>
                <p className="font-sans text-sm leading-9 text-charcoal/60">
                  A nossa missão é simples: criar joias únicas que façam sentir especial quem as usa. Não vendemos acessórios — criamos memórias que ficam.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/pd-12.jpeg"
                    alt="Artesanato ANCÉS"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold p-8 shadow-xl hidden md:block">
                  <p className="font-serif text-4xl font-light text-white">2014</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-white/70 mt-1">
                    Fundada com amor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 px-6 md:px-10 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="section-subtitle mb-4">Os Nossos Valores</p>
              <h2 className="section-title">O que nos define</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="flex gap-6 p-8 bg-ivory border border-charcoal/5 hover:border-gold/30 transition-colors duration-300"
                >
                  <span className="font-serif text-3xl font-light text-gold/40 mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light mb-3">{v.title}</h3>
                    <p className="font-sans text-sm leading-8 text-charcoal/55">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Atelier */}
        <section className="py-28 px-6 md:px-10 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {["/images/pd-09.jpeg", "/images/pd-10.jpeg", "/images/pd-11.jpeg"].map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden group">
                  <Image
                    src={img}
                    alt={`Atelier ANCÉS ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center bg-charcoal text-white">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">
            Descubra
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            A sua próxima joia especial espera por si
          </h2>
          <div className="gold-divider" />
          <Link href="/colecoes" className="btn-gold mt-8 inline-flex items-center gap-3">
            Ver Coleção Completa
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
