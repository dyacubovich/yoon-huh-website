import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoon Huh | Piano Studio",
  description:
    "Yoon Huh's piano studio — private lessons cultivating technique, musicality, and lifelong joy in music for students of all ages.",
};

// Applies a saved theme choice before React hydrates, so a returning visitor
// never sees a flash of the default palette. Keep the storage key in sync
// with THEME_STORAGE_KEY in components/ThemeSwitcher.tsx.
const themeInitScript = `(function(){try{var t=localStorage.getItem('yh-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
