import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import CookiesConsent from "./components/common/cookiesconsent";
import MainLayout from "./components/mainLayout"

const inter = Inter({ subsets: ["latin"] });
const monaSans = localFont({
  src: [
    {
      path: "fonts/Mona-Sans-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5KV9QH2R" />
      <body className={monaSans.className}>
        <MainLayout>
          {children}
          <CookiesConsent />
        </MainLayout>
      </body>
      <GoogleAnalytics gaId="G-M4SF4DQ96L" />
    </html>
  );
}
