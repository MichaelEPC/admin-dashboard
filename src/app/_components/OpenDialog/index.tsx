import { Button, Dialog, DialogPanel } from "@tremor/react";
import React, { ReactNode } from "react";

export function OpenDialog({
  buttonTitle,
  title,
  content,
  children,
  action,
}: {
  buttonTitle: string;
  title: string;
  content: string;
  children?: ReactNode;
  action?: () => Promise<void>;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        className="block"
        onClick={async () => {
          if (action) {
            await action();
          }
          setIsOpen(true);
        }}
      >
        {buttonTitle}
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
          <Button
            className="mt-8 w-full"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Got it!
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}
