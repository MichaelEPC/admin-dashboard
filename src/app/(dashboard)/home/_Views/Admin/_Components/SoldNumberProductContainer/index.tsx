"use server";

import { BarChartGraphic } from "app/app/_components/BarChartGraphic";
import { getSellsProducts } from "./getMostSoldProduct";

export const SellsProductsContainer = async () => {
  // @ts-ignore
  const { list, categories } = await getSellsProducts();

  return (
    <div className="h-auto w-full">
      {/* @ts-ignore */}
      <BarChartGraphic
        formatLeft="sells: "
        formatRight=""
        data={list}
        categories={categories}
        indexLocation="date"
        date={`All time`}
        stacked={true}
      />
    </div>
  );
};
