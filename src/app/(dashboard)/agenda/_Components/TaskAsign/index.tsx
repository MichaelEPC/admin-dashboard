import TaskAsignItem from "./TaskAsignItem";

const TaskAsign = async () => {
  return (
    <section className="flex h-auto w-2/5 flex-col items-center">
      <h3 className="text-2xl font-semibold text-principal-color">
        Task asigned to employees
      </h3>
      <TaskAsignItem name="John Baptist" job="Frotend Developer" task="0" />
    </section>
  );
};

export default TaskAsign;
