import DonutOperationsContainer from "./_Components/DonutContainer";
import { OpenDialogAddOperation } from "./_Components/OpenDialogForm/OpenDialogAddTask";
import OperationItemsContainer from "./_Components/OperationsItemsContainer";
import EarningsChartContainer from "./_Components/EarningsContainer";
import MonthExpensesChartContainer from "./_Components/MonthExpenses";
import { ComboChartOperation } from "./_Components/SellsContainer/SellsChart/Areachart";

const Admin = () => {
  return (
    <section className="h-auto w-full">
      <div className="ml-4 mt-2 flex h-auto">
        <h2 className="text-2xl font-bold text-principal-color">Operations</h2>
      </div>

      <div className="flex h-auto w-full flex-col items-center py-4">
        <div className="flex h-auto w-full flex-col items-center xl:flex-row xl:px-10">
          <EarningsChartContainer />
        </div>

        <div className="mt-4 h-auto w-full px-5 xl:px-10">
          <div className="h-auto w-full">
            <MonthExpensesChartContainer />
            <ComboChartOperation list={[]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
