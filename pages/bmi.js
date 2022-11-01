import React, { Suspense } from "react";
import Heading from "../components/common/Heading";
import BMIForm from "../components/bmi/Form";
// import DesktopSection from "../components/bmi/DesktopSection";
// import MobileSection from "../components/bmi/MobileSection";
import UnderweightSection from "../components/bmi/UnderweightSection";
import Content from "../components/bmi/Content";
import Layout from "../components/Layout";
import OverweightSection from "../components/bmi/OverweightSection";
import AdultSection from "../components/bmi/AdultSection";
import ChildrenSection from "../components/bmi/ChildrenSection";
import { FormattedMessage, useIntl } from "react-intl";

export default function BMIPage({ categories }) {
  const intl = useIntl();
  return (
    <Layout categories={categories}>
      <div className="py-5">
        <Heading>
          <FormattedMessage id="page.bmi.title"  values={{ b: (chunks) => <b className="yellow">{chunks}</b> }} />
        </Heading>
        <p className="my-5">
          <FormattedMessage id="page.bmi.fillFormMessage" />
        </p>
        <BMIForm />
        <Content
          title={intl.formatMessage({id:"page.bmi.introduction.title"})}
          description={intl.formatMessage({id:"page.bmi.introduction.description"})}
        />
        <AdultSection />
        <ChildrenSection />
        <OverweightSection />
        <UnderweightSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const props = {
    categories: [],
  };
  try {
    //To obtain slug from category
    const categories = await axios.get(`${backendHost}/category`);
    props.categories = [...categories.data];

    return { props };
  } catch (err) {
    console.log(err);
    return { props };
  }
}
