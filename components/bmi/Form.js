import React, { useState } from "react";
import backendHost from "../../utils/backendHost";
import CustomButton from "../common/CustomButton";
import InputBox from "../common/InputBox";
import axios from 'axios';
import CommonToast from "../common/CommonToast";
import {toast} from 'react-toastify';

export default function BMIForm() {
  const initialValues = {
    age: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = ()=>{
    let submit = false;
    for(let keys in values){
      submit = values[keys].length !== 0;
    };
    if(submit){
      const obj = {
        age: Number(values.age),
        gender: values.gender,
        height: Number(values.height),
        weight: Number(values.weight),
        email: values.email
      };
      axios.post(`${backendHost}/bmi`,obj)
      .then(res=>{
        console.log(res);
        setValues(initialValues);
        toast.success("Thank you. We have sended your BMI successfully")
      })
      .catch(err=>{
        console.log(err);
        toast.error("Request failed. Please try again");
      })
    } else {
      toast.error("Please fill the form carefully");
    }
  };
  return (
    <div className="grid md:grid-cols-2 md:w-2/3 gap-3 my-3">
      <InputBox
        label={"Age"}
        type="number"
        placeholder="2 - 100 years"
        name="age"
        value={values.age}
        onChange={handleChange}
      />
      <div>
      <CommonToast />
        <p className="font-semibold">Gender</p>
        <div className="flex items-center gap-2 my-1">
            <input type="radio" id="male" value="m" name="gender"  className="" checked={values.gender == "m"} onChange={handleChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="f" name="gender"  className="ml-2" checked={values.gender == "f"} onChange={handleChange} />
            <label htmlFor="female">Female</label>
        </div>
      </div>
      <InputBox
        label={"Height"}
        type="number"
        placeholder="cm"
        name="height"
        value={values.height}
        onChange={handleChange}
      />
      <InputBox
        label={"Weight"}
        placeholder="kg"
        type="number"
        name="weight"
        value={values.weight}
        onChange={handleChange}
      />
      <InputBox
        label={"Email"}
        placeholder="john@gmail.com"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <div className="md:flex justify-end items-center md:gap-3 " >
        <div className="">
          <button className="px-6 py-2 yellow yellow-border w-full sm:w-" onClick={()=>{setValues(initialValues)}}>Clear</button>
        </div>
        <div className="my-2 md:my-0">
          <button className="yellow-background px-4 py-2 w-full sm:w- " onClick={handleSubmit}>Calculate</button>
        </div>
      </div>
    </div>
  );
}
