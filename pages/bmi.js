import React, { Suspense } from "react";
import Heading from "../components/common/Heading";
import BMIForm from "../components/bmi/Form";
// import DesktopSection from "../components/bmi/DesktopSection";
// import MobileSection from "../components/bmi/MobileSection";
import UnderweightSection from "../components/bmi/UnderweightSection";
import Content from "../components/bmi/Content";
import Layout from "../components/Layout";
import OverweightSection from "../components/bmi/OverweightSection";
// import AdultSection from "../components/bmi/AdultSection";
// import ChildrenSection from "../components/bmi/ChildrenSection";
import { FormattedMessage, useIntl } from "react-intl";
import axios from "axios";
import backendHost from "../utils/backendHost";
import AdultTable from "../components/bmi/AdultTable";
import ChildrenTable from "../components/bmi/ChildrenTable";

export default function BMIPage({ dir, categories }) {
  return (
    <Layout
      categories={categories}
      dir={dir}
      className="container mx-auto px-3 md:max-w-[90%] lg:max-w-[80%]"
    >
      <div className="pb-10 md:pt-10">
        <Heading className={"py-5 text-4xl"}>
          <FormattedMessage
            id="page.bmi.title"
            values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
          />
        </Heading>
        <p className="my-3 sm:my-5">
          <FormattedMessage id="page.bmi.fillFormMessage" />
        </p>
        <BMIForm />
        <div className="py-5">
          <h3 className="text-xl  mb-5 font-bold">
            <FormattedMessage id="page.bmi.introduction.title" />
          </h3>
          <p className="text-lg pr-2">
            <FormattedMessage id="page.bmi.introduction.description" />
          </p>
        </div>
        <div className="xl:flex justify-between my-5">
          <div className="py-5 md:w-1/2">
            <h3 className="text-xl  mb-5 font-bold">
              <FormattedMessage id="page.bmi.adult.title" />
            </h3>
            <p className="text-lg pr-2">
              <FormattedMessage id="page.bmi.adult.description" />
            </p>
          </div>
          <AdultTable />
        </div>
        <div className="xl:flex justify-between my-5">
          <div className="pb-5 md:w-1/2">
            <h3 className="text-xl  mb-5 font-bold">
              <FormattedMessage id="page.bmi.children.title" />
            </h3>
            <p className="text-lg pr-2">
              <FormattedMessage id="page.bmi.children.description" />
            </p>
          </div>
          <ChildrenTable />
        </div>
        <OverweightSection />
        <UnderweightSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const props = {
    categories: [],
  };
  try {
    //To obtain slug from category
    const categories = await axios.get(`${backendHost}/category`, {
      headers: {
        "Accept-Language": context.locale,
      },
    });
    props.categories = [...categories.data];

    return { props };
  } catch (err) {
    console.log(err);
    return { props };
  }
}
