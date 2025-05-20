"use client";

import { BarList } from "@tremor/react";

export const BarListGraphic = ({
  data,
  formatLeft,
  formatRight,
}: {
  data: any[];
  formatLeft: string;
  formatRight: string;
}) => {
  return (
    <div className="h-auto w-full">
      <BarList
        className="h-auto w-full"
        data={data}
        valueFormatter={(value: any) => `${formatLeft}${value}${formatRight}`}
        color={"cyan"}
      />
    </div>
  );
};
