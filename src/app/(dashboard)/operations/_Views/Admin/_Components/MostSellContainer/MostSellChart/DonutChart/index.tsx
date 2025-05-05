"use client";

import React, { useEffect } from "react";
import { DonutChart } from "@tremor/react";
import { nameMonthOnListProductSold } from "../../../../utils/General/mostSoldProduct";

const valueFormatter = function (number: number) {
  return "$" + new Intl.NumberFormat("us").format(number).toString();
};

interface OperationItemsProps {
  list: [];
  products: [];
}

export const DonutChartMostSoldOperation: React.FC<OperationItemsProps> = ({
  list,
  products,
}: OperationItemsProps) => {
  // @ts-ignore
  const [data, setData] = React.useState(
    nameMonthOnListProductSold({ list, products }),
  );

  useEffect(() => {
    // @ts-ignore
    setData(nameMonthOnListProductSold({ list, products }));
  }, [list, products]);

  return (
    <>
      <div className="mt-5 flex h-auto w-full flex-col bg-white">
        <DonutChart
          className="mx-auto"
          // @ts-ignore
          data={data}
          category="Earn"
          index="name"
          showLabel={true}
          valueFormatter={(number: number) =>
            `$${Intl.NumberFormat("us").format(number).toString()}`
          }
        />
      </div>
    </>
  );
};
