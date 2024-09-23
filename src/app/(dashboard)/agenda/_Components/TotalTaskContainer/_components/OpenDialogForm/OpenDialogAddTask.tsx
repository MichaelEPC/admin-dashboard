"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormAddNewTask from "./FormAddNewTask";

export function OpenDialogAddTask() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        className="mb-2 block rounded-lg bg-principal-color p-2 text-lg text-white"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new task +
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-principal-color dark:text-dark-tremor-content-strong">
              Add New Task
            </h3>
          </div>
          <FormAddNewTask setIsOpen={setIsOpen} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
