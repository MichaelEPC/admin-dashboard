import { getAllOperationsAction } from "app/actions/Operation/GetAllOperations";
import OperationItems from "./OperationItems";

const OperationItemsContainer = async () => {
  const operationList = await getAllOperationsAction();
  console.log(operationList);

  return (
    <div className="mt-2 flex h-auto w-72 flex-col rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md xl:w-full">
      {operationList.map((operation: any) => {
        return (
          <OperationItems
            key={operation.id}
            id={operation.id}
            name={operation.operationName}
            category={operation.category}
            amount={operation.amount}
            month={operation.month}
          />
        );
      })}
    </div>
  );
};

export default OperationItemsContainer;
