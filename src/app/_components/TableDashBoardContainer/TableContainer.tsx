import { TableDashBoard } from "./TableTask";

export const taskNameCategories = [
  { category: "Employee" },
  { category: "Task Name" },
  { category: "Status" },
];

const TableDashBoardContainer = async () => {
  return <TableDashBoard tableCategories={taskNameCategories} />;
};

export default TableDashBoardContainer;
