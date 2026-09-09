"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/data";

interface CartItem {
  product: typeof products[0];
  qty: number;
}

export default function CarrinhoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], qty: 1 },
    { product: products[4], qty: 1 },
  ]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.product.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (id: number) =>
    setCartItems((items) => items.filter((i) => i.product.id !== id));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 300 ? 0 : 9.9;
  const total = subtotal - discount + shipping;

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-ivory">
        <div className="bg-cream py-16 px-6 text-center border-b border-charcoal/5">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-2">
            O Seu
          </p>
          <h1 className="font-serif text-5xl font-light text-charcoal">Carrinho</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          {cartItems.length === 0 ? (
            <div className="text-center py-24">
              <ShoppingBag size={40} strokeWidth={1} className="text-charcoal/20 mx-auto mb-6" />
              <p className="font-serif text-2xl font-light text-charcoal/40 mb-6">
                O seu carrinho está vazio
              </p>
              <Link href="/colecoes" className="btn-gold">
                Descobrir Coleção
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Items */}
              <div className="lg:col-span-2 space-y-8">
                {cartItems.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="flex gap-6 pb-8 border-b border-charcoal/8"
                  >
                    <Link href={`/produto/${product.id}`} className="relative w-24 h-28 md:w-32 md:h-36 shrink-0 overflow-hidden bg-cream">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="128px"
                      />
                    </Link>
                    <div className="flex-1">
                      <p className="font-sans text-[10px] tracking-widest uppercase text-gold/70 mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-serif text-lg font-light text-charcoal mb-1">
                        {product.name}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/40 mb-4">
                        {product.materials}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0 border border-charcoal/15">
                          <button
                            onClick={() => updateQty(product.id, -1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-gold transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center font-sans text-sm text-charcoal">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQty(product.id, 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-gold transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-lg text-charcoal">
                            {formatPrice(product.price * qty)}
                          </span>
                          <button
                            onClick={() => remove(product.id)}
                            className="text-charcoal/30 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-cream p-8 sticky top-28">
                  <h2 className="font-serif text-xl font-light text-charcoal mb-6">
                    Resumo do Pedido
                  </h2>

                  {/* Coupon */}
                  <div className="flex mb-6">
                    <input
                      type="text"
                      placeholder="Código de desconto"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1 bg-white border border-charcoal/15 px-4 py-2.5 font-sans text-xs focus:outline-none focus:border-gold transition-colors"
                    />
                    <button
                      onClick={() => coupon && setCouponApplied(true)}
                      className="bg-charcoal text-white font-sans text-[10px] tracking-widest uppercase px-4 hover:bg-wood-dark transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>

                  {couponApplied && (
                    <p className="font-sans text-xs text-gold mb-4">
                      ✓ Desconto de 10% aplicado
                    </p>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between font-sans text-sm text-charcoal/60">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between font-sans text-sm text-gold">
                        <span>Desconto</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-sans text-sm text-charcoal/60">
                      <span>Envio</span>
                      <span>{shipping === 0 ? "Gratuito" : formatPrice(shipping)}</span>
                    </div>
                    {subtotal < 300 && (
                      <p className="font-sans text-[10px] text-charcoal/40">
                        Envio gratuito para encomendas acima de 300€
                      </p>
                    )}
                  </div>

                  <div className="border-t border-charcoal/10 pt-4 mb-8">
                    <div className="flex justify-between">
                      <span className="font-serif text-lg text-charcoal">Total</span>
                      <span className="font-serif text-lg text-charcoal">{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="btn-gold w-full text-center block">
                    Finalizar Compra
                  </Link>

                  <Link
                    href="/colecoes"
                    className="block text-center font-sans text-xs tracking-widest uppercase text-charcoal/40 hover:text-gold transition-colors mt-4"
                  >
                    Continuar a Comprar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
