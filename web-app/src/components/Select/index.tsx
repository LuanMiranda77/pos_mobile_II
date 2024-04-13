/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SelectHTMLAttributes } from "react";

interface Iprops extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<any>;
  classContainer?:string;
}

const Select: React.FC<Iprops> = (props) => {
  return (
    <div className={`my-5 ${props.classContainer}`}>
      <legend className="text-[#9C98A6]">{props.label}</legend>
      <select
        className="bg-[#FAFAFC]  px-2 border border-[#E6E6F0] rounded-md min-h-12 px-2 focus:border-primary w-full"
        onChange={props.onChange}
      >
        <option className="hover:bg-[#EBEBF5]" value={''}>Selecione...</option>
        {props.options.length >0? props.options.map((op) => (
          <option key={op.id} className="border-2 border-white hover:bg-green-200" value={op.id}>
            {op.label}
          </option>
        )):<option>Não existe opções</option>}
      </select>
    </div>
  );
};

export default Select;
