import { getYearsWorked } from "../../utils/General";
import { getCashFlowAction } from "../../utils/GetNewCashFlow";
import SellsChart from "./SellsChart";

const SellsChartContainer = async () => {
  // @ts-ignore
  const list = await getCashFlowAction();

  const years = getYearsWorked({
    list: list,
  });

  return (
    <div>
      <SellsChart list={list} years={years} />
    </div>
  );
};

export default SellsChartContainer;
