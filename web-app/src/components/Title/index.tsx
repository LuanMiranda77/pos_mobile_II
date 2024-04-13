import React from "react";
interface Props {
  title: string;
  className?: string;
  isButton?: boolean;
  nameButton?: string;
  fnButton?: () => void;
}

const Title: React.FC<Props> = ({ title, isButton, fnButton, nameButton }) => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <legend className="font-bold mt-2 text-2xl text-[#32264D]">{title}</legend>
        {isButton && (
          <button className="btn" onClick={fnButton}>
            {nameButton}
          </button>
        )}
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default Title;
