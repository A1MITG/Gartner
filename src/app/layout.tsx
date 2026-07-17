import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Analysis Agent",
  description: "AI-powered market analysis using OpenAI for expert insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
