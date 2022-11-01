import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import CustomButton from "../components/common/CustomButton";
import InputBox from "../components/common/InputBox";
import axios from "axios";
import backendHost from "../utils/backendHost";
import {toast} from 'react-toastify';
import CommonToast from "../components/common/CommonToast";
import Layout from '../components/Layout';


export default function ContactPage({categories}) {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message:""
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = ()=>{
    let submit = false;
    for(let keys in values){
     submit = values[keys].length !== 0
    }
    if(submit){
      const obj = {
        name: values.name,
        phone_number: values.phoneNumber,
        subject: values.subject,
        email: values.email,
        message: values.message
      }
      axios.post(`${backendHost}/info/contact-us`,obj)
      .then(res=>{      
        setValues(initialValues);
        toast.success("Message sended successfully");
      })
      .catch(err=>{
        console.log(err);
        toast.error("Request failed. Please try again");
      })
    } else {
      toast.error("Please submit all the fields carefully")
    }
  };
  return (
    <Layout categories={categories}>
    <div className="pl-2 md:pl-0 py-3">
      <CommonToast />
      
      <div className="my-5">
        <Heading>
          We&apos;d <span className="yellow">Love</span> To Hear From You
        </Heading>
        <Text className="py-5 md:w-1/2">
          Fit Cornerz is here to help you, our experts are available to answer
          any questions you might have. We&apos;ve got the answers.
        </Text>
        <div className="flex gap-2 items-center">
          <HiOutlineMail />
          <p>FitCornerz@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center py-3">
          <IoCallOutline />
          <p>+962798907906</p>
        </div>
      </div>
      <div>
        <Heading>
          Send Us A <span className="yellow">Message</span>
        </Heading>
        <div className="grid md:grid-cols-2 gap-3 my-5">
          <InputBox
            label="Your name"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
          />
          <InputBox
            label="Email address"
            name="email"
            placeholder="John@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
          <InputBox
            label="Phone number"
            name="phoneNumber"
            placeholder="00962799809878"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <InputBox
            label="Subject"
            name="subject"
            placeholder="Type here"
            value={values.subject}
            onChange={handleChange}
          />
        </div>
        <div className="pr-3">
          <p className="font-semibold">Message</p>
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
            <CustomButton onClick={handleSubmit} >
                Submit
            </CustomButton>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const props = {
    categories: []
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