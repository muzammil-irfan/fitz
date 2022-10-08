import CategoriesState from "../components/context/categories";
import Layout from "../components/Layout";
import "../styles/globals.css";

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
