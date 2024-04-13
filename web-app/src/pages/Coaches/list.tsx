import React from "react";
import CardCoache from "../../components/CardCoache";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Header from "../../components/header";
import { useCoaches } from "../../hooks/useCoaches";

// import { Container } from './styles';

const ListCoaches: React.FC = () => {
  const { data, options, filter, setFilter, handleKeyUp } = useCoaches();

  return (
    <>
      <Header title="Estes são os coachs disponíveis." subTitile="" />
      <div className="mb-20 flex justify-center">
        <div className="p-10 flex flex-col justify-center w-6/12">
          <div className="flex" style={{ marginTop: "-100px" }}>
            <Input
              classContainer="w-4/12 mr-3"
              type="text"
              label="Matéria"
              value={filter.subject}
              onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
              onKeyUp={handleKeyUp}
            />
            <Select
              classContainer="w-4/12 mr-3"
              label="Dia da semana"
              options={options}
              value={filter.weerkDay}
              onChange={(e) => setFilter({ ...filter, weerkDay: Number(e.target.value) })}
              onKeyUp={handleKeyUp}
            />
            <Input
              classContainer="w-4/12"
              type="text"
              label="Horário"
              value={filter.hour}
              onChange={(e) => setFilter({ ...filter, hour: e.target.value })}
              onKeyUp={handleKeyUp}
            />
          </div>
          <div className="max-h-96 overflow-y-auto">
            {data.length > 0 ? (
              data.map((aula) => {
                return <CardCoache coach={aula.coache} classes={aula} />;
              })
            ) : (
              <div className="text-center text-[#9C98A6]">
                Nenhum coach encontrado <br />
                com sua pesquisa.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCoaches;
