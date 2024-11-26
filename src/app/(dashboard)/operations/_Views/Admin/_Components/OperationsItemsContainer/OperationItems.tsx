import { OpenDialogConfigOperation } from "./_Components/OpenDialogForm/OpenDialogConfigOperation";
import { formatShortName } from "app/utils/generalTools";

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
    <div className="xl: mb-1 flex flex-col items-center justify-between border-b-2 border-ligh-gray px-2 py-2 xl:relative xl:flex-row">
      <div className="h-auto xl:w-96">
        <p className="mb-2 text-lg font-semibold xl:mb-0">
          Name:
          <span className="text-principal-color">{` ${formatShortName(name, 22)}`}</span>
        </p>
      </div>

      <div className="h-auto xl:w-52">
        <p className={`mb-2 text-lg font-semibold xl:sticky xl:mb-0`}>
          Amount:
          <span className="font-semibold text-text-color">{` ${amount}$`}</span>
        </p>
      </div>

      <div className="h-auto xl:w-52">
        <p className={`mb-2 text-lg font-semibold xl:sticky xl:mb-0`}>
          Category:
          <span
            className={category === "win" ? "text-green-400" : "text-red-500"}
          >
            {` ${category}`}
          </span>
        </p>
      </div>

      <div className={`flex h-auto items-center xl:w-52`}>
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
