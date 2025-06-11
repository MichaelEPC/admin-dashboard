import HistoryItemsEarnings from "./HistoryItemsEarnings";

interface Props {
  cashflows: [];
  hideDate?: boolean;
}
const HistoryEarningsChart = ({ cashflows, hideDate }: Props) => {
  return (
    <div className="mt-2 border-t-2 border-ligh-gray pt-2">
      <div>
        {cashflows.slice(0, 3).map((cashflow) => {
          return (
            <HistoryItemsEarnings
              // @ts-expect-error
              key={cashflow.id}
              cashflow={cashflow}
              hideDate={hideDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryEarningsChart;
