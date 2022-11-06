import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/bmiform.css";
import { useEffect } from "react";
import Cookies from 'js-cookie'
import ar from "../lang/ar.json";
import en from "../lang/en.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { DefaultSeo } from 'next-seo';

const messages = {
  ar,
  en,
}
function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
        <DefaultSeo
          defaultTitle="Fitz Cornerz"
          openGraph={{
            type: 'website',
            locale: locale,
            url: 'https://fitz-cornerz.netlify.app/',
            siteName: 'fitz-cornerz',
            title:"Fitz Cornerz",
            images:[
              {
                url:"https://fitz-cornerz.netlify.app/logo.png",
                width:220,
                height:40,
                type:"image/png"
              },
              {
                url:"https://fitz-cornerz.netlify.app/logo.png"
              }
            ]
          }}
        />
        <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}

export default MyApp;