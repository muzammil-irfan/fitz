import React from "react";

export default function InputBox({
  name,
  label,
  onChange,
  value,
  placeholder,
  type,
  checked,
}) {
  return (
    <div className="">
      <p className="font-semibold">{label}</p>
      <input
        name={name}
        className="w-2/3 md:w-1/2 border-slate-100 my-1 border p-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        checked={checked}
        
      />
    </div>
  );
}
