import { formatShortName } from "app/utils/generalTools";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

interface ControlProps {
  tableCategories: [{ category: string }];
  content: [{ person_name: string; content: string; status: string }];
}

export const TableDashBoard = ({ tableCategories, content }: ControlProps) => (
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
          {content.map((taskItem) => {
            return (
              <TableRow key={taskItem.person_name}>
                <TableCell>{taskItem?.person_name}</TableCell>
                <TableCell>{formatShortName(taskItem?.content, 14)}</TableCell>
                <TableCell>{taskItem?.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  </div>
);
