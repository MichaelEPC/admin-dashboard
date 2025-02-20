import DonutOperationsContainer from "./_Components/DonutContainer";
import { OpenDialogAddOperation } from "./_Components/OpenDialogForm/OpenDialogAddTask";
import OperationItemsContainer from "./_Components/OperationsItemsContainer";
import EarningsChartContainer from "./_Components/EarningsContainer";
import { AreaChartHero } from "./_Components/AreaChartHero";

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
          <div className="flex items-center">
            <h2 className="mr-4 text-2xl font-semibold text-text-color">
              Last works
            </h2>
            <OpenDialogAddOperation />
          </div>

          <div className="flex h-auto w-full justify-center">
            <OperationItemsContainer />
            <AreaChartHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
