import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import CustomButton from "../components/common/CustomButton";
import InputBox from "../components/common/InputBox";
import axios from "axios";
import backendHost from "../utils/backendHost";
import { toast } from "react-toastify";
import CommonToast from "../components/common/CommonToast";
import Layout from "../components/Layout";
import { FormattedMessage, useIntl } from "react-intl";

export default function ContactPage({ dir, categories }) {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };
  const [values, setValues] = useState(initialValues);
  const intl = useIntl();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    let submit = false;
    for (let keys in values) {
      submit = values[keys].length !== 0;
    }
    if (submit) {
      const obj = {
        name: values.name,
        phone_number: values.phoneNumber,
        subject: values.subject,
        email: values.email,
        message: values.message,
      };
      axios
        .post(`${backendHost}/info/contact-us`, obj)
        .then((res) => {
          setValues(initialValues);
          toast.success("Message sended successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Request failed. Please try again");
        });
    } else {
      toast.error("Please submit all the fields carefully");
    }
  };
  return (
    <Layout categories={categories} dir={dir}>
      <div className="pl-2 md:pl-0 py-3">
        <CommonToast />

        <div className="my-5">
          <Heading>
            <FormattedMessage
              id="page.contact.title"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </Heading>
          <Text className="py-5 md:w-1/2">
            <FormattedMessage
              id="page.contact.description"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </Text>
          <div className="flex gap-2 items-center">
            <HiOutlineMail />
            <p>FitCornerz@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <IoCallOutline />
            <p className="">00962798907906</p>
          </div>
        </div>
        <div>
          <Heading>
            <FormattedMessage
              id="page.contact.form.title"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </Heading>
          <div className="grid md:grid-cols-2 gap-3 my-5">
            <InputBox
              label={intl.formatMessage({ id: "page.contact.form.name" })}
              name="name"
              placeholder="John Doe"
              value={values.name}
              onChange={handleChange}
            />
            <InputBox
              label={intl.formatMessage({ id: "page.contact.form.email" })}
              name="email"
              placeholder="John@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            <InputBox
              label={intl.formatMessage({
                id: "page.contact.form.phoneNumber",
              })}
              name="phoneNumber"
              placeholder="00962799809878"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <InputBox
              label={intl.formatMessage({ id: "page.contact.form.subject" })}
              name="subject"
              placeholder="Type here"
              value={values.subject}
              onChange={handleChange}
            />
          </div>
          <div className="pr-3">
            <p className="font-semibold">
              <FormattedMessage id="page.contact.form.message" />
            </p>
            <textarea
              rows={6}
              name={"message"}
              className="w-full border-slate-100 my-1  border p-2"
              placeholder={"Type here"}
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end my-3 px-3">
            <CustomButton onClick={handleSubmit}>
              <FormattedMessage id="page.contact.form.submit" />
            </CustomButton>
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
    const categories = await axios.get(`${backendHost}/category`,{
      headers:{
        "Accept-Language":context.locale
      }
    });
    props.categories = [...categories.data];

    return { props };
  } catch (err) {
    console.log(err);
    return { props };
  }
}
