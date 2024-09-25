import "server-only";

import { db } from "../db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const addNewOperation = async (
  operationName: string,
  category: string,
  amount: string,
  month: string,
) => {
  const company = await getCompany();

  if (!company || company == "none" || company === null) {
    return "none";
  }

  const listOperation = await JSON.parse(company.operations);

  const uniqueId = crypto.randomUUID();
  listOperation.list.push({
    id: uniqueId,
    operationName: operationName,
    category: category,
    amount: amount,
    month: month,
  });

  await db
    .update(companyTable)
    .set({
      operations: JSON.stringify(listOperation),
    })
    .where(eq(companyTable.id, company.id));
};

export const getAllOperations = async () => {
  const company = await getCompany();

  if (!company || company == "none" || company === null) {
    return "none";
  }

  const listOperation = await JSON.parse(company.operations);

  return listOperation.list;
};

export const deleteOperation = async (id: string) => {
  const company = await getCompany();

  if (!company || company == "none" || company === null) {
    return "none";
  }

  let listOperation = await JSON.parse(company.operations);
  listOperation.list = listOperation.list.filter((operation: any) => {
    return operation.id !== id;
  });

  await db
    .update(companyTable)
    .set({
      operations: JSON.stringify(listOperation),
    })
    .where(eq(companyTable.id, company.id));
};
