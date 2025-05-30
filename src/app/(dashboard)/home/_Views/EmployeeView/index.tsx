"use client";

import React, { Suspense, useEffect } from "react";
import { CardUsageEmployees } from "./_Components/CardInformative";
import { TableDashBoard } from "app/app/_components/TableTask";
import { TableTeamMembers } from "app/app/_components/TableTeamMembers";
import SendRequestContainer from "./_Components/SendRequestContainer";
import VoteEmployee from "./_Components/VoteEmployeeContainer";

import {
  taskNameCategories,
  taskNameContent,
  employeesCategories,
  employeeContent,
} from "./tableContent";
import { getCompany } from "app/actions/Company/GetCompany";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";

const EmployeeView = () => {
  const [companyinfo, setCompanyInfo] = React.useState({});
  const [user, setUser] = React.useState({});

  useEffect(() => {
    const fillInfo = async () => {
      const infoUser = await isUserLog();
      // @ts-ignore
      setUser(infoUser);
      const company = await getCompany();
      setCompanyInfo(company);
    };
    fillInfo();
  }, []);

  return (
    <>
      <>
        {typeof companyinfo === "string" ? (
          <section className="flex h-auto w-full flex-col items-center x2:px-40">
            <h1 className="mt-2 text-4xl font-semibold text-principal-color">
              ¡Join a company!
            </h1>
            <h3 className="mt-2 font-semibold text-text-color underline">
              Start your new adventure by join in a company
            </h3>
            <Suspense>
              <SendRequestContainer />
            </Suspense>
          </section>
        ) : (
          ""
        )}
        {typeof companyinfo === "undefined" ? (
          <p>Join in a company for start getting your daily task</p>
        ) : (
          ""
        )}
        {typeof companyinfo === "object" ? (
          <section className="h-auto w-full x2:px-40">
            <div className="mt-4 grid h-auto w-full grid-cols-2 gap-3">
              <CardUsageEmployees operation="taskCompleted" />
              <CardUsageEmployees operation="taskAsign" />
            </div>
            <div className="mt-10 x2:px-12 x4:px-52">
              <div className="flex h-auto w-full flex-col items-center justify-center gap-2 p-2 sm:flex-row">
                <div className="flex h-auto w-full justify-center sm:w-3/4">
                  <TableDashBoard
                    key={1}
                    // @ts-expect-error
                    tableCategories={taskNameCategories}
                    // @ts-expect-error
                    content={taskNameContent}
                  />
                </div>
                <div className="flex h-auto w-auto flex-col items-center justify-center rounded-lg bg-white py-4 shadow-md ring-1 ring-ligh-gray sm:w-2/5">
                  <VoteEmployee data={{ ...companyinfo }} user={{ ...user }} />
                </div>
              </div>

              <div className="h-auto w-full">
                <TableTeamMembers
                  key={2}
                  // @ts-expect-error
                  tableCategories={employeesCategories}
                  content={employeeContent}
                />
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default EmployeeView;
