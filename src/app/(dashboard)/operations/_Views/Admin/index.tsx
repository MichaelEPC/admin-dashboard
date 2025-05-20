import EarningsChartContainer from "./_Components/EarningsContainer";
import MonthExpensesChartContainer from "./_Components/MonthExpenses";
import IncomeChartContainer from "./_Components/IncomeContainer";
import MostSellsChartContainer from "./_Components/MostSellContainer";

const Admin = () => {
  return (
    <section className="flex h-auto w-full justify-center">
      <div className="flex h-auto w-full flex-col items-center py-4">
        <div className="prex1:flex-row flex h-auto w-full flex-col items-center justify-between x2:w-[1400px] x2:px-4">
          <IncomeChartContainer />
          <EarningsChartContainer />
        </div>

        <div className="mt-4 flex h-auto w-full items-center justify-center xl:px-4">
          <div className="flex h-auto w-full flex-col items-center x3S:flex-row">
            <MonthExpensesChartContainer />
            <MostSellsChartContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
