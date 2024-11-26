import PendingTaskContainer from "./_Componentes/PendingTaskContainer";

const Employee = () => {
  return (
    <section className="h-auto w-full">
      <div className="ml-4 mt-2 flex h-auto w-44 rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md">
        <h2 className="text-2xl font-bold text-principal-color">Operations</h2>
      </div>

      <div className="mt-2 flex h-auto w-full flex-col items-center">
        <PendingTaskContainer />
      </div>
    </section>
  );
};

export default Employee;
