"use server";

import { TableTeamMembers } from "app/app/_components/TableTeamMembers";
import { getCompany } from "app/actions/Company/GetCompany";
import { DonutChartGraphic } from "./_Components/DonutChart";
import { AreaChartOperationAdmin } from "./_Components/AreaChart";
import { TableDashBoard } from "app/app/_components/TableTask";
import { TableTotalTasks } from "./_Components/TableTasks";
import { CardCashFlowContainer } from "./_Components/CardCashFlowContainer";
import { BarListGraphic } from "app/app/_components/BarListGraphic";
import { MostSoldProductContainer } from "./_Components/MostSoldProductContainer";
import { CardIncomesContainer } from "./_Components/CardIncomesContainer";
import { CardProductsContainer } from "./_Components/CardNumberProductsContainer";
import { MonthlyExpensesContainer } from "./_Components/MonthlyExpensesContainer";
import { SellsProductsContainer } from "./_Components/SoldNumberProductContainer";

const Admin = () => {
  return (
    <>
      <section className="h-auto w-full x2:px-40">
        <div className="mt-4 grid h-auto w-full grid-cols-3 gap-3">
          <CardCashFlowContainer />
          <CardIncomesContainer />
          <CardProductsContainer />
        </div>
        <div className="mt-10 x2:px-12 x4:px-52">
          <div className="flex h-auto w-full flex-col justify-center gap-2 p-2 md:flex-row">
            <div className="flex h-auto w-[1000px] flex-col items-center justify-center">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-2 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
                <span className="font-bold uppercase tracking-wide text-white">
                  Products with most earns
                </span>
              </div>
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-2 py-4 shadow-md">
                <MostSoldProductContainer />
              </div>
            </div>

            <div className="flex h-auto w-full flex-col justify-center md:w-[1000px]">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-2 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
                <span className="font-bold uppercase tracking-wide text-white">
                  Products with most sells
                </span>
              </div>
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-2 py-4 shadow-md">
                {/* <CalloutCard /> */}
                <SellsProductsContainer />
              </div>
            </div>

            <div className="flex h-auto w-full flex-col justify-center md:w-full">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-2 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
                <span className="font-bold uppercase tracking-wide text-white">
                  Month expenses
                </span>
              </div>
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-2 py-4 shadow-md">
                {/* <CalloutCard /> */}
                <MonthlyExpensesContainer />
              </div>
            </div>
          </div>
          <div className="h-auto w-full">
            {/* <TableTeamMembers
              key={2}
              // @ts-ignore
              tableCategories={employeesCategories}
              content={employeeContent}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
