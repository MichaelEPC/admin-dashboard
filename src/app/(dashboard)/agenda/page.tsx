import TaskAsign from "./_Components/TaskAsign";
import TotalTaskContainer from "./_Components/TotalTaskContainer";

const Agenda = () => {
  return (
    <div className="flex h-auto w-full justify-between p-10">
      <TotalTaskContainer />
      <TaskAsign />
    </div>
  );
};

export default Agenda;
