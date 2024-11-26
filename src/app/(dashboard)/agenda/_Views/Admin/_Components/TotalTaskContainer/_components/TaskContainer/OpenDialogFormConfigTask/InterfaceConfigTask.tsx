"use client";

import React, { useEffect } from "react";
import ButtonSubmit from "app/app/_components/ButtonSubmit";
import { getIndividualTaskAction } from "app/actions/Task/GetInvididualTask";
import { deleteTaskAction } from "app/actions/Task/DeleteTask";

const InterfaceConfigTask = ({
  id,
  setIsOpen,
}: {
  id: string;
  setIsOpen: (bol: boolean) => void;
}) => {
  const [taskInfo, setTaskInfo] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      const individualTask = await getIndividualTaskAction(id.id);
      setTaskInfo(individualTask[0]);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mb-4 h-auto w-full">
        <h4 className="font-semibold text-black">Asign to employee:</h4>
        <input
          className="mt-2 h-auto w-full rounded-lg"
          id="task-name"
          name="taskName"
          type="text"
          value={taskInfo.name}
          disabled
        />
      </div>
      <div className="mb-4 h-auto w-full justify-center">
        <h4 className="font-semibold text-black">Task:</h4>
        <input
          className="mt-2 h-auto w-full rounded-lg"
          id="task-name"
          name="taskName"
          type="text"
          value={taskInfo.taskName}
        />
      </div>

      <div className="mb-4 h-auto w-full justify-center">
        <h4 className="font-semibold text-black">State:</h4>
        <input
          className="mt-2 h-auto w-full rounded-lg"
          id="task-name"
          name="taskName"
          type="text"
          value={taskInfo.taskState}
          disabled
        />
      </div>

      <div className="mb-4 h-auto w-full justify-center">
        <h4 className="font-semibold text-black">
          Number of days to complete:
        </h4>
        <input
          className="mt-2 h-auto w-full rounded-lg"
          id="task-days"
          name="taskDays"
          type="number"
          value={taskInfo.taskDays}
          disabled
        />
      </div>

      <div
        className="p4 mb-2 flex h-auto w-12 cursor-pointer justify-center rounded-lg bg-red-500 py-2"
        onClick={async () => {
          await deleteTaskAction(id);
          setIsOpen(false);
        }}
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
          <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
        </svg>
      </div>

      <div
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ButtonSubmit label="Got it!" />
      </div>
    </>
  );
};

export default InterfaceConfigTask;
