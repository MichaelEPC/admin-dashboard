import ButtonSubmit from "app/app/_components/ButtonSubmit";
import changeMonthExpenseAction from "app/app/(dashboard)/operations/_Views/Admin/utils/ChangeMonthExpense";

const FormChangeInformation = ({
  setIsOpen,
  id,
  name,
  amount,
  date,
}: {
  setIsOpen: (bol: boolean) => void;
  id: string;
  name: string;
  amount: number | string;
  date: string;
}) => {
  const getMaxDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const lastDay = new Date(year, month, 0).getDate();
    const formattedMonth = month.toString().padStart(2, "0");

    return `${year}-${formattedMonth}-${lastDay}`;
  };

  const validateForm = () => {
    const inputID = document.getElementById("operationID") as HTMLInputElement;

    const inputTask = document.getElementById(
      "operation-name",
    ) as HTMLInputElement;
    if (
      (inputTask && inputTask.value.trim() === "") ||
      inputTask.value.length > 22 ||
      inputTask.value.length < 10
    )
      return false;

    const inputDate = document.getElementById("date") as HTMLInputElement;
    if (
      (inputDate && inputDate.value.trim() === "") ||
      !inputDate.value ||
      inputDate.value === ""
    )
      return false;

    const inputAmount = document.getElementById(
      "operation-amount",
    ) as HTMLInputElement;
    if (inputAmount && inputAmount.value.trim() === "") return false;

    changeMonthExpenseAction({
      id: inputID.value,
      name: inputTask.value,
      date: inputDate.value,
      amount: inputAmount.value,
    });
    return true;
  };

  return (
    <>
      <div className="mb-2">
        <div>
          <input
            className="h-auto w-full rounded-lg"
            id="operationID"
            name="operationID"
            type="hidden"
            value={id}
            disabled
          />
        </div>

        <div className="mt-2">
          <label htmlFor="operation-name" className="font-semibold text-black">
            Expense name
          </label>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="operation-name"
            name="operationName"
            type="text"
            defaultValue={name}
            minLength={10}
            maxLength={32}
            required
          />
        </div>

        <div className="mt-2">
          <label
            htmlFor="operation-amount"
            className="mt-2 font-semibold text-black"
          >
            Amount
          </label>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="operation-amount"
            name="operationAmount"
            type="number"
            defaultValue={amount}
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
            name="operationDate"
            className="text-gray mt-1 block h-14 w-full rounded-lg border py-2 pl-10 pr-3 shadow-sm"
            defaultValue={date}
            max={getMaxDate()}
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
              setIsOpen(false);
            }
          }}
        >
          <ButtonSubmit label="Got it!" />
        </div>
      </div>
    </>
  );
};

export default FormChangeInformation;
