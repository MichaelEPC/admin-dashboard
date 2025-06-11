import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const sendBillToDB = async (
  name: string,
  amount: string,
  category: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const bills = await JSON.parse(company.bills);
    const uniqueId = crypto.randomUUID();
    bills.unshift({
      id: uniqueId,
      name: name,
      amount: parseFloat(amount),
      category: category,
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        bills: JSON.stringify(bills),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
