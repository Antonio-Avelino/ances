import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              Newsletter Exclusiva
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light">
              Receba Novidades Exclusivas
            </h3>
          </div>
          <form
            className="flex w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 md:w-72 bg-white/5 border border-white/20 text-white placeholder:text-white/40 px-5 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-3 font-sans text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscrever
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl tracking-ultra font-light mb-4">ANCÉS</h2>
            <p className="font-sans text-xs leading-relaxed text-white/50 max-w-xs">
              Joias artesanais de luxo para mulheres que valorizam a exclusividade e a beleza dos detalhes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {["Sobre ANCÉS", "A Nossa História", "Artesãos", "Sustentabilidade"].map((item) => (
                <li key={item}>
                  <Link href="/sobre" className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Coleções</h4>
            <ul className="space-y-3">
              {["Colares", "Brincos", "Pulseiras", "Anéis", "Conjuntos"].map((item) => (
                <li key={item}>
                  <Link href="/colecoes" className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Apoio</h4>
            <ul className="space-y-3">
              {["Contacto", "Envios & Devoluções", "Cuidados com as Joias", "Política de Privacidade", "Termos e Condições"].map((item) => (
                <li key={item}>
                  <Link href="/contacto" className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-white/30">
            © 2026 ANCÉS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-gold transition-colors duration-200"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-gold transition-colors duration-200"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-white/40 hover:text-gold transition-colors duration-200"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
