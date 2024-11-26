import { getTasksByEmployeesAction } from "app/actions/Task/GetTaskByEmployees";
import TaskAsignItem from "./TaskAsignItem";
import { getPendingTaskByUserAction } from "app/actions/Task/GetPendingTaskByUser";
import TaskPendingItemsAgenda from "./TaskAsignItem";

const TaskPendingContainer = async () => {
  const taskPending = await getPendingTaskByUserAction();

  return (
    <div className="h-auto w-full rounded-lg shadow-md">
      {taskPending.length == 0 ? (
        <p className="mt-2 text-lg font-semibold text-test-color underline">
          You dont have task pending!
        </p>
      ) : (
        taskPending.map((task: any) => {
          return (
            <TaskPendingItemsAgenda
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              taskState={task.taskState}
              days={task.taskDays}
            />
          );
        })
      )}
    </div>
  );
};

export default TaskPendingContainer;
