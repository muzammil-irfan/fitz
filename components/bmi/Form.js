import React, { useState } from "react";
import backendHost from "../../utils/backendHost";
import CustomButton from "../common/CustomButton";
import InputBox from "../common/InputBox";
import axios from 'axios';

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
    })
    .catch(err=>{
      console.log(err);
    })
  };
  return (
    <div className="grid md:grid-cols-2 md:w-2/3 gap-3 my-3">
      <InputBox
        label={"Age"}
        placeholder="2 - 100 years"
        name="age"
        value={values.age}
        onChange={handleChange}
      />
      <div>
        <p className="font-semibold">Gender</p>
        <div className="flex items-center gap-2 my-1">
            <input type="radio" id="male" value="m" name="gender"  className="" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="f" name="gender"  className="ml-2" />
            <label htmlFor="female">Female</label>
        </div>
      </div>
      <InputBox
        label={"Height"}
        placeholder="cm"
        name="height"
        value={values.height}
        onChange={handleChange}
      />
      <InputBox
        label={"Weight"}
        placeholder="kg"
        name="weight"
        value={values.weight}
        onChange={handleChange}
      />
      <InputBox
        label={"Email"}
        placeholder="john@gmail.com"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <div className="md:flex justify-end items-center md:gap-3 " >
        <div className="">
          <button className="px-6 py-2 yellow yellow-border w-full sm:w-">Clear</button>
        </div>
        <div className="my-2 md:my-0">
          <button className="yellow-background px-4 py-2 w-full sm:w- " onClick={handleSubmit}>Calculate</button>
        </div>
      </div>
    </div>
  );
}
