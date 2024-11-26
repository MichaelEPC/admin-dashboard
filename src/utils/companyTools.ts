import "server-only";

import { revalidatePath } from "next/cache";
// @ts-expect-error
import jwt from "jsonwebtoken";
import { db } from "../db/index";
import { usersTable, companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getUserFromId, getUserFromToken } from "./authTool";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import { UserProps } from "./Interfaces";

export const getCompanyFromUser = async () => {
  const user = await isUserLog();
  if (!user?.company) {
    return "none";
  }

  let companyInfo = user.company;
  if (companyInfo === "none") return;

  companyInfo = await JSON.parse(companyInfo);
  const company = await db.query.companyTable.findFirst({
    // @ts-expect-error
    where: eq(companyTable.id, companyInfo.id),
    columns: {
      id: true,
      name: true,
      taskList: true,
      request: true,
      employees: true,
      feedBack: true,
      operations: true,
    },
  });
  if (!company) {
    return "none";
  }
  return company;
};

export const getAllCompanies = async () => {
  const companies = await db.query.companyTable.findMany({
    columns: {
      id: true,
      name: true,
      category: true,
    },
  });
  return companies;
};

export const getCompanyById = async (companyId: string) => {
  const company = await db.query.companyTable.findFirst({
    where: eq(companyTable.id, companyId),
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

export const sentJoinRequest = async (companyId: string, user: UserProps) => {
  try {
    const company = await getCompanyById(companyId);
    if (typeof company == "string" || !company) {
      return;
    }
    // @ts-expect-error
    let request = JSON.parse(company?.request);

    const alreadySent = request.find(
      // @ts-expect-error
      (soloRequest) => soloRequest.userId === userId,
    );
    if (alreadySent) {
      return;
    }

    request.push({
      userId: user.id,
      name: user.name,
      email: user.email,
      cellphone: user.cellphone,
      companyId: companyId,
    });
    await db
      .update(companyTable)
      .set({
        request: JSON.stringify(request),
      })
      .where(eq(companyTable.id, companyId));
  } catch (error) {
    console.log(error);
  }
};

export const acceptJoinRequest = async (companyId: string, userId: string) => {
  try {
    const company = await getCompanyById(companyId);
    if (typeof company == "string" || !company) {
      return;
    }
    const user = await getUserFromId(userId);
    if (!user) {
      return;
    }

    // @ts-expect-error
    let employeesList = JSON.parse(company?.employees);
    employeesList.push(user);

    // @ts-expect-error
    let request = JSON.parse(company?.request);
    const newListRequest = request.filter(
      // @ts-expect-error
      (soloRequest) => soloRequest.userId != userId,
    );

    await db
      .update(companyTable)
      .set({
        employees: JSON.stringify(employeesList),
        request: JSON.stringify(newListRequest),
      })
      .where(eq(companyTable.id, companyId));

    await db
      .update(usersTable)
      .set({
        company: JSON.stringify({
          id: companyId,
          name: company.name,
        }),
      })
      .where(eq(usersTable.id, userId));

    revalidatePath("/team");
  } catch (error) {
    console.log(error);
  }
};

export const userAlreadyVote = async (user: UserProps) => {
  try {
    // @ts-expect-error
    const userCompany = JSON.parse(user?.company);
    const company = await getCompanyById(userCompany.id);
    if (typeof company == "string" || !company) {
      return true;
    }

    // @ts-expect-error
    let feedBack = JSON.parse(company?.feedBack);
    const newListRequest = feedBack.voted.filter(
      // @ts-expect-error
      (soloRequest) => soloRequest.userId == userId,
    );

    if (newListRequest.length == 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};

export const changeRating = async (ratingName: string, user: UserProps) => {
  try {
    // @ts-expect-error
    const userCompany = JSON.parse(user?.company);
    const company = await getCompanyById(userCompany.id);
    if (typeof company == "string" || !company) {
      return;
    }

    // @ts-expect-error
    let feedBack = JSON.parse(company?.feedBack);
    const newListRequest = feedBack.voted.filter(
      // @ts-expect-error
      (soloRequest) => soloRequest.userId == userId,
    );
    if (newListRequest.legnth == 0) {
      return;
    }

    switch (ratingName) {
      case "Super Good":
        feedBack.rating[0].sales++;
        break;

      case "Good":
        feedBack.rating[1].sales++;
        break;

      case "Medium":
        feedBack.rating[2].sales++;
        break;

      case "Not well":
        feedBack.rating[3].sales++;
        break;

      default:
        feedBack.rating[4].sales++;
        break;
    }

    feedBack.voted.push(user.id);

    console.log(feedBack);

    await db
      .update(companyTable)
      .set({
        feedBack: JSON.stringify(feedBack),
      })
      .where(eq(companyTable.id, company.id));

    revalidatePath("/home");
  } catch (error) {
    console.log(error);
  }
};
