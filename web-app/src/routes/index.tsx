/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coaches from "../pages/Coaches";
import ListCoaches from "../pages/Coaches/list";
import Home from "../pages/Home";
import { Notfound } from "../pages/NotFound";

interface PropsRoute {
  path: string;
  title?: string;
  component: ReactNode;
  icon?: ReactNode;
}

export const listRoutes = [
  {
    path: "/home",
    title: "Inicio",
    component: <Home />,
  } as PropsRoute,
  {
    path: "/cad-coaches",
    title: "Cadastro de Professores",
    component: <Coaches />,
  } as PropsRoute,
  {
    path: "/coaches",
    title: "Lista Professores",
    component: <ListCoaches />,
  } as PropsRoute,
] as Array<PropsRoute>;

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="">Carregando....</div>}>
        <Routes>
          {listRoutes.map((rota, key) => (
            <Route key={key} path={rota.path} element={rota.component} />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesApp;
