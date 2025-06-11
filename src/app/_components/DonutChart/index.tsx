"use client";

import { DonutChart, Legend } from "@tremor/react";
import React from "react";

const EXAMPLE = [
  {
    name: "Super Good",
    sales: 10,
  },
  {
    name: "Good",
    sales: 45,
  },
  {
    name: "Medium",
    sales: 50,
  },
  {
    name: "Not well",
    sales: 12,
  },
  {
    name: "Bad",
    sales: 12,
  },
  {
    name: "Terrible",
    sales: 14,
  },
];

interface ControlProps {
  data: any[];
  categories: any[];
  indexName: string;
  category: string;
  legend: boolean;
}

export function DonutChartGraphic({
  data,
  categories,
  indexName,
  category,
  legend,
}: ControlProps) {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={data}
          category={category}
          index={indexName}
          className="w-40"
        />
        {legend ? (
          <div className="mt-2 flex h-auto w-full items-center justify-center">
            <Legend categories={categories} className="max-w-xs" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
