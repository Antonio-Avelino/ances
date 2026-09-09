"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-ivory min-h-screen">
        {/* Header */}
        <div className="bg-cream py-20 text-center border-b border-charcoal/5 px-6">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
            Fale Connosco
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-4">
            Contacto
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-light mb-8">
                Envie-nos uma mensagem
              </h2>
              {sent ? (
                <div className="bg-gold/10 border border-gold/30 p-8 text-center">
                  <div className="text-gold text-3xl mb-4">✦</div>
                  <h3 className="font-serif text-xl font-light mb-2">
                    Mensagem enviada
                  </h3>
                  <p className="font-sans text-sm text-charcoal/60">
                    Obrigada pelo seu contacto. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { field: "name", label: "Nome Completo", type: "text" },
                    { field: "email", label: "Email", type: "email" },
                    { field: "subject", label: "Assunto", type: "text" },
                  ].map(({ field, label, type }) => (
                    <div key={field}>
                      <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 block mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={form[field as keyof typeof form]}
                        onChange={(e) => update(field, e.target.value)}
                        className="w-full border border-charcoal/15 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 block mb-2">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full border border-charcoal/15 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Send size={14} strokeWidth={1.5} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-serif text-2xl font-light mb-8">
                Informações de Contacto
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { icon: Mail, label: "Email", value: "hello@ances.pt", href: "mailto:hello@ances.pt" },
                  { icon: Phone, label: "Telefone", value: "+351 912 345 678", href: "tel:+351912345678" },
                  { icon: MapPin, label: "Atelier", value: "Lisboa, Portugal" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40 mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="font-sans text-sm text-charcoal hover:text-gold transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-charcoal">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-lg font-light mb-5">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-charcoal/15 px-5 py-3 hover:border-gold hover:text-gold transition-colors group"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                  <span className="font-sans text-xs tracking-widest uppercase">Instagram</span>
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-charcoal/15 px-5 py-3 hover:border-gold hover:text-gold transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  <span className="font-sans text-xs tracking-widest uppercase">WhatsApp</span>
                </a>
              </div>

              <div className="mt-12 p-8 bg-charcoal text-white">
                <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
                  Encomenda Personalizada
                </p>
                <h3 className="font-serif text-xl font-light mb-3">
                  Crie a sua joia exclusiva
                </h3>
                <p className="font-sans text-xs leading-7 text-white/50">
                  Os nossos artesãos criam peças sob medida, de acordo com as suas preferências. Contacte-nos para discutir o seu projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
