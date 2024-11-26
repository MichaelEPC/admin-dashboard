"use client";

import React, { useCallback, useEffect } from "react";
import { Card, Metric, Text } from "@tremor/react";
import { getTotalTaskByUserAction } from "app/actions/Task/GetTotalTaskByUser";
import { getTotalCompletedTaskByUserAction } from "app/actions/Task/GetTotalCompletedTaskByUser";

export function CardUsageEmployees({ operation }: { operation: string }) {
  const [numberTasks, setNumberTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const tasks = await getTotalTaskByUserAction();
      const getCompleteTask = await getTotalCompletedTaskByUserAction();

      setNumberTasks(tasks);
      setCompletedTasks(getCompleteTask);
    };
    fecthData();
  }, []);

  const putOperationTitle = useCallback(() => {
    switch (operation) {
      case "taskCompleted":
        return "Tasks completed";

      case "taskAsign":
        return "Task asigned today:";

      default:
        return "";
    }
  }, []);

  const putOperationSvg = useCallback(() => {
    switch (operation) {
      case "taskCompleted":
        return "M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z";

      case "taskAsign":
        return "M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172 3.037 6.835c.162.363.521.594.915.594l.048-.001a.998.998 0 0 0 .9-.683l2.914-8.742.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22l-1.81-7.243z";

      default:
        return "";
    }
  }, []);

  const putOperationText = useCallback(() => {
    switch (operation) {
      case "taskCompleted":
        return `${completedTasks?.length}`;

      case "taskAsign":
        return `${numberTasks?.length}`;

      default:
        return "";
    }
  }, [completedTasks, numberTasks]);

  return (
    <Card className="mx-auto max-w-xs" decoration="top" decorationColor="cyan">
      <div className="flex h-auto w-full items-center justify-between">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          {putOperationTitle()}
        </p>
        <svg
          className="h-8 w-8 fill-test-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d={putOperationSvg()}></path>
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {putOperationText()}
        </p>
      </div>
    </Card>
  );
}
