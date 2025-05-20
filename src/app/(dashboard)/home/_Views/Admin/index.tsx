"use server";

import { CardCashFlowContainer } from "./_Components/CardCashFlowContainer";
import { MostSoldProductContainer } from "./_Components/MostSoldProductContainer";
import { CardIncomesContainer } from "./_Components/CardIncomesContainer";
import { CardProductsContainer } from "./_Components/CardNumberProductsContainer";
import { MonthlyExpensesContainer } from "./_Components/MonthlyExpensesContainer";
import { SellsProductsContainer } from "./_Components/SoldNumberProductContainer";
import { AreaIncomesNetContainer } from "./_Components/AreaNetIncomesContainer ";
import { AreaAllIncomesNetContainer } from "./_Components/AreaAllNetIncomesContainer  ";

const Admin = () => {
  return (
    <>
      <section className="h-auto w-full px-0 x3:px-40">
        <div className="mt-10 px-0 x2:px-12 x4:px-52">
          <div className="mb-2 mt-4 grid h-auto w-full grid-cols-1 gap-3 mb:grid-cols-2 md:grid-cols-3">
            <CardCashFlowContainer />
            <CardIncomesContainer />
            <div className="block mb:hidden md:block">
              <CardProductsContainer />
            </div>
          </div>

          <div className="mb: mb-4 mt-4 hidden h-auto w-full items-center justify-center mb:flex md:hidden">
            <CardProductsContainer />
          </div>

          {/* First layer */}
          <div className="flex h-auto w-full flex-col items-center justify-center gap-2 md:p-0 xl:flex-row xl:p-2 xl:px-0">
            <div className="flex h-auto w-full flex-col items-center justify-center xl:w-[1000px]">
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

            <div className="flex h-auto w-full flex-col justify-center xl:w-[1000px]">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color p-0 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72 xl:px-2">
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
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-0 py-4 shadow-md xl:p-2">
                {/* <CalloutCard /> */}
                <MonthlyExpensesContainer />
              </div>
            </div>
          </div>

          {/* Second Layer */}

          <div className="flex h-auto w-full flex-col justify-center gap-2 p-0 xl:flex-row xl:p-2">
            <div className="flex h-auto w-full flex-col items-center justify-center">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-2 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
                <span className="font-bold uppercase tracking-wide text-white">
                  Net profit earns
                </span>
              </div>
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-0 py-4 shadow-md xl:p-2">
                <AreaIncomesNetContainer />
              </div>
            </div>

            <div className="flex h-auto w-full flex-col justify-center md:w-full">
              {/* Title bar graphic */}
              <div className="relative flex h-auto w-32 skew-x-3 items-center justify-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-2 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
                <span className="font-bold uppercase tracking-wide text-white">
                  All net incomes
                </span>
              </div>
              <div className="mt-2 flex h-auto w-full items-center justify-center rounded-lg border-2 border-principal-color bg-white p-0 py-4 shadow-md xl:p-2">
                {/* <CalloutCard /> */}
                <AreaAllIncomesNetContainer />
              </div>
            </div>
          </div>

          {/* Third Layer */}
        </div>
      </section>
    </>
  );
};

export default Admin;
