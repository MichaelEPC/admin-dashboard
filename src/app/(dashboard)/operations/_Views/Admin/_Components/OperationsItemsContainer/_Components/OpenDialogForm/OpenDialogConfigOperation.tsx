"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import MessageContentTask from "./MessageContentTask";

export function OpenDialogConfigOperation({ id }: { id: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div
        className="block cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"></path>
        </svg>
      </div>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-principal-color dark:text-dark-tremor-content-strong">
              Configure task
            </h3>
          </div>
          <MessageContentTask id={id} setIsOpen={setIsOpen} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
