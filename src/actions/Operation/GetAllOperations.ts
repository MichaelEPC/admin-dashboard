"use server";

import { getAllOperations } from "app/utils/operationTools";

export const getAllOperationsAction = async () => {
  const operationsList = await getAllOperations();
  return operationsList;
};
