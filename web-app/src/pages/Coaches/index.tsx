import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { PiWarningOctagon } from "react-icons/pi";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import Header from "../../components/header";
import { useCoaches } from "../../hooks/useCoaches";
const Coaches: React.FC = () => {
  const { coaches, setCoaches, saveData, options, optionsMateria, schedule, setSchedule } = useCoaches();
  return (
    <div className="mb-20">
      <Header
        background="bg-[#56CCF2]"
        title="Que incrível que você quer ensinar algo."
        subTitile="O primeiro passo, é preencher esse formulário de inscrição."
      />
      <div className="flex justify-center">
        <div className="w-6/12" style={{ marginTop: "-50px" }}>
          <div className="card p-10">
            <Title title="Seus dados" />
            <Input
              type="text"
              label="Nome completo"
              value={coaches.name}
              onChange={(e) => setCoaches({ ...coaches, name: e.target.value })}
            />
            <Input
              type="text"
              label="Link da sua foto (comece com //http)"
              value={coaches.avatar}
              onChange={(e) => setCoaches({ ...coaches, avatar: e.target.value })}
            />
            <Input
              type="text"
              label="Whatsapp (somente números)"
              value={coaches.whatsapp}
              onChange={(e) => setCoaches({ ...coaches, whatsapp: e.target.value })}
            />
            <TextArea
              label="Biografia"
              value={coaches.bio}
              onChange={(e) => setCoaches({ ...coaches, bio: e.target.value })}
            />

            <Title title="Sobre a aula" />
            <Select
              label="Matéria"
              options={optionsMateria}
              value={coaches.subject}
              onChange={(e) => setCoaches({ ...coaches, subject: e.target.value })}
            />
            <Input
              type="number"
              label="Custo da sua hora por aula (em R$)"
              value={coaches.cost}
              onChange={(e) => setCoaches({ ...coaches, cost: Number(e.target.value) })}
            />
            <Title
              title="Horários disponíveis"
              nameButton="+ Novo horário "
              isButton
              fnButton={() =>
                setCoaches((old) => {
                  return {
                    ...old,
                    schedule: [...old.schedule, schedule],
                  };
                })
              }
            />
            <div className="flex">
              <Select
                classContainer="w-6/12 mr-3"
                label="Dia da semana"
                options={options}
                value={schedule.weekDay}
                onChange={(e) => setSchedule({ ...schedule, weekDay: Number(e.target.value) })}
              />
              <Input
                classContainer="w-3/12 mr-3"
                type="text"
                label="Das"
                value={schedule.hourIni}
                onChange={(e) => setSchedule({ ...schedule, hourIni: e.target.value })}
              />
              <Input
                classContainer="w-3/12 mr-3"
                type="text"
                label="Até"
                value={schedule.hourFin}
                onChange={(e) => setSchedule({ ...schedule, hourFin: e.target.value })}
              />
            </div>
            {coaches.schedule.length > 0 &&
              coaches.schedule.map((item, index) => (
                <div className="grid grid-cols-4">
                  <legend>{item.weekDay && options[options.findIndex((i) => i.id == item.weekDay)].label}</legend>
                  <legend>{item.hourIni}</legend>
                  <legend>{item.hourFin}</legend>
                  <i
                    className="text-red-700 cursor-pointer"
                    onClick={() =>
                      setCoaches((old) => {
                        return {
                          ...old,
                          schedule: old.schedule.filter((item, i) => i !== index),
                        };
                      })
                    }
                  >
                    <FaTrashAlt />
                  </i>
                </div>
              ))}
          </div>
          <div className="flex bg-[#FAFAFC] p-10 justify-between">
            <div className="flex items-center">
              <PiWarningOctagon className="mr-3" size={32} />
              <legend className="text-[#A8A8B3]">
                Importante! <br />
                Preencha todos os dados
              </legend>
            </div>
            <button className="btn-primary h-14" onClick={saveData}>
              Salvar cadastro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
