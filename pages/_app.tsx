import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Caveat, Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["300", "200", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});
const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={`${manrope.variable} ${caveat.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
