import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://threadz.ai"),
  title: "THREADZ - Generative House | Curate Your Perfect Fit",
  description: "Use our Generative AI Studio to build luxury-grade blanks that match your unique aesthetic. From Cyberpunk grit to Botanical minimalism.",
  keywords: ["fashion", "AI", "generative design", "custom clothing", "luxury apparel"],
  authors: [{ name: "Threadz" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "THREADZ - Generative House",
    description: "Curate Your Perfect Fit with AI-Generated Luxury Apparel",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "THREADZ Generative House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THREADZ - Generative House",
    description: "Curate Your Perfect Fit with AI-Generated Luxury Apparel",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

