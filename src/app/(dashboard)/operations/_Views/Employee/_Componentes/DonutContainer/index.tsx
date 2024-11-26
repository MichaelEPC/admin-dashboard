import { getDataOperationsAction } from "app/actions/Operation/GetDataOperations";
import { DonutChartOperation } from "./DonutChart";

const DonutOperationsContainer = async () => {
  const { list, resume } = await getDataOperationsAction();
  return (
    <div className="mb-1 flex h-auto w-96 flex-col items-center rounded-lg border-2 border-ligh-gray bg-white py-4 shadow-md xl:w-2/5">
      <DonutChartOperation data={list} />
    </div>
  );
};

export default DonutOperationsContainer;
