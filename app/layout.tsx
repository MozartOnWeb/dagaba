import "@/styles/globals.css";

import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

import { montserrat, clashDisplay } from "@/public/fonts";

export const metadata = {
  title: {
    default: "DAGABA",
    template: "%s | DAGABA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    //shortcut: "/favicon.ico",
  },
  verification: {
    //google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    //yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.variable} ${clashDisplay.variable}`}>
        <div className="wrapper">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
