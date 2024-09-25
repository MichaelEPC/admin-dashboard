import { useFormState } from "react-dom";
import ButtonSubmit from "app/app/_components/ButtonSubmit";
import { addNewOperationAction } from "app/actions/Operation/AddNewOperation";

const FormAddNewOperation = ({
  setIsOpen,
}: {
  setIsOpen: (bol: boolean) => void;
}) => {
  const [formState, action] = useFormState<{ message: string | null }>(
    addNewOperationAction,
    { message: null },
  );

  const validateForm = () => {
    const inputTask = document.getElementById(
      "operation-name",
    ) as HTMLInputElement;
    if (inputTask && inputTask.value.trim() === "") {
      return false;
    }

    const inputDays = document.getElementById(
      "operation-amount",
    ) as HTMLInputElement;
    if (inputDays && inputDays.value.trim() === "") {
      return false;
    }

    return true;
  };

  return (
    <>
      <form action={action} className="mb-2">
        <div className="mb-4 h-auto w-full">
          <div className="mb-4 h-auto w-full justify-center">
            <h4 className="font-semibold text-black">
              Company or name of operation:
            </h4>
            <input
              className="mt-2 h-auto w-full rounded-lg"
              id="operation-name"
              name="operationName"
              type="text"
              required
            />
          </div>

          <h4 className="font-semibold text-black">Category:</h4>
          <select
            className="mt-2 h-auto w-full rounded-lg"
            name="operationState"
            required
          >
            <option key={1} value="win">
              Win
            </option>
            <option key={2} value="loss">
              Loss
            </option>
          </select>
        </div>

        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">Amount of cash:</h4>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="operation-amount"
            name="operationAmount"
            type="number"
            required
          />
        </div>

        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">Month:</h4>
          <select
            className="mt-2 h-auto w-full rounded-lg"
            name="operationMonth"
            required
          >
            <option selected value="jan">
              Jan
            </option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jul">July</option>
            <option value="sep">September</option>
            <option value="oct">Octuber</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </div>

        <div
          onClick={() => {
            if (validateForm()) {
              setIsOpen(false);
            }
          }}
        >
          <ButtonSubmit label="Got it!" />
        </div>
      </form>
    </>
  );
};

export default FormAddNewOperation;
