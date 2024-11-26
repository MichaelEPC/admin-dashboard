"use client";

import React, { Suspense, useEffect } from "react";
import { CalloutCard } from "app/app/_components/TextCards";
import { TableTeamMembers } from "app/app/_components/TableTeamMembers";
import {
  taskNameCategories,
  taskNameContent,
  employeesCategories,
  employeeContent,
} from "./tableContent";
import { getCompany } from "app/actions/Company/GetCompany";
import { DonutChartGraphic } from "./_Components/DonutChart";
import { CardUsageExample } from "./_Components/CardInformative";
import { AreaChartOperationAdmin } from "./_Components/AreaChart";
import { TableDashBoard } from "app/app/_components/TableTask";
import { TableTotalTasks } from "./_Components/TableTasks";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";

const Admin = () => {
  const [companyinfo, setCompanyInfo] = React.useState({});

  useEffect(() => {
    const fillInfo = async () => {
      const company = await getCompany();
      setCompanyInfo(company);
    };
    fillInfo();
  }, []);
  return (
    <>
      <section className="h-auto w-full x2:px-40">
        <div className="mt-4 grid h-auto w-full grid-cols-3 gap-3">
          <CardUsageExample
            operation="productivityGoal"
            data={{ ...companyinfo }}
          />
          <CardUsageExample
            operation="taskCompleted"
            data={{ ...companyinfo }}
          />
          <CardUsageExample
            operation="showTotalEmployees"
            data={{ ...companyinfo }}
          />
        </div>
        <div className="mt-10 x2:px-12 x4:px-52">
          <div className="flex h-auto w-full flex-col items-center justify-center gap-2 p-2 sm:flex-row">
            <div className="flex h-80 w-full flex-col items-center justify-center rounded-lg border-2 border-ligh-gray bg-white py-4 shadow-md sm:w-2/5">
              <DonutChartGraphic dataReceived={{ ...companyinfo }} />
            </div>
            <div className="flex h-auto w-full justify-center sm:w-3/4">
              <AreaChartOperationAdmin />
            </div>
          </div>

          {/* Opinions */}
          <div className="flex h-auto w-full flex-col justify-center gap-2 p-2 md:flex-row">
            <div className="flex h-auto w-full items-center justify-center md:w-1/3">
              <div className="flex h-auto w-full items-center justify-center rounded-lg border-2 border-ligh-gray bg-white p-2 py-4 shadow-md">
                <CalloutCard />
              </div>
            </div>

            <div className="h-full w-full md:w-3/4">
              <TableTotalTasks key={1} tableCategories={taskNameCategories} />
            </div>
          </div>

          <div className="h-auto w-full">
            <TableTeamMembers
              key={2}
              tableCategories={employeesCategories}
              content={employeeContent}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
