"use client";

import React, { useEffect } from "react";
import { AreaChart } from "@tremor/react";
import { getDataOperationsAction } from "app/actions/Operation/GetDataOperations";

const valueFormatter = function (number: number) {
  return "" + new Intl.NumberFormat("us").format(number).toString();
};

export const AreaChartOperationAdmin = () => {
  const [listOperation, setlistOperation] = React.useState([]);
  const [gains, setGains] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // @ts-expect-error
      const { list, resume } = await getDataOperationsAction();
      if (!list) {
        return;
      }
      console.log(list);

      setlistOperation(list);
      setGains(resume);
    };
    fetchData();
  }, []);

  return (
    <div className="border-light-gray flex h-96 w-full flex-col rounded-lg border-2 bg-white p-2 shadow-md">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Earns - Loss
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {`Gains: ${gains.toFixed(0)}%`}{" "}
        {/* Asegúrate de que gains sea un número */}
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={listOperation}
        index="date"
        categories={["Earnings", "Losses"]}
        colors={["green", "red"]}
        valueFormatter={valueFormatter}
      />
    </div>
  );
};
