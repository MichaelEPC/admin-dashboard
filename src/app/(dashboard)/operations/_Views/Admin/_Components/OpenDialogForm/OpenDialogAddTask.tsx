"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormAddNewOperation from "./FormAddNewOperation";

export function OpenDialogAddOperation() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        className="block rounded-lg bg-principal-color p-1 text-lg text-white"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New operation +
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-principal-color dark:text-dark-tremor-content-strong">
              New operation
            </h3>
          </div>
          <FormAddNewOperation setIsOpen={setIsOpen} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
