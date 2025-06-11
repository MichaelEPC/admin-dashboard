import "server-only";

import { db } from "app/db";
import { eq } from "drizzle-orm";
import { companyTable } from "app/db/schema";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  name: string;
  amount: string;
  category: string;
  date: string;
}

const ChangeBillFromDB = async ({
  id,
  name,
  amount,
  category,
  date,
}: ControlProps) => {
  try {
    const company = await getCompany();

    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-ignore
    const bills = await JSON.parse(company.bills);
    const newList = bills
      .map((item: any) => {
        if (item.id === id) {
          return {
            id: id,
            name: name,
            amount: parseFloat(amount),
            category: category,
            date: date,
          };
        }
        return item;
      })
      .filter((item: any) => item);

    await db
      .update(companyTable)
      .set({
        bills: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));

    if (JSON.stringify(newList) !== JSON.stringify(bills)) return true;

    return false;
  } catch (error) {
    console.log(error);
  }
};

export default ChangeBillFromDB;
