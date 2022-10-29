import CategoriesState from "../components/context/categories";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Cookies from 'js-cookie'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    console.log("cookies",Cookies.get("NEXT_LOCALE"))
  },[]);
  return (
    <CategoriesState>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </CategoriesState>
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