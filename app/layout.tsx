import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Nicole Previd | UX Engineer | Product Engineer",
  description:
    "Portfolio for Nicole Previd, a UX Engineer and Product Engineer focused on workflow-heavy products, AI-assisted prototyping, and stakeholder-driven frontend execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
