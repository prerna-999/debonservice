// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import "../../public/assets/css/main.css";
// import "../../public/assets/css/themes/_index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "@/layout/header/Header";
// import Footer from "@/layout/footer/Footer";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Header />

//       <main>
//         <Component {...pageProps} />
//       </main>
//       <Footer/>
//     </>
//   );
// }

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../public/assets/css/main.css";
import "../../public/assets/css/themes/_index.css";
import "../../public/assets/css/layout/_locale-switcher.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </LocaleProvider>
  );
}

