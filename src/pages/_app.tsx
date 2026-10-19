
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import "../../public/assets/css/main.css";
import "../../public/assets/css/themes/_index.css";
import "../../public/assets/css/layout/_locale-switcher.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
         {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1142508914881717');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* End Meta Pixel Code */}
    <LocaleProvider>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </LocaleProvider>
    </>
  );
}

