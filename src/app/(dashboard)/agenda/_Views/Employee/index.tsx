import TaskPending from "./_Components/TaskPending";
import TaskCompletedContainer from "./_Components/TotalTaskContainer/_components/TaskContainer/TaskContainer";

const EmployeeAgenda = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between p-10 x3:flex-row x3:items-baseline">
      <TaskPending />
      <TaskCompletedContainer />
    </div>
  );
};

export default EmployeeAgenda;
