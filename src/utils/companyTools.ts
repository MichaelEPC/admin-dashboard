import "server-only";
import jwt from "jsonwebtoken";
import { db } from "../db/index";
import { usersTable, companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getUserFromToken } from "./authTool";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";

export const getCompanyFromUser = async () => {
  const user = await isUserLog();
  if (!user?.company) {
    return "none";
  }
  const companyID = await JSON.parse(user?.company);
  const company = await db.query.companyTable.findFirst({
    where: eq(companyTable.id, companyID.id),
    columns: {
      id: true,
      name: true,
      taskList: true,
      request: true,
      employees: true,
      feedBack: true,
    },
  });
  if (!company) {
    return "none";
  }
  return company;
};
