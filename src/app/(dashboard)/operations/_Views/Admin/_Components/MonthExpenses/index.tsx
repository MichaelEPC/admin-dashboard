import { getYearsWorked } from "../../utils/General";
import { getMonthExpensesAction } from "../../utils/GetMonthExpeses";
import MonthExpensesChart from "./MonthExpensesChart";

const MonthExpensesChartContainer = async () => {
  // @ts-ignore
  const list = await getMonthExpensesAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    // Manejar el error o retornar fallback
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="mt-4 flex h-auto w-full items-center justify-center x2:mt-0">
      <MonthExpensesChart list={list} years={years} />
    </div>
  );
};

export default MonthExpensesChartContainer;
