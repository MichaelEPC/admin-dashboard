import { getYearsWorked } from "../../utils/General";
import { getBillsAction } from "../../utils/GetBills";
import BillsChart from "./BillChart";

const BillsChartContainer = async () => {
  // @ts-ignore
  const list = await getBillsAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="flex h-auto w-full items-center justify-center">
      <BillsChart list={list} years={years} />
    </div>
  );
};

export default BillsChartContainer;
