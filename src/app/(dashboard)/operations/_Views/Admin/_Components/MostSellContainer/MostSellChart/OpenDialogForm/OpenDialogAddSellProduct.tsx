"use client";

import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import FormAddCashFlow from "./FormAddSellProduct";
import { getMostSoldProductsForForm } from "../../../../utils/General/mostSoldProduct";

interface props {
  list: [];
  products: [];
}

export function OpenDialogSoldProducts({ list, products }: props) {
  const [isOpen, setIsOpen] = React.useState(false);
  // @ts-ignore
  const newList = getMostSoldProductsForForm(list);
  return (
    <>
      <button
        className="block rounded-lg bg-principal-color p-2 text-lg font-semibold text-white"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="flex h-auto w-full items-center justify-center">
            <h3 className="mb-4 text-3xl font-bold text-principal-color dark:text-dark-tremor-content-strong">
              Earnings by products
            </h3>
          </div>
          {/* @ts-ignore */}
          <FormAddCashFlow setIsOpen={setIsOpen} products={products} />
        </DialogPanel>
      </Dialog>
    </>
  );
}
