import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://deforche.be"),
  title: {
    default: "Deforche Schakeltechniek",
    template: "%s | Deforche Schakeltechniek",
  },
  description: "Van hardware engineering tot hoogspanning en bordenbouw — Deforche Schakeltechniek verzorgt alles in eigen huis.",
  openGraph: {
    siteName: "Deforche Schakeltechniek",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
