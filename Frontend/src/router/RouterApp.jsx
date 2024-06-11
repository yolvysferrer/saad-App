import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../app/home/HomePage";
import { LoginPage } from "../login/pages/LoginPage";
import { ComprasPage } from "../app/administrativo/compras/ComprasPage";
import { ContabilidadPage } from "../app/administrativo/contabilidad/ContabilidadPage";
import { HabilitaduriaPage } from "../app/administrativo/habilitaduria/HabilitaduriaPage";
import { PresupuestoPage } from "../app/administrativo/presupuesto/PresupuestoPage";
import { DashboardPage } from "../app/dasboard/DashboardPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { login, themeState } from "@/slices/login/LoginSlice";
import { RegistroControl } from "@/app/administrativo/compras/components/RegistroControl";
import { Administrativo } from "@/app/administrativo/Administrativo";
import { Movimientos } from "@/app/administrativo/compras/components/Movimientos";
import { Cierres } from "@/app/administrativo/compras/components/Cierres";
import { Reportes } from "@/app/administrativo/compras/components/Reportes";
import { TablasBasicas } from "@/app/administrativo/compras/components/TablasBasicas";
import { PlanCompras } from "@/app/administrativo/compras/components/PlanCompras";

export const RouterApp = () => {
  let theme = localStorage.getItem("vite-ui-theme");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(themeState(theme));
  }, []);
  return (
    <>
      <ModeToggle />
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* RUTAS PRIVADAS */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/inicio" element={<DashboardPage />} />
          <Route path="/administrativo" element={<Administrativo />} />
          <Route path="/administrativo/compras" element={<ComprasPage />} />
          <Route
            path="/administrativo/compras/registro-control"
            element={<RegistroControl />}
          />
          <Route
            path="/administrativo/compras/plan-compras"
            element={<PlanCompras />}
          />
          <Route
            path="/administrativo/compras/movimientos"
            element={<Movimientos />}
          />
          <Route
            path="/administrativo/compras/cierres"
            element={<Cierres />}
          />
          <Route
            path="/administrativo/compras/reportes"
            element={<Reportes />}
          />
          <Route
            path="/administrativo/compras/tablas-basicas"
            element={<TablasBasicas />}
          />
          
          <Route path="/contabilidad" element={<ContabilidadPage />} />
          <Route path="/habilitaduria" element={<HabilitaduriaPage />} />
          <Route path="/presupuesto" element={<PresupuestoPage />} />
        </Route>
      </Routes>
    </>
  );
};
