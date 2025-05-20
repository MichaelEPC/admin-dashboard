"use server";

import { CardInformative } from "app/app/_components/CardsInformationGraphic";
import { getCashFlowNumber } from "./GetCashflow";

export const CardCashFlowContainer = async () => {
  const number = await getCashFlowNumber();

  let svgPaths = [
    `m20,7h-3V3c0-.33-.16-.64-.43-.82-.27-.19-.62-.23-.92-.11L3.28,6.82c-.77.29-1.28,1.05-1.28,1.87v11.31c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-11c0-1.1-.9-2-2-2Zm-5-2.54v2.54h-6.61l6.61-2.54Zm-11,15.54v-11h16v2h-5c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h5v2H4Zm16-4h-5v-3h5v3Z`,
  ];
  return (
    <div>
      {/* @ts-ignore */}
      <CardInformative
        title={"Cashflow:"}
        principalText={`$${number}`}
        svgPath={svgPaths}
      />
    </div>
  );
};
