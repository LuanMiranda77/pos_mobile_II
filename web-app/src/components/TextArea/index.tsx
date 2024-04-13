import React, { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea: React.FC<Props> = (props) => {
  return (
    <div className="my-5">
      <legend className="text-[#9C98A6]">{props.label}</legend>
      <textarea
        className={`bg-[#FAFAFC] border border-[#E6E6F0] rounded-md min-h-12 px-2 focus:border-primary w-full h-32`}
        {...props}
      />
    </div>
  );
};

export default TextArea;
