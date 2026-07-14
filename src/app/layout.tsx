import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/src/styles/globals.css";
import { Providers } from "@/src/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Scroll Animation System",
  description: "Experience cinematic, premium scrolling interactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${cormorant.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
