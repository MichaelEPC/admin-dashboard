import { Button, Dialog, DialogPanel } from "@tremor/react";
import React, { ReactNode } from "react";

export function OpenDialog({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button className="mx-auto block" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title}
          </h3>
          <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            {content}
          </p>
          {children}
          <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
            Got it!
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}
