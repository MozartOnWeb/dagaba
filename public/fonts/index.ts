import localFont from "@next/font/local";

export const clashDisplay = localFont({
  src: [
    {
      path: "./clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Semibold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--clashDisplay",
});

export const montserrat = localFont({
  src: [
    {
      path: "./montserrat/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./montserrat/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--montserrat",
});
