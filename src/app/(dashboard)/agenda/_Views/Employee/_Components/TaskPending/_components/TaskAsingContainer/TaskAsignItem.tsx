"use client";

const TaskPendingItemsAgenda = ({
  id,
  taskName,
  taskState,
  days,
}: {
  id: string;
  taskName: string;
  taskState: string;
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
    <div className="mb-2 flex flex-col items-center justify-between rounded-lg border-b-2 border-ligh-gray p-1 px-4 xl:flex-row">
      <p className="mb-2 h-auto w-96 text-lg font-semibold xl:mb-0">
        Task name:
        <span className="text-principal-color">{` ${capitalizeFirstLetter(taskName)}`}</span>
      </p>

      <p className="mb-2 h-auto w-32 text-lg font-semibold xl:mb-0">
        State: <span className="text-principal-color">{` ${taskState}`}</span>
      </p>

      <div className="w flex h-auto w-16 items-center">
        <p className="mb-2 text-lg font-semibold xl:mb-0">
          Days: <span className="text-principal-color">{` ${days}`}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskPendingItemsAgenda;
