import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "date" | "number";
  label:string
  classContainer?:string;
}

const Input: React.FC<Props> = (props) => {
  return <div className={`my-5 ${props.classContainer}`}>
    <legend className="text-[#9C98A6]">{props.label}</legend>
    <input className="bg-[#FAFAFC] border border-[#E6E6F0] rounded-md min-h-12 px-2 focus:border-primary w-full" {...props} />
  </div>;
};

export default Input;
