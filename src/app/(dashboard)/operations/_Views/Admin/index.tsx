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
        <div className="flex h-auto w-full flex-col items-center xl:flex-row xl:px-10">
          <IncomeChartContainer />
          <MostSellsChartContainer />
        </div>

        <div className="mt-4 h-auto w-full px-5 xl:px-10">
          <div className="h-auto w-full">
            <MonthExpensesChartContainer />
            <EarningsChartContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
