import React from "react";
import { ChangeInformation } from "./OpenDialogChangeInfo/OpenDialogAddCashFlow";

interface ControlProps {
  id: string;
  name: string;
  amount: number;
  date: string;
}
const ShowMoreItems = ({ id, name, amount, date }: ControlProps) => {
  return (
    <article className="mb-2 h-16 w-full rounded-lg border-2 border-ligh-gray bg-white px-2">
      <div className="flex h-auto w-full justify-between">
        <p className="font-semibold text-text-color">{name}</p>
        <p className="text-base font-bold text-black">{`$${amount}`}</p>
      </div>
      <div className="mt-2 flex h-auto w-full justify-between">
        <div className="flex items-center">
          <div className="h-auto w-4 rounded-full bg-white">
            <svg
              className={`mr-1 h-6 w-6 fill-black`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d={`M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z`}
              ></path>
            </svg>
          </div>

          <ChangeInformation id={id} name={name} amount={amount} date={date} />
        </div>
        <p className="font-semibold text-principal-color">{date}</p>
      </div>
    </article>
  );
};

export default ShowMoreItems;
