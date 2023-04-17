import "@/styles/globals.css";

import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

import { montserrat, clashDisplay } from "@/public/fonts";

export const metadata = {
  metadataBase: new URL("https://dagaba.net"),
  title: {
    default: "DAGABA",
    template: "%s | DAGABA",
  },
  description:
    "DAGABA, la nature aux bons soins des humains. DAGABA possède aujourd’hui plus de 2000 remèdes au niveau de son cabinet et les recherches continuent. La santé, la propriété, la paix, le développement ont toujours été l’objectif constamment visé par APROPHAM DAGABA.",
  keywords: ["Dagaba", "APROPHAM", "Mouleikafou"],
  openGraph: {
    title: "Dagaba | APROPHAM Mouleikafou",
    description:
      "DAGABA, la nature aux bons soins des humains. DAGABA possède aujourd’hui plus de 2000 remèdes au niveau de son cabinet et les recherches continuent. La santé, la propriété, la paix, le développement ont toujours été l’objectif constamment visé par APROPHAM DAGABA.",
    url: "https://dagaba.net",
    siteName: "Dagaba | APROPHAM Mouleikafou",
    images: [
      {
        url: "https://dagaba.net/opengraph-image.jpg",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
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
  verification: {
    google: "VnqNuMq6MbnPKxZz24AB8vL5yqSyApAY0c7XXn2u2nU",
    other: {
      me: ["dagabamouleikafou@gmail.com", "https://dagaba.net"],
    },
  },
  referrer: "origin-when-cross-origin",
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
