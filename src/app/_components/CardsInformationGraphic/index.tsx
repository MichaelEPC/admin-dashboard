"use client";

import { Card, Metric, Text } from "@tremor/react";

export function CardInformative({
  title,
  principalText,
  svgPath,
  date,
}: {
  title: string;
  principalText: string | number;
  svgPath: string[];
  date: string;
}) {
  return (
    <Card className="mx-auto max-w-xs" decoration="top" decorationColor="cyan">
      <div className="flex h-auto w-full items-center">
        <div className="mr-2 flex h-auto w-full items-center justify-between">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {title}
          </p>
          <p className="text-tremor-default text-gray-500 dark:text-dark-tremor-content">
            {date}
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          {svgPath.map((paths) => {
            return <path key={paths} d={paths}></path>;
          })}
        </svg>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {principalText}
        </p>
      </div>
    </Card>
  );
}
