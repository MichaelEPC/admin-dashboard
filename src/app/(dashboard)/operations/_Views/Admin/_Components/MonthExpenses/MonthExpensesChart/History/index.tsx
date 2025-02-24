import HistoryItemsMonthExpenses from "./HistoryItemsMonthExpenses";

interface Props {
  cashflows: [];
}
const HistoryMonthExpensesChart = ({ cashflows }: Props) => {
  return (
    <div className="mt-2 border-t-2 border-ligh-gray pt-2">
      <div>
        {cashflows.slice(0, 5).map((cashflow) => {
          return (
            // @ts-expect-error
            <HistoryItemsMonthExpenses key={cashflow.id} cashflow={cashflow} />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryMonthExpensesChart;
