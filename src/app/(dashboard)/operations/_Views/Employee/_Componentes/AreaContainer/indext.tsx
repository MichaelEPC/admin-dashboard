import { getDataOperationsAction } from "app/actions/Operation/GetDataOperations";
import { AreaChartOperation } from "./Areachart";

const AreaContainer = async () => {
  const { list, resume } = await getDataOperationsAction();
  console.log(list);

  return (
    <div className="h-auto w-11/12">
      <AreaChartOperation chartData={list} resume={resume} />
    </div>
  );
};

export default AreaContainer;
