import PendingItems from "./PendingItems";
import { getPendingTaskByUserAction } from "app/actions/Task/GetPendingTaskByUser";
import style from "./style.module.css";

const PendingTaskContainer = async () => {
  const pendingTask = await getPendingTaskByUserAction();

  return (
    <>
      <h2 className="mb-2 mt-2 text-lg font-semibold text-principal-color">
        Complete my task:
      </h2>
      <div className="h-auto w-4/5 bg-white">
        {pendingTask.length === 0 ? (
          <>
            <div className="mb-1 flex w-full flex-col items-center justify-center rounded-lg border-2 border-ligh-gray p-2 xl:flex-row xl:pr-20">
              <p className="mb-2 w-full text-lg font-semibold xl:mb-0">
                ¡You have
                <span className="under line font-semibold text-principal-color">{` no `}</span>
                task asign!
              </p>
            </div>
            <div className="mt-10 flex h-auto w-full justify-center">
              <div className={style.loader}></div>
            </div>
          </>
        ) : (
          ""
        )}
        {pendingTask.map((task: any) => {
          return (
            <PendingItems
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              taskState={task.taskState}
              days={task.taskDays}
            />
          );
        })}
      </div>
    </>
  );
};

export default PendingTaskContainer;
