import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANCÉS — Joias Artesanais de Luxo",
  description:
    "Cada criação ANCÉS nasce do encontro entre a tradição artesanal e o luxo contemporâneo. Joias únicas, feitas à mão, para mulheres que valorizam a exclusividade.",
  keywords: ["joias artesanais", "luxo", "ouro", "prata", "ANCÉS", "boutique"],
  openGraph: {
    title: "ANCÉS — Joias Artesanais de Luxo",
    description: "Joias únicas, feitas à mão, para mulheres que valorizam a exclusividade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-charcoal antialiased">{children}</body>
    </html>
  );
}
