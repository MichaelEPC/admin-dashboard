"use client";

import { CompleteTaskAction } from "app/actions/Task/CompleteTask";
import { formatShortName } from "app/utils/generalTools";
import style from "./style.module.css";

const PendingItems = ({
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
  return (
    <div className="mb-1 flex w-full flex-col items-center justify-between rounded-lg border-2 border-ligh-gray p-2 xl:flex-row xl:pr-20">
      <p className="mb-2 w-80 text-lg font-semibold xl:mb-0">
        Task name:
        <span className="text-principal-color">{` ${formatShortName(taskName, 22)}`}</span>
      </p>

      <p className="mb-2 w-52 text-lg font-semibold xl:mb-0">
        State: <span className="text-principal-color">{` ${taskState}`}</span>
      </p>

      <div className="flex w-40 items-center">
        <p className="mb-2 w-96 text-lg font-semibold xl:mb-0">
          Days: <span className="text-principal-color">{` ${days}`}</span>
        </p>
        <div
          className={`${style.checkContainer} ml-2 cursor-pointer rounded-lg border-2 border-ligh-gray shadow-md transition-all duration-200`}
          onClick={async () => {
            await CompleteTaskAction(id);
          }}
        >
          <svg
            className={`${style.check} transition-all duration-200`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PendingItems;
