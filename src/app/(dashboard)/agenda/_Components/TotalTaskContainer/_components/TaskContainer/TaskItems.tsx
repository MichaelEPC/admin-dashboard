import { OpenDialogConfigTask } from "./OpenDialogFormConfigTask/OpenDialogAddTask";

const TaskItems = ({
  id,
  name,
  state,
  days,
}: {
  id: string;
  name: string;
  state: string;
  days: string;
}) => {
  const capitalizeFirstLetter = (str: string) => {
    if (!str) {
      return "";
    }
    if (str.length >= 24) {
      str = `${str.slice(0, 24)}...`;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="mt-2 flex flex-col items-center justify-between border-b-2 border-ligh-gray p-1 px-4 md:flex-row">
      <p className="text-lg font-semibold">
        {`Task: `}

        <span className="font-semibold text-principal-color">
          {capitalizeFirstLetter(name)}
        </span>
      </p>
      <p className="text-lg font-semibold">
        {`State: `}
        <span className="font-semibold text-principal-color underline">
          {capitalizeFirstLetter(state)}
        </span>
      </p>
      <div className="flex items-center">
        <p className="text-lg font-semibold">
          {`Limit days: `}
          <span className="font-semibold text-principal-color">{days}</span>
        </p>
        <div className="ml-3 flex cursor-pointer items-center justify-center">
          <OpenDialogConfigTask id={id} />
        </div>
      </div>
    </div>
  );
};

export default TaskItems;
