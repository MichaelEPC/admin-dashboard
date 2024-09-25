import { getTotalTaskAction } from "app/actions/Task/GetTotalTask";
import { TableDashBoard } from "./TableTask";

export const taskNameCategories = [
  { category: "Employee" },
  { category: "Task Name" },
  { category: "Status" },
];

const TableDashBoardContainer = async () => {
  const taskList = await getTotalTaskAction();

  return <TableDashBoard tableCategories={taskNameCategories} />;
};

export default TableDashBoardContainer;
