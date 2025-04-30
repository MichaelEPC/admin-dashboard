"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormAddProduct from "./FormAddProduct";
import { getMostSoldProductsForForm } from "../../../../../utils/General/mostSoldProduct";

interface props {
  list: [];
}

export function OpenDialogAddProduct({ list }: props) {
  const [isOpen, setIsOpen] = React.useState(false);
  // @ts-ignore
  const newList = getMostSoldProductsForForm({ list });
  return (
    <>
      <button
        className="block rounded-lg bg-principal-color p-2 text-lg font-semibold text-white"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add product
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-3xl font-bold text-principal-color dark:text-dark-tremor-content-strong">
              Add product
            </h3>
          </div>
          {/* @ts-ignore */}
          <FormAddProduct setIsOpen={setIsOpen} list={newList} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
