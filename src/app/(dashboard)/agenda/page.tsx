import TaskAsign from "./_Components/TaskAsign";
import TotalTaskContainer from "./_Components/TotalTaskContainer";

const Agenda = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between p-10 x3:flex-row x3:items-baseline">
      <TotalTaskContainer />
      <TaskAsign />
    </div>
  );
};

export default Agenda;
