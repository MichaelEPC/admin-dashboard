import { OpenDialogConfigOperation } from "./_Components/OpenDialogForm/OpenDialogConfigOperation";

interface OperationItemsProps {
  id: string;
  name: string;
  category: string;
  amount: string;
  month: string;
}

const OperationItems: React.FC<OperationItemsProps> = ({
  id,
  name,
  category,
  amount,
  month,
}) => {
  return (
    <div className="mb-1 flex flex-col items-center justify-between rounded-lg border-b-2 border-ligh-gray xl:flex-row xl:pr-20">
      <p className="mb-2 text-lg font-semibold xl:mb-0">
        Name: <span className="text-principal-color">{` ${name}`}</span>
      </p>

      <p className="mb-2 text-lg font-semibold xl:mb-0">
        Amount:
        <span
          className={category === "win" ? "text-green-400" : "text-red-500"}
        >
          {` ${amount}`}
        </span>
      </p>

      <p className="mb-2 text-lg font-semibold xl:mb-0">
        Category:
        <span
          className={category === "win" ? "text-green-400" : "text-red-500"}
        >
          {` ${category}`}
        </span>
      </p>

      <div className="flex items-center">
        <p className="mb-2 text-lg font-semibold xl:mb-0">
          Month: <span className="text-principal-color">{` ${month}`}</span>
        </p>
        <div className="ml-2">
          <OpenDialogConfigOperation id={id} />
        </div>
      </div>
    </div>
  );
};

export default OperationItems;
