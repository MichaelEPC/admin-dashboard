"use client";

import React, { useEffect } from "react";
import { formatShortName } from "app/utils/generalTools";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { getTotalTaskWithNameUserAction } from "app/actions/Task/GetTotalTaskWithUserName";

interface ControlProps {
  tableCategories: [{ category: string }];
  content: [{ person_name: string; content: string; status: string }];
}

export const TableTotalTasks = ({ tableCategories }: ControlProps) => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskList = await getTotalTaskWithNameUserAction();

      if (!taskList) {
        setTasks([]);
      }
      setTasks(taskList);
    };
    fetchData();
  }, []);
  return (
    <div className="flex h-auto w-full flex-col items-center">
      <div className="mb-1 rounded-lg border-2 border-ligh-gray bg-white p-2">
        <h3 className="text-2xl font-semibold">Tasks</h3>
      </div>
      <div className="h-auto w-full border-2 border-ligh-gray bg-white shadow-md">
        <Table>
          <TableHead>
            <TableRow>
              {tableCategories.map((table) => {
                return (
                  <TableHeaderCell key={table.category}>
                    {table.category}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.map((taskItem: any) => {
              return (
                <TableRow key={taskItem.id}>
                  <TableCell>{taskItem?.employeeName}</TableCell>
                  <TableCell>
                    {formatShortName(taskItem?.taskName, 14)}
                  </TableCell>
                  <TableCell>{taskItem?.taskState}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
