import TaskItems from "./TaskItems";
import { getTotalCompletedTaskByUserAction } from "app/actions/Task/GetTotalCompletedTaskByUser";

const TaskCompletedContainer = async () => {
  const totalTask = await getTotalCompletedTaskByUserAction();

  return (
    <div className="h-auto w-full x3:w-2/5">
      <h3 className="mb-2 text-2xl font-bold text-principal-color">
        Task completed:
      </h3>
      <div className="rounded-lg bg-white p-1 shadow-md ring-2 ring-ligh-gray">
        {totalTask.length === 0 ? (
          <p className="mt-2 text-lg font-semibold">No task yet completed</p>
        ) : (
          totalTask.map((task: any) => {
            return (
              <TaskItems
                key={task.id}
                id={task.id}
                name={task.taskName}
                state={task.taskState}
                days={task.taskDays}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskCompletedContainer;
