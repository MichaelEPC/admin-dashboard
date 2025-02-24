"use client";

import React, { useEffect } from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import ShowMoreItems from "./ShowMoreItems.ts";
import { filterData, getRecentYear } from "../../../../utils/ChangeData";

interface ControlProps {
  list: [];
  years: number[];
}

const ShowMoreContainer = ({ list, years }: ControlProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [year, setYear] = React.useState(getRecentYear(list));
  // @ts-ignore
  const [data, setData] = React.useState(filterData(list, getRecentYear(list)));

  useEffect(() => {
    // @ts-ignore
    setData(filterData(list, year));
  }, [year]);

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
          <div className="mb-4 flex h-auto w-full items-center justify-between">
            <h3 className="text-3xl font-bold text-principal-color dark:text-dark-tremor-content-strong">
              Show history
            </h3>
            <select
              className="ml-4 rounded-lg"
              onChange={(e) => {
                setYear(Number(e.target.value));
              }}
            >
              {list.length === 0 ? (
                <option value="">---</option>
              ) : (
                years.map((singleYear: number) => {
                  if (singleYear == year) {
                    return (
                      <option
                        key={singleYear}
                        value={singleYear}
                        selected
                        onClick={() => setYear(singleYear)}
                      >
                        {singleYear}
                      </option>
                    );
                  }
                  return (
                    <option
                      key={singleYear}
                      value={singleYear}
                      onClick={() => setYear(singleYear)}
                    >
                      {singleYear}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          {
            //@ts-ignore
            data.map((items) => {
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
