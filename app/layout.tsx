import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "VectorOS — Understanding AI, Systems, and Digital Leverage",
  description:
    "VectorOS is an educational platform teaching AI literacy, systems thinking, and practical workflows for the infrastructure age.",
  metadataBase: new URL("https://joinvectoros.ai"),
  openGraph: {
    title: "VectorOS",
    description:
      "Learn how to use AI tools, understand modern technology, and build intelligent workflows for the future.",
    url: "https://joinvectoros.ai",
    siteName: "VectorOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VectorOS",
    description:
      "Learn how to use AI tools, understand modern technology, and build intelligent workflows.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
