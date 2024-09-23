import { getTotalTaskAction } from "app/actions/Task/GetTotalTask";
import TaskItems from "./TaskItems";

const TaskConatainer = async () => {
  const totalTask = await getTotalTaskAction();
  return (
    <div className="bg-white shadow-md">
      {totalTask.map((task) => {
        return (
          <TaskItems
            key={task.id}
            id={task.id}
            name={task.taskName}
            state={task.taskState}
            days={task.taskDays}
          />
        );
      })}
    </div>
  );
};

export default TaskConatainer;
