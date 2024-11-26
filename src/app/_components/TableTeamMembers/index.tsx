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
import { getEmployees } from "app/actions/Company/getEmployees";

interface ControlProps {
  tableCategories: [{ category: string }];
}

export const TableTeamMembers = ({ tableCategories }: ControlProps) => {
  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const employeesList = await getEmployees();
      if (!employeesList || typeof employeesList === "string") {
        setEmployees([]);
        return;
      }
      setEmployees(employeesList);
    };
    fetchData();
  }, []);
  return (
    <div className="flex h-auto w-full flex-col items-center">
      <h3 className="mb-2 mt-2 rounded-lg border-2 border-ligh-gray p-2 text-2xl font-semibold">
        Team members
      </h3>
      <div className="h-auto w-full border-2 border-ligh-gray bg-white shadow-md">
        <Table>
          <TableHead>
            <TableRow>
              {tableCategories?.map((table) => {
                return (
                  <TableHeaderCell key={table.category}>
                    {table.category}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {employees?.map((employee: any) => {
              return (
                <TableRow key={employee?.email}>
                  <TableCell>{employee?.name}</TableCell>
                  <TableCell>{formatShortName(employee?.email, 32)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
