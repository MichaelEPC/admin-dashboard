import { getYearsWorked } from "../../utils/General";
import { getCashFlowAction } from "../../utils/GetNewCashFlow";
import EarningsChart from "./EarningsChart";

const EarningsChartContainer = async () => {
  // @ts-ignore
  const list = await getCashFlowAction();

  const years = getYearsWorked({
    list: list,
  });

  return (
    <div>
      <EarningsChart list={list} years={years} />
    </div>
  );
};

export default EarningsChartContainer;
