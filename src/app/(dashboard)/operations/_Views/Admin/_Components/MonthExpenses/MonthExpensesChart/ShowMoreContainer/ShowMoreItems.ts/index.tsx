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
              className={`h-6 w-6 fill-green-500`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zM10 7l6 5-6 5V7z"></path>
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
