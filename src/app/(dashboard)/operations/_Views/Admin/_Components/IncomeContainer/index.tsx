import { getYearsWorked } from "../../utils/General";
import { getNetProfitIncomeAction } from "../../utils/GetIncome";
import IncomeChart from "./IncomeChart";

const IncomeChartContainer = async () => {
  // @ts-ignore
  const list = await getNetProfitIncomeAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    // Manejar el error o retornar fallback
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="flex h-auto w-full items-center justify-center">
      <IncomeChart list={list} years={years} />
    </div>
  );
};

export default IncomeChartContainer;
