import CategoriesState from "../components/context/categories";
// import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Cookies from 'js-cookie'
import ar from "../lang/ar.json";
import en from "../lang/en.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";  
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
  useEffect(()=>{
    console.log("cookies",Cookies.get("NEXT_LOCALE"))
  },[]);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <Layout > */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </IntlProvider>
  );
}

export default MyApp;

export async function getStaticProps() {
  const props = {
    categories: [],
  };
  try {
    //To obtain slug from category
    const categories = await axios.get(`${backendHost}/category`);
    props.categories = [...categories.data];
    
    return {props};
  } catch (err) {
    console.log(err);
    return {props};
  }
}