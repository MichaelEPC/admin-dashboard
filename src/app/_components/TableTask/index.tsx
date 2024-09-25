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
import { getTotalTaskByUserAction } from "app/actions/Task/GetTotalTaskByUser";

interface ControlProps {
  tableCategories: [{ category: string }];
  content: [{ person_name: string; content: string; status: string }];
}

export const TableDashBoard = ({ tableCategories }: ControlProps) => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskList = await getTotalTaskByUserAction();
      console.log(taskList + " hola");
      if (!taskList) {
        setTasks([]);
      }
      setTasks(taskList);
    };
    fetchData();
  }, []);
  return (
    <div className="flex h-auto w-full flex-col items-center">
      <div className="rounded-lg border-2 border-ligh-gray bg-white p-2">
        <h3 className="text-2xl font-semibold">Daily task</h3>
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
                  <TableCell>{taskItem?.userName}</TableCell>
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
