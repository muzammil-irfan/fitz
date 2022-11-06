import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import CustomButton from "../components/common/CustomButton";
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
    <Layout categories={categories} dir={dir} className="container mx-auto px-2 sm:px-8  xl:px-16">
      <div className="pl-2 md:pl-0 pb-10  md:pt-4">
        <CommonToast />

        <div className="mt-6 sm:mt-4 mb-6 sm:mb-10">
          <Heading className={"sm:py-3 text-3xl"}>
            <FormattedMessage
              id="page.contact.title"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </Heading>
          <p className="py-5 md:w-1/2 text-sm md:text-md">
            <FormattedMessage
              id="page.contact.description"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </p>
          <div className="flex gap-2 items-center">
            <HiOutlineMail />
            <p className="md:text-md">FitCornerz@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <IoCallOutline />
            <p className="md:text-md">00962798907906</p>
          </div>
        </div>
        <div className=" lg:w-2/3">
          <Heading className={"py-3 sm:py-6 text-3xl"}>
            <FormattedMessage
              id="page.contact.form.title"
              values={{ b: (chunks) => <b className="yellow">{chunks}</b> }}
            />
          </Heading>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 my-5 ">
            <CustomInputBox
              label={intl.formatMessage({ id: "page.contact.form.name" })}
              name="name"
              placeholder="John Doe"
              value={values.name}
              onChange={handleChange}
            />
            <CustomInputBox
              label={intl.formatMessage({ id: "page.contact.form.email" })}
              name="email"
              placeholder="John@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            <CustomInputBox
              label={intl.formatMessage({
                id: "page.contact.form.phoneNumber",
              })}
              name="phoneNumber"
              placeholder="00962799809878"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <CustomInputBox
              label={intl.formatMessage({ id: "page.contact.form.subject" })}
              name="subject"
              placeholder="Type here"
              value={values.subject}
              onChange={handleChange}
            />
          </div>
          <div className="pr-3 sm:pr-0 py-3">
            <p className="font-semibold">
              <FormattedMessage id="page.contact.form.message" />
            </p>
            <textarea
              rows={6}
              name={"message"}
              className="w-full border-slate-100 my-2  border p-4"
              placeholder={"Type here"}
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className="sm:flex justify-end my-3 pr-3 sm:px-3 sm:pr-0  ">
            <CustomButton onClick={handleSubmit} className="w-full sm:w-min">
              <FormattedMessage id="page.contact.form.submit" />
            </CustomButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const CustomInputBox = ({
  name,
  label,
  onChange,
  value,
  placeholder,
  type,
  checked
}) => {
  return (
    <div className="">
      <p className="font-semibold">{label}</p>
      <input
        name={name}
        className="w-full md:w-full border-slate-100 my-2 border  p-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        checked={checked}
        
      />
    </div>
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
