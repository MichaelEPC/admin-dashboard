"use client";
import React, { Suspense, useEffect } from "react";
import { CardUsageExample } from "app/app/_components/CardInformative";
import { DonutChartGraphic } from "app/app/_components/DonutChart";
import { AreaChartGraphic } from "app/app/_components/Areachart";
import { CalloutCard } from "app/app/_components/TextCards";
import { TableDashBoard } from "app/app/_components/TableTask";
import { TableTeamMembers } from "app/app/_components/TableTeamMembers";
import {
  taskNameCategories,
  taskNameContent,
  employeesCategories,
  employeeContent,
} from "./_Views/Admin/tableContent";
import { getCompany } from "app/actions/Company/GetCompany";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import Admin from "./_Views/Admin";
import EmployeeView from "./_Views/EmployeeView";
const home = () => {
  const [isEmployee, setIsEmployee] = React.useState(true);

  useEffect(() => {
    const fillInfo = async () => {
      const user = await isUserLog();
      if (user?.rol === "owner") {
        setIsEmployee(false);
        return;
      }
      setIsEmployee(true);
    };
    fillInfo();
  }, []);
  return <>{isEmployee ? <EmployeeView /> : <Admin />}</>;
};

export default home;
