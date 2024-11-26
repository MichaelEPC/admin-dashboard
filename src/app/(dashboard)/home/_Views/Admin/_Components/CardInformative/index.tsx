import { Card, Metric, Text } from "@tremor/react";
import { OpenDialogDailyProductivity } from "./_components/OpenDialogForm";
import React, { useCallback } from "react";

export function CardUsageExample({
  operation,
  data,
}: {
  operation: string;
  data: object;
}) {
  const putOperationTitle = useCallback(() => {
    switch (operation) {
      case "showTotalEmployees":
        return "Employees";

      case "taskCompleted":
        return "Tasks completed";

      case "productivityGoal":
        return "Productivity goal (daily):";

      default:
        return "";
    }
  }, []);

  const putOperationSvg = useCallback(() => {
    switch (operation) {
      case "showTotalEmployees":
        return "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3.33A1.67 1.67 0 1 1 10.33 7 1.67 1.67 0 0 1 12 5.33zm3.33 12.5-1.66.84-1.39-3.89h-.56l-1.39 3.89-1.66-.84 1.66-4.72v-1.66L7 10.33l.56-1.66 3.33 1.11h2.22l3.33-1.11.56 1.66-3.33 1.12v1.66z";

      case "taskCompleted":
        return "M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z";

      case "productivityGoal":
        return "M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172 3.037 6.835c.162.363.521.594.915.594l.048-.001a.998.998 0 0 0 .9-.683l2.914-8.742.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22l-1.81-7.243z";

      default:
        return "";
    }
  }, []);

  const putOperationText = useCallback(() => {
    switch (operation) {
      case "showTotalEmployees":
        // @ts-expect-error
        return `${isUndefined(data?.employees, "employees")}`;

      case "taskCompleted":
        // @ts-expect-error
        return `${isUndefined(data?.taskList, "taskCompleted")}`;

      case "productivityGoal":
        // @ts-expect-error
        return `${isUndefined(data?.taskList, "goal")}`;

      default:
        return "";
    }
  }, [data]);

  const putSecondSvg = useCallback(() => {
    switch (operation) {
      case "productivityGoal":
        return "m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z";

      default:
        return "";
    }
  }, []);

  const isUndefined = useCallback(
    (infoStringify: string, wanted: string) => {
      if (!infoStringify) {
        return "";
      }
      const list = JSON.parse(infoStringify);
      switch (wanted) {
        case "employees":
          return `${list.length}`;
        case "goal":
          return `${list?.taskCompleted}/${list?.goal}`;
        case "taskCompleted":
          return `${list?.completedTask.length}`;

        default:
          return undefined;
      }
    },
    [data],
  );

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
        {putSecondSvg() ? (
          <OpenDialogDailyProductivity putSecondSvg={putSecondSvg()} />
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}
