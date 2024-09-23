import TaskAsingContainer from "./_components/TaskAsingContainer/TaskAsignContainert";

const TaskAsign = () => {
  return (
    <section className="mt-3 flex h-auto w-full flex-col items-center x3:w-2/5">
      <div className="flex h-auto w-full">
        <h3 className="text-2xl font-bold text-principal-color">
          Task asign to employees:
        </h3>
      </div>
      <TaskAsingContainer />
    </section>
  );
};

export default TaskAsign;
