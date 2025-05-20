"use server";

import { BarListGraphic } from "app/app/_components/BarListGraphic";
import { getMostSoldProduct } from "./getMostSoldProduct";

export const MostSoldProductContainer = async () => {
  const mostSoldProducts = await getMostSoldProduct();

  return (
    <div className="h-auto w-full">
      {/* @ts-ignore */}
      <BarListGraphic formatLeft="$" formatRight="" data={mostSoldProducts} />
    </div>
  );
};
