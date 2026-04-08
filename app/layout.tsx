import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Sajid Bhati | Software Engineer",
  description:
    "Portfolio of Sajid Bhati, Software Engineer specializing in backend systems, cloud, and scalable applications",
  openGraph: {
    title: "Sajid Bhati | Software Engineer",
    description:
      "Portfolio of Sajid Bhati, Software Engineer specializing in backend systems, cloud, and scalable applications",
    type: "website",
    siteName: "Sajid Bhati Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 48,
        height: 48,
        alt: "Sajid Bhati Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon-sb.svg",
    shortcut: "/favicon-sb.svg",
    apple: "/favicon-sb.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initThemeScript = `
    (function () {
      try {
        var key = "theme-preference";
        var stored = localStorage.getItem(key);
        var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var isDark = stored === "dark" || (stored !== "light" && systemDark);
        document.documentElement.classList.toggle("dark", isDark);
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
      </head>
      <body className={`${manrope.variable} min-h-screen bg-neutral-50 text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
