"use client";

import React from "react";
import { formatShortName } from "app/utils/generalTools";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

interface OperationItemsProps {
  list: [];
}

export const TableChartOperation: React.FC<OperationItemsProps> = ({
  list,
}: OperationItemsProps) => {
  return (
    <>
      <div className="h-auto w-full bg-white shadow-md">
        <Table className="mt-1">
          <TableHead>
            <TableRow>
              <TableHeaderCell
                className="text-left text-principal-color"
                key={1}
              >
                {"Client"}
              </TableHeaderCell>

              <TableHeaderCell className="text-right" key={2}>
                {"Since"}
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list?.map((listItem: any) => {
              return (
                <TableRow key={listItem?.id}>
                  <TableCell>{formatShortName(listItem?.name, 22)}</TableCell>
                  <TableCell className="hidden text-right graphicsm:block">
                    {listItem?.date}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
