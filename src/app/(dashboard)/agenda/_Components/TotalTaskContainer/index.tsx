import TaskItems from "./TaskItems";

const TotalTaskContainer = async () => {
  return (
    <section className="h-auto w-2/4">
      <h3 className="text-2xl font-bold text-principal-color">Total tasks</h3>
      <div className="h-auto w-full rounded-lg border-2 border-ligh-gray bg-white pb-2 shadow-md">
        <TaskItems
          name="Clean the room"
          state="Normal"
          initialDate="12/2/2024"
          finalDate="31/12/2024"
        />
      </div>
    </section>
  );
};

export default TotalTaskContainer;
