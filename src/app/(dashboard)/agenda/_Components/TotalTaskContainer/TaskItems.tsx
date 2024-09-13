const TaskItems = ({
  name,
  state,
  initialDate,
  finalDate,
}: {
  name: string;
  state: string;
  initialDate: string;
  finalDate: string;
}) => {
  return (
    <div className="mt-2 flex items-center justify-between border-b-2 border-ligh-gray p-1 px-4">
      <p className="text-lg font-semibold text-test-color">
        {`Task: `}
        <span className="font-semibold text-principal-color">{name}</span>
      </p>
      <p className="text-lg font-semibold text-text-color">
        {`State: `}
        <span className="font-semibold text-principal-color underline">
          {state}
        </span>
      </p>
      <p className="text-lg font-semibold text-text-color">
        {`Date: `}
        <span className="font-semibold text-principal-color">
          {initialDate}
        </span>
        {` to `}
        <span className="font-semibold text-principal-color">{finalDate}</span>
      </p>
    </div>
  );
};

export default TaskItems;
