import TaskAsingContainer from "./_components/TaskAsingContainer/TaskAsignContainert";

const TaskPending = () => {
  return (
    <section className="mt-3 flex h-auto w-full flex-col items-center x3:w-2/5">
      <div className="flex h-auto w-full">
        <h3 className="mb-2 text-2xl font-bold text-principal-color">
          Task pending:
        </h3>
      </div>
      <TaskAsingContainer />
    </section>
  );
};

export default TaskPending;
