import React from "react";
import { useFormState } from "react-dom";

import ButtonSubmit from "app/app/_components/ButtonSubmit";
import { OpenDialogAddProduct } from "./AddFormProduct/OpenDialogAddProduct";

import { addSoldProductAction } from "../../../../utils/AddSoldProducts";

interface props {
  products: [];
  setIsOpen: (bol: boolean) => void;
}
const FormAddCashFlow = ({ setIsOpen, products }: props) => {
  const [currentProduct, setCurrentProduct] = React.useState(() => {
    if (!products || products.length === 0)
      return {
        name: "none",
        date: "none",
      };

    // @ts-ignore
    return products[0];
  });
  const [formState, action] = useFormState<{ message: string | null }>(
    // @ts-expect-error
    addSoldProductAction,
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
      "operation-product",
    ) as HTMLInputElement;
    if (inputTask.value === "none") {
      return false;
    }

    const inputAmount = document.getElementById(
      "operation-amount",
    ) as HTMLInputElement;
    if (inputAmount && inputAmount.value.trim() === "") {
      return false;
    }

    const inputDate = document.getElementById("date") as HTMLInputElement;
    if (inputDate.value.length <= 0) return false;

    return true;
  };

  return (
    <>
      <div className="flex h-auto w-full items-center justify-center">
        <OpenDialogAddProduct list={products} />
      </div>
      <form action={action} className="mb-2">
        <div>
          <div className="flex h-auto w-full items-center justify-between">
            <label
              htmlFor="operationProduct"
              className="mt-2 font-semibold text-black"
            >
              Select product
            </label>
          </div>
          <select
            className="mt-2 h-auto w-full rounded-lg"
            id="operation-product"
            name="operationProduct"
            onChange={(e) => {
              // @ts-ignore
              setCurrentProduct(JSON.parse(e.target.value));
            }}
            required
          >
            {products ? (
              products.length === 0 ? (
                <option value={"none"}>
                  No products created, please create a product.
                </option>
              ) : (
                products.map((product: any) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.name}
                  </option>
                ))
              )
            ) : (
              <option value={"none"}>
                No products created yet, please create a product.
              </option>
            )}
          </select>
        </div>

        <div className="mt-2">
          <label htmlFor="operationName" className="font-semibold text-black">
            Name
          </label>
          <input
            className="mt-2 h-auto w-full rounded-lg bg-gray-100"
            id="operationName"
            name="operationName"
            type="text"
            minLength={10}
            maxLength={32}
            disabled
            // @ts-ignore
            value={currentProduct.name}
            required
          />
        </div>

        <div className="mt-2">
          <label
            htmlFor="operationCategory"
            className="mt-2 font-semibold text-black"
          >
            Category
          </label>
          <input
            className="mt-2 h-auto w-full rounded-lg bg-gray-100"
            id="operation-operationCategory"
            name="operationCategory"
            type="text"
            disabled
            required
            // @ts-ignore
            value={currentProduct.category}
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
            type="text"
            required
          />
        </div>

        <div className="relative mb-4 mt-2">
          <label htmlFor="date" className="block font-semibold text-black">
            Select a date of sale
          </label>
          <input
            type="date"
            id="date"
            name="operationDate"
            className="text-gray mt-1 block h-14 w-full rounded-lg border py-2 pl-10 pr-3 shadow-sm"
            max={getMaxDate()}
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

export default FormAddCashFlow;
