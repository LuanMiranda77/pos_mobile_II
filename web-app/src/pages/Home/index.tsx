import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { LiaTvSolid } from "react-icons/lia";
import boys from "../../../public/boys.svg";

const Home: React.FC = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 sm:p-2 md:p-10 w-full items-center">
        <div className="flex-1">
          <span className="sm:text-5xl md:text-8xl font-bold">coach4me</span>
          <p className="m-0 text-xl mt-5">Encontre monitores</p>
          <p className="m-0  text-xl p-0">online facilmente.</p>
        </div>
        <div className="flex justify-end">
          <img src={boys} alt="logo" className="md:w-6/12" />
        </div>
      </div>
      <div className="flex items-center justify-between w-100 sm:p-2 md:p-10 w-full">
        <div className="flex items-center">
          <button className="flex items-center justify-center mr-4 btn-primary w-36 h-20">
            <IoBookOutline className="m-1" /> Estudar
          </button>
          <button className="flex items-center justify-center btn-secondary w-36 h-20">
            <LiaTvSolid className="m-1" /> Dar aulas
          </button>
        </div>
        <div className="flex items-center">
          Total de 285 conexões já realizadas <GiSelfLove className="ml-2" color="orange" />
        </div>
      </div>
    </>
  );
};

export default Home;
