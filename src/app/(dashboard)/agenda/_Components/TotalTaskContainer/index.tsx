import { OpenDialogAddTask } from "./_components/OpenDialogForm/OpenDialogAddTask";
import TaskConatainer from "./_components/TaskContainer/TaskContainer";

const TotalTaskContainer = async () => {
  return (
    <section className="h-auto w-full x3:w-2/4">
      <div className="flex h-auto w-full items-center justify-between">
        <h3 className="text-2xl font-bold text-principal-color">Total tasks</h3>
        <OpenDialogAddTask />
      </div>
      <div className="h-auto w-full rounded-lg border-2 border-ligh-gray bg-white pb-2 shadow-md">
        <TaskConatainer />
      </div>
    </section>
  );
};

export default TotalTaskContainer;
