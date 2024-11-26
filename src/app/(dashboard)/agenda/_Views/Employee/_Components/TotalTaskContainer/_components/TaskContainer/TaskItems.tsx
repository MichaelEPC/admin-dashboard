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
    <div className="mb-2 mt-2 flex h-auto w-full flex-col items-center justify-between rounded-lg border-b-2 border-ligh-gray p-1 px-4 md:flex-row">
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
    </div>
  );
};

export default TaskItems;
