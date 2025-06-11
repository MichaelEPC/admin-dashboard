import "server-only";

import { db } from "app/db";
import { eq } from "drizzle-orm";
import { companyTable } from "app/db/schema";
import { getCompany } from "app/actions/Company/GetCompany";

const deleteBillFromDB = async (id: string) => {
  try {
    const company = await getCompany();

    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-ignore
    const bills = await JSON.parse(company.bills);
    const newList = bills
      .map((item: any) => {
        if (item.id != id) {
          return item;
        }
      })
      .filter((item: any) => item);

    await db
      .update(companyTable)
      .set({
        bills: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};

export default deleteBillFromDB;
