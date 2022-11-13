import React from "react";
import Heading from "../components/common/Heading";
import BMIForm from "../components/bmi/Form";
import UnderweightSection from "../components/bmi/UnderweightSection";
import Layout from "../components/Layout";
import OverweightSection from "../components/bmi/OverweightSection";
import { FormattedMessage } from "react-intl";
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
        <Heading className={"py-5 text-4xl xl:text-[56px]"}>
          <FormattedMessage
            id="page.bmi.title"
            values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
          />
        </Heading>
        <p className="my-3 sm:my-5 md:text-lg">
          <FormattedMessage id="page.bmi.fillFormMessage" />
        </p>
        <BMIForm />
        <div className="py-5">
          <h3 className="text-xl md:text-2xl  mb-5 font-bold">
            <FormattedMessage id="page.bmi.introduction.title" />
          </h3>
          <p className="md:text-lg pr-2 pt-2">
            <FormattedMessage id="page.bmi.introduction.description" />
          </p>
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="">
            <div className="xl:flex w-full justify-between my-5">
              <div className="py-5 ">
                <h3 className="text-xl md:text-2xl  mb-5 font-bold">
                  <FormattedMessage id="page.bmi.adult.title" />
                </h3>
                <p className="md:text-lg pr-2 lg:max-w-[550px] pt-2">
                  <FormattedMessage id="page.bmi.adult.description" />
                </p>
              </div>
              <div className="lg:hidden">
                <AdultTable />
              </div>
            </div>
            <div className="xl:flex justify-between my-5">
              <div className="pb-5 ">
                <h3 className="text-xl md:text-2xl  mb-5 font-bold">
                  <FormattedMessage id="page.bmi.children.title" />
                </h3>
                <p className="md:text-lg pr-2 lg:max-w-[550px]">
                  <FormattedMessage id="page.bmi.children.description" />
                </p>
              </div>
              <div className="lg:hidden">
                <ChildrenTable />
              </div>
            </div>
            <OverweightSection />
            <UnderweightSection />
          </div>
          <div className="mt-20 gap-16 w-[450px] hidden lg:flex lg:flex-col">
            <AdultTable />
            <ChildrenTable />
          </div>
        </div>
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

    return { props, revalidate: 10 };
  } catch (err) {
    console.log(err);
    return { props };
  }
}
