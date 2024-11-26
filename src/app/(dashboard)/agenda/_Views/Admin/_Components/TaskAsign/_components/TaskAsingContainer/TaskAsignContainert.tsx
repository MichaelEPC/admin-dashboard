import { getTasksByEmployeesAction } from "app/actions/Task/GetTaskByEmployees";
import TaskAsignItem from "./TaskAsignItem";

const TaskAsingContainer = async () => {
  const taskByEmployees = await getTasksByEmployeesAction();

  return (
    <div className="h-auto w-full">
      {taskByEmployees.map((employee: any) => {
        return (
          <TaskAsignItem
            key={employee.employeeId}
            name={employee.employeeName}
            job={employee.job}
            task={employee.count}
          />
        );
      })}
    </div>
  );
};

export default TaskAsingContainer;
