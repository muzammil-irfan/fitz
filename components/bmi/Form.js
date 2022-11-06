import React, { useState } from "react";
import backendHost from "../../utils/backendHost";
import CustomButton from "../common/CustomButton";
// import InputBox from "../common/InputBox";
import axios from "axios";
import CommonToast from "../common/CommonToast";
import { toast } from "react-toastify";
import { FormattedMessage, useIntl } from "react-intl";

export default function BMIForm() {
  const initialValues = {
    age: "",
    gender: "m",
    height: "",
    weight: "",
    email: "",
  };
  const intl = useIntl();
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue)=>({ ...prevValue, [name]: value }));
  };
  const handleRadioChange = (e) => {
    const {  value } = e.target;
    setValues((prevValue)=>({ ...prevValue, "gender": value }));

  };
  const handleSubmit = () => {
    let submit = false;
    for (let keys in values) {
      submit = values[keys].length !== 0;
    }
    if (submit) {
      const obj = {
        age: Number(values.age),
        gender: values.gender,
        height: Number(values.height),
        weight: Number(values.weight),
        email: values.email,
      };
      axios
        .post(`${backendHost}/bmi`, obj)
        .then((res) => {
          console.log(res);
          setValues(initialValues);
          toast.success("Thank you. We have sended your BMI successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Request failed. Please try again");
        });
    } else {
      toast.error("Please fill the form carefully");
    }
  };
  return (
    <div className="grid md:grid-cols-2 lg:w-2/3 gap-5 sm:gap-10 my-6">
      <CustomInputBox
        label={intl.formatMessage({ id: "page.bmi.form.age" })}
        type="number"
        placeholder="2 - 100 years"
        name="age"
        value={values.age}
        onChange={handleChange}
      />
      <div>
        <CommonToast />
        <p className="font-semibold">
          <FormattedMessage id="page.bmi.form.gender" />
        </p>
        <div class="radio-container">
          <span class="radio-subcontainer">
            <input
              type="radio"
              id="male"
              // name="gender"
              value="m"
              checked={values.gender == "m"}
              onChange={handleRadioChange}
            />
            <label for="male">
              <FormattedMessage id="page.bmi.form.male" />
            </label>

            <div class="check"></div>
          </span>

          <span class="radio-subcontainer">
            <input
              type="radio"
              id="female"
              // name="gender"
              value="f"
              checked={values.gender == "f"}
              onChange={handleRadioChange}
            />
            <label for="female">
              <FormattedMessage id="page.bmi.form.female" />
            </label>

            <div class="check"></div>
          </span>
        </div>
        <ul
          id="radio"
          className="hidden flex items-center gap-5 sm:gap-10 my-1"
        >
          <li className="radio-subcontainer ">
            <input
              type="radio"
              id="male"
              name="gender"
              value="m"
              checked={values.gender == "m"}
              onChange={handleChange}
            />
            <label for="male">
              <FormattedMessage id="page.bmi.form.male" />
            </label>

            <div class="check"></div>
          </li>
          <li className="radio-subcontainer ">
            <input
              type="radio"
              id="female"
              name="gender"
              value="f"
              checked={values.gender == "f"}
              onChange={handleChange}
            />
            <label for="female">
              <FormattedMessage id="page.bmi.form.female" />
            </label>

            <div class="check"></div>
          </li>
        </ul>
      </div>
      <CustomInputBox
        label={intl.formatMessage({ id: "page.bmi.form.height" })}
        type="number"
        placeholder="cm"
        name="height"
        value={values.height}
        onChange={handleChange}
      />
      <CustomInputBox
        label={intl.formatMessage({ id: "page.bmi.form.weight" })}
        placeholder="kg"
        type="number"
        name="weight"
        value={values.weight}
        onChange={handleChange}
      />
      <CustomInputBox
        label={intl.formatMessage({ id: "page.bmi.form.email" })}
        placeholder="john@gmail.com"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <div className="flex justify-end items-center  gap-5 flex-col-reverse md:flex-row  ">
        <div className="w-full md:w-min">
          <button
            className="px-6 py-2 yellow yellow-border w-full md:w-max"
            onClick={() => {
              setValues(initialValues);
            }}
          >
            <FormattedMessage id="page.bmi.form.clear" />
          </button>
        </div>
        <div className=" w-full md:w-min">
          <button
            className="yellow-background px-4 py-2 w-full md:w-max "
            onClick={handleSubmit}
          >
            <FormattedMessage id="page.bmi.form.calculate" />
          </button>
        </div>
      </div>
    </div>
  );
}

const CustomInputBox = ({
  name,
  label,
  onChange,
  value,
  placeholder,
  type,
  checked,
  className,
}) => {
  return (
    <div className="">
      <p className="font-bold text-sm">{label}</p>
      <input
        name={name}
        className="w-full border-slate-100 my-1 border p-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        checked={checked}
      />
    </div>
  );
};
