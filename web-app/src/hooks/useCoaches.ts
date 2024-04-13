/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Classes } from "../class/Classes";
import { Coache } from "../class/Coache";
import { Schedule } from "../class/Schedule";
import { api } from "../config/api";
import Coaches from "../pages/Coaches";

export const options = [
  { id: 2, label: "Segunda-feira" },
  { id: 3, label: "Terça-feira" },
  { id: 4, label: "Quarta-feira" },
  { id: 5, label: "Quinta-feira" },
  { id: 6, label: "Sexta-feira" },
  { id: 7, label: "Sábado" },
  { id: 1, label: "Domingo" },
];

export function useCoaches() {
  const filterInit = {
    subject: "",
    weerkDay: 0,
    hour: "",
  };
  const typingTimer = useRef<number | null>(null);
  const [coaches, setCoaches] = useState<Coache>(new Coache());
  const [schedule, setSchedule] = useState<Schedule>(new Schedule());
  const [filter, setFilter] = useState(filterInit);
  const [data, setData] = useState<Array<Classes>>(new Array<Classes>());
 
  const optionsMateria = [
    { id: "AD", label: "Analise de Dados" },
    { id: "AA", label: "Analise de algoritimos" },
    { id: "SD", label: "Sistemas distribuidos" },
  ];
  function saveData() {
    api
    .post("classes/", coaches)
    .then((resp) => {
      console.log(resp.data);
      setCoaches(new Coache());
    })
    .catch((e) => console.error(e));
  }

  async function loadData(subject: string, day: number, hour: string) {
    let filter: string = "";

    if (subject != "") {
      filter += `?subject=${subject}`;
    }
    if (day != 0) {
      filter += filter != "" ? `&weekDay=${day}` : `?weekDay=${day}`;
    }
    if (hour != "") {
      filter += filter != "" ? `&time=${hour}` : `?time=${hour}`;
    }
    api
      .get("classes/" + filter)
      .then((resp) => {
        const dados = [...resp.data] as Array<Classes>;
        setData(dados);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    loadData("", 0, "");
  }, []);

  const handleKeyUp = () => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    typingTimer.current = window.setTimeout(() => {
      loadData(filter.subject, filter.weerkDay, filter.hour);
    }, 500);
  };

  function addAulas(){
    coaches.schedule.push(schedule);
  }

  return {
    coaches,
    setCoaches,
    saveData,
    loadData,
    data,
    setData,
    options,
    filter,
    setFilter,
    handleKeyUp,
    optionsMateria,
    schedule,
    setSchedule,
  };
}
