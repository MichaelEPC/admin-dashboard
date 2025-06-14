import { getYearsWorked } from "../../utils/General";
import { getCashFlowAction } from "../../utils/GetNewCashFlow";
import EarningsChart from "./EarningsChart";

const EarningsChartContainer = async () => {
  // @ts-ignore
  const list = await getCashFlowAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    // Manejar el error o retornar fallback
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="mt-4 flex h-auto w-full items-center justify-center x2:mt-0">
      <EarningsChart list={list} years={years} />
    </div>
  );
};

export default EarningsChartContainer;
