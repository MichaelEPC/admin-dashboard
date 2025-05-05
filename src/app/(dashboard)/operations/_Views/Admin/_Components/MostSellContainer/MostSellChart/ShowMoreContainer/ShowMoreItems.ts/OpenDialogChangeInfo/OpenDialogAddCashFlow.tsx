"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormChangeInformation from "./FormChangeInformation";
import { deleteSoldProductAction } from "app/app/(dashboard)/operations/_Views/Admin/utils/DeleteMostSoldProduct";

interface ControlProps {
  id: string;
  name: string;
  amount: number | string;
  date: string;
}

export function ChangeInformation({ id, name, amount, date }: ControlProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <svg
        onClick={() => {
          setIsOpen(true);
        }}
        className="ml-2 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>

      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="relative flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-3xl font-bold text-principal-color dark:text-dark-tremor-content-strong">
              Change information
            </h3>
            <div
              className="absolute top-[500px] cursor-pointer rounded-lg bg-red-500 p-1 mb:right-0 mb:top-0"
              onClick={async () => {
                await deleteSoldProductAction(id);
                setIsOpen(false);
              }}
            >
              <svg
                className="h-7 w-7 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
              </svg>
            </div>
          </div>
          <FormChangeInformation
            setIsOpen={setIsOpen}
            id={id}
            name={name}
            amount={amount}
            date={date}
          />
        </DialogPanel>
      </Dialog>
    </>
  );
}
