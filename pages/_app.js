import CategoriesState from "../components/context/categories";
import Layout from "../components/Layout";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
      <CategoriesState>
    <Layout>
        <Component {...pageProps} />
    </Layout>
      </CategoriesState>
  );
}

export default MyApp;
