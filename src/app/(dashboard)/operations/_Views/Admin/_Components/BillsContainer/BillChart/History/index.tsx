import HistoryItemsEarnings from "./HistoryItemsEarnings";

interface Props {
  cashflows: [];
}
const HistoryEarningsChart = ({ cashflows }: Props) => {
  return (
    <div className="mt-2 border-t-2 border-ligh-gray pt-2">
      <div>
        {cashflows.slice(0, 3).map((cashflow) => {
          return (
            // @ts-expect-error
            <HistoryItemsEarnings key={cashflow.id} cashflow={cashflow} />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryEarningsChart;
