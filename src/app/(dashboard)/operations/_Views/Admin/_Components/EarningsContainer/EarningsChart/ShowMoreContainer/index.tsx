"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import ShowMoreItems from "./ShowMoreItems.ts";

interface ControlProps {
  list: [];
}

const ShowMoreContainer = ({ list }: ControlProps) => {
  //@ts-ignore
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        className="block rounded-lg text-principal-color underline"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        All records
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel className="absolute top-20">
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-principal-color dark:text-dark-tremor-content-strong">
              Show history
            </h3>
          </div>
          {
            //@ts-ignore
            list.map((items) => {
              //@ts-ignore
              return (
                <ShowMoreItems
                  //@ts-ignore
                  key={items.id}
                  //@ts-ignore
                  id={items.id}
                  //@ts-ignore
                  name={items.name}
                  //@ts-ignore
                  amount={items.amount}
                  //@ts-ignore
                  date={items.date}
                  //@ts-ignore
                  category={items.category}
                />
              );
            })
          }
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default ShowMoreContainer;
