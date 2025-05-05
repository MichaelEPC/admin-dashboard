import EarningsChartContainer from "./_Components/EarningsContainer";
import MonthExpensesChartContainer from "./_Components/MonthExpenses";
import IncomeChartContainer from "./_Components/IncomeContainer";
import MostSellsChartContainer from "./_Components/MostSellContainer";

const Admin = () => {
  return (
    <section className="h-auto w-full">
      <div className="ml-4 mt-2 flex h-auto">
        <h2 className="text-2xl font-bold text-principal-color">Operations</h2>
      </div>

      <div className="flex h-auto w-full flex-col items-center py-4">
        <div className="flex h-auto w-full flex-col items-center justify-between xl:w-[1400px] xl:px-4 x2:flex-row">
          <IncomeChartContainer />
          <EarningsChartContainer />
        </div>

        <div className="mt-4 flex h-auto w-full items-center justify-center xl:px-4">
          <div className="x3S:flex-row flex h-auto w-full flex-col items-center">
            <MonthExpensesChartContainer />
            <MostSellsChartContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
