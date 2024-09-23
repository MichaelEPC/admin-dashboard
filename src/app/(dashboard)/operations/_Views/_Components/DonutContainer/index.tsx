import { DonutChartOperation } from "./DonutChart";

const votesData = [
  {
    name: "Jan",
    sales: 10,
  },
  {
    name: "Feb",
    sales: 45,
  },
  {
    name: "Mar",
    sales: 50,
  },
];

const DonutOperationsContainer = async () => {
  return (
    <div className="flex h-auto w-2/5 flex-col items-center">
      <DonutChartOperation dataReceived={votesData} />
    </div>
  );
};

export default DonutOperationsContainer;
