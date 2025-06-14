import EarningsChartContainer from "./_Components/EarningsContainer";
import MonthExpensesChartContainer from "./_Components/MonthExpenses";
import IncomeChartContainer from "./_Components/IncomeContainer";
import MostSellsChartContainer from "./_Components/MostSellContainer";
import BillsChartContainer from "./_Components/BillsContainer";
import ClientsContainer from "./_Components/ClientsContainer";

const Admin = () => {
  return (
    <section className="flex h-auto w-full justify-center">
      <div className="flex h-auto w-full flex-col items-center py-4">
        <div className="flex h-auto w-full flex-col items-center justify-between prex1:flex-row x2:w-[1400px] x2:px-4">
          <IncomeChartContainer />
          <EarningsChartContainer />
        </div>

        <div className="mt-4 flex h-auto w-full items-center justify-center xl:px-4 x3S:px-24">
          <div className="flex h-auto w-full flex-col items-center x3S:flex-row">
            <MonthExpensesChartContainer />
            <MostSellsChartContainer />
          </div>
        </div>

        <div className="mt-4 flex h-auto w-full flex-col items-center justify-between prex1:flex-row x2:px-10">
          <div className="flex h-auto w-full flex-col items-center x3S:flex-row">
            <BillsChartContainer />
            <ClientsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
