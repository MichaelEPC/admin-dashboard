import { getYearsWorked } from "../../utils/General";
import { getMonthExpensesAction } from "../../utils/GetMonthExpeses";
import MonthExpensesChart from "./MonthExpensesChart";

const MonthExpensesChartContainer = async () => {
  // @ts-ignore
  const list = await getMonthExpensesAction();

  const years = getYearsWorked({
    list: list,
  });

  return (
    <div className="h-auto w-full">
      <MonthExpensesChart list={list} years={years} />
    </div>
  );
};

export default MonthExpensesChartContainer;
