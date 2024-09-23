import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormProductivity from "./FormProductivity";

export function OpenDialogDailyProductivity({
  putSecondSvg,
}: {
  putSecondSvg: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <svg
        onClick={() => setIsOpen(true)}
        className="h-8 w-8 cursor-pointer fill-principal-color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d={putSecondSvg}></path>
      </svg>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Put the goal of task to complete!
            </h3>
          </div>
          <FormProductivity setIsOpen={setIsOpen} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
