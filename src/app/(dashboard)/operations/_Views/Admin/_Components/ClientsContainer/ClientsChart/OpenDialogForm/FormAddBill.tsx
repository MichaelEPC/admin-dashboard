import { useFormState } from "react-dom";
import ButtonSubmit from "app/app/_components/ButtonSubmit";
import { addClientAction } from "../../../../utils/AddNewClient";

const FormAddIncome = ({
  setIsOpen,
}: {
  setIsOpen: (bol: boolean) => void;
}) => {
  const [formState, action] = useFormState<{ message: string | null }>(
    // @ts-expect-error
    addClientAction,
    { message: null },
  );

  const getMaxDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const lastDay = new Date(year, month, 0).getDate();
    const formattedMonth = month.toString().padStart(2, "0");

    return `${year}-${formattedMonth}-${lastDay}`;
  };

  const validateForm = () => {
    const inputTask = document.getElementById(
      "operation-name",
    ) as HTMLInputElement;
    if (
      (inputTask && inputTask.value.trim() === "") ||
      inputTask.value.length > 32 ||
      inputTask.value.length < 3
    )
      return false;

    const inputDate = document.getElementById("date") as HTMLInputElement;
    if (inputDate.value.length <= 0) return false;

    return true;
  };

  return (
    <>
      <form action={action} className="mb-2">
        <div>
          <label htmlFor="operation-name" className="font-semibold text-black">
            Clients name:
          </label>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="operation-name"
            name="operation-name"
            type="text"
            minLength={3}
            maxLength={32}
            required
          />
        </div>

        <div className="relative mb-4 mt-2">
          <label htmlFor="date" className="block font-semibold text-black">
            Select a date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            max={getMaxDate()}
            className="text-gray mt-1 block h-14 w-full rounded-lg border py-2 pl-10 pr-3 shadow-sm"
            required
          />
          <svg
            className="pointer-events-none absolute left-3 top-[44px] h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 4h10M5 10h14M5 14h14M5 18h14"
            />
          </svg>
        </div>

        <div
          onClick={() => {
            if (validateForm()) {
              if (!formState.message) {
                setIsOpen(false);
              }
            }
          }}
        >
          <ButtonSubmit label="Got it!" />
        </div>
      </form>
    </>
  );
};

export default FormAddIncome;
