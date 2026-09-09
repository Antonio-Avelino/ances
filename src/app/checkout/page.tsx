"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, CreditCard, Wallet } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/data";

const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", postal: "", country: "Portugal",
    payment: "card",
  });

  const cartItems = [
    { product: products[0], qty: 1 },
    { product: products[4], qty: 1 },
  ];

  const total = cartItems.reduce((s, i) => s + i.product.price * i.qty, 0);

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          {/* Steps */}
          <div className="flex items-center justify-center mb-16">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-sans transition-colors duration-300 ${
                      i < step
                        ? "bg-gold text-white"
                        : i === step
                        ? "bg-charcoal text-white"
                        : "bg-charcoal/10 text-charcoal/30"
                    }`}
                  >
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span
                    className={`font-sans text-[9px] tracking-widest uppercase mt-2 ${
                      i === step ? "text-charcoal" : "text-charcoal/30"
                    }`}
                  >
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-20 md:w-32 h-px mx-4 mb-5 transition-colors duration-300 ${
                      i < step ? "bg-gold" : "bg-charcoal/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {step === 0 && (
                <div className="bg-white p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl font-light mb-8">Dados Pessoais</h2>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { field: "firstName", label: "Primeiro Nome", col: 1 },
                      { field: "lastName", label: "Apelido", col: 1 },
                      { field: "email", label: "Email", col: 2, type: "email" },
                      { field: "phone", label: "Telefone", col: 1, type: "tel" },
                    ].map(({ field, label, col, type }) => (
                      <div key={field} className={col === 2 ? "col-span-2" : ""}>
                        <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 block mb-2">
                          {label}
                        </label>
                        <input
                          type={type || "text"}
                          value={form[field as keyof typeof form]}
                          onChange={(e) => update(field, e.target.value)}
                          className="w-full border border-charcoal/15 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="btn-dark mt-8 w-full">
                    Continuar →
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="bg-white p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl font-light mb-8">Endereço de Entrega</h2>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { field: "address", label: "Morada Completa", col: 2 },
                      { field: "city", label: "Cidade", col: 1 },
                      { field: "postal", label: "Código Postal", col: 1 },
                      { field: "country", label: "País", col: 2 },
                    ].map(({ field, label, col }) => (
                      <div key={field} className={col === 2 ? "col-span-2" : ""}>
                        <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 block mb-2">
                          {label}
                        </label>
                        <input
                          type="text"
                          value={form[field as keyof typeof form]}
                          onChange={(e) => update(field, e.target.value)}
                          className="w-full border border-charcoal/15 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setStep(0)} className="btn-outline flex-1">
                      ← Voltar
                    </button>
                    <button onClick={() => setStep(2)} className="btn-dark flex-1">
                      Continuar →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl font-light mb-8">Método de Pagamento</h2>
                  <div className="space-y-4 mb-8">
                    {[
                      { value: "card", label: "Cartão de Crédito / Débito", icon: CreditCard },
                      { value: "mbway", label: "MBWay", icon: Wallet },
                      { value: "multibanco", label: "Multibanco / ATM", icon: Wallet },
                    ].map(({ value, label, icon: Icon }) => (
                      <label
                        key={value}
                        className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                          form.payment === value
                            ? "border-gold bg-gold/5"
                            : "border-charcoal/15 hover:border-charcoal/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={value}
                          checked={form.payment === value}
                          onChange={(e) => update("payment", e.target.value)}
                          className="accent-gold"
                        />
                        <Icon size={18} strokeWidth={1.5} className="text-charcoal/50" />
                        <span className="font-sans text-sm text-charcoal">{label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="btn-outline flex-1">
                      ← Voltar
                    </button>
                    <button className="btn-gold flex-1">Confirmar Encomenda</button>
                  </div>
                </div>
              )}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream p-6 sticky top-28">
                <h3 className="font-serif text-lg font-light mb-6">Resumo</h3>
                <div className="space-y-4 mb-6">
                  {cartItems.map(({ product, qty }) => (
                    <div key={product.id} className="flex gap-3">
                      <div className="relative w-12 h-14 shrink-0 overflow-hidden bg-white">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="48px" />
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-sm font-light">{product.name}</p>
                        <p className="font-sans text-xs text-charcoal/40">Qtd: {qty}</p>
                      </div>
                      <p className="font-serif text-sm">{formatPrice(product.price)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <div className="flex justify-between">
                    <span className="font-serif text-base">Total</span>
                    <span className="font-serif text-base">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
