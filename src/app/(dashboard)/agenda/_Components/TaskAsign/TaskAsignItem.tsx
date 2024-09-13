const TaskAsignItem = async ({
  name,
  job,
  task,
}: {
  name: string;
  job: string;
  task: string;
}) => {
  return (
    <div className="mt-1 flex h-auto w-full flex-col rounded-lg border-2 border-ligh-gray bg-white pb-2 shadow-sm">
      <div className="mt-2 flex h-auto w-full items-center justify-between border-b-2 border-ligh-gray px-4">
        <p className="text-lg font-semibold text-text-color">{name}</p>
        <p className="text-lg font-semibold text-principal-color">{job}</p>
        <p className="text-lg font-semibold text-text-color">{`Task: ${task}`}</p>
      </div>
    </div>
  );
};

export default TaskAsignItem;
