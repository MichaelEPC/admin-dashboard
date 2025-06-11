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
                {"Bill"}
              </TableHeaderCell>

              <TableHeaderCell key={2}>{"Category"}</TableHeaderCell>

              <TableHeaderCell key={3}>{"Amount ($)"}</TableHeaderCell>

              <TableHeaderCell
                className="hidden text-right text-principal-color graphicsm:block"
                key={4}
              >
                {"Date"}
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list?.map((listItem: any) => {
              return (
                <TableRow key={listItem?.id}>
                  <TableCell>{formatShortName(listItem?.name, 22)}</TableCell>
                  <TableCell>{listItem.category}</TableCell>
                  <TableCell className="text-right">
                    {`$${listItem?.amount}`}
                  </TableCell>
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
