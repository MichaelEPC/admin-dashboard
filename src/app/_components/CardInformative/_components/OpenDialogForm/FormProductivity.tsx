"use client";
import {
  changeProductivityGoal,
  resetTask,
} from "app/actions/Task/ChangeProductivityGoal";
import ButtonSubmit from "app/app/_components/ButtonSubmit";
import { useFormState } from "react-dom";

const FormProductivity = ({ setIsOpen }) => {
  const [formState, action] = useFormState<{ message: string | null }>(
    changeProductivityGoal,
    { message: null },
  );
  return (
    <>
      <form action={action} className="mb-2">
        <div className="mb-4 h-auto w-full justify-center">
          <input
            className="mt-2 h-auto w-full rounded-lg"
            name="goal"
            type="number"
            required
          />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <ButtonSubmit label="Got it!" />
        </div>
      </form>
      <div
        onClick={async () => {
          await resetTask();
          setIsOpen(false);
        }}
      >
        <button
          className="w-full rounded-lg bg-principal-color p-2 text-lg font-semibold text-white"
          type="submit"
        >
          Reset tasks
        </button>
      </div>
    </>
  );
};

export default FormProductivity;
