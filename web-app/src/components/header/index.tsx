import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subTitile: string;
  background?: string;
  fnBack?: () => void;
}

const Header: React.FC<Props> = ({ subTitile, title, background = "bg-primary", fnBack = () => {} }) => (
  <div className={`${background} px-10 py-5 text-white`}>
    <div className="flex items-center justify-between">
      <i className="cursor-pointer hover:text-black" onClick={fnBack}>
        <HiOutlineArrowNarrowLeft />
      </i>
      <Link to="/home">
        <span className="text-white hover:text-black">coach4me</span>
      </Link>
    </div>
    <div className="flex justify-center w-full">
      <div>
        <h1 className="w-7/12 text-3xl mb-5">{title}</h1>
        <h4 className="w-6/12">{subTitile}</h4>
      </div>
    </div>
  </div>
);

export default Header;
