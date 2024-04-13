/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Coache } from "../../class/Coache";
import { options } from "../../hooks/useCoaches";
import { formatMoney } from "../../utils";
import { segundosParaHorasMinutos } from "../../utils/convert";

interface Iprops {
  coach: Coache;
  classes?: any;
}

const CardCoache: React.FC<Iprops> = (props) => {
  return (
    <div className="mb-5">
      <div className="card p-5">
        <div className="flex items-center">
          <img className="rounded-full mr-5" width="60px" src={props.coach.avatar} alt="" />
          <div>
            <legend className="font-bold text-xl text-[#32264D]">{props.coach.name}</legend>
            <legend className="text-[#32264D] text-xs">{props.classes && props.classes.subject}</legend>
          </div>
        </div>
        <div className="my-5 text-[#32264D]">{props.coach.bio}</div>
        <div>
          <legend className="font-bold text-xl text-[#32264D]">Dias de aulas</legend>
          {props.classes?.classesSchedule.map((e: any, key: number) => (
            <div key={key}>
              <p>
                {e?.weekDay && options[options.findIndex((i) => i.id == e?.weekDay)].label} de{" "}
                {segundosParaHorasMinutos(e?.hourIni)} até {segundosParaHorasMinutos(e?.hourFin)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex bg-[#FAFAFC] p-5 justify-between">
        <div className="flex items-center">
          <legend className="text-[#A8A8B3] mr-4">Preço/hora</legend>
          <legend className="font-bold"> R$ {props.classes && formatMoney(props.classes.cost)}</legend>
        </div>
        <a
          href={`https://wa.me/55${props.coach.whatsapp
            .replace("(", "")
            .replace(")", "")
            .replace("-", "")
            .replace(" ", "")}`}
          target="_blank"
        >
          <button className="text-white bg-[#6FCF97] h-12 w-30 btn flex items-center">
            <BsWhatsapp className="mr-3" /> Entrar em contato
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardCoache;
