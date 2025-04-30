import "server-only";

import { db } from "app/db";
import { eq } from "drizzle-orm";
import { companyTable } from "app/db/schema";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  name: string;
  gainAmount: string;
  investedAmount: string;
  date: string;
}

const ChangeIncomeFromDB = async ({
  id,
  name,
  gainAmount,
  investedAmount,
  date,
}: ControlProps) => {
  try {
    const company = await getCompany();

    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-ignore
    const income = await JSON.parse(company.incomes);
    const newList = income
      .map((item: any) => {
        if (item.id === id) {
          return {
            id: id,
            name: name,
            revenue: gainAmount,
            spent: investedAmount,
            profit: parseFloat(gainAmount) - parseFloat(investedAmount),
            date: date,
          };
        }
        return item;
      })
      .filter((item: any) => item);

    await db
      .update(companyTable)
      .set({
        incomes: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));

    if (JSON.stringify(newList) !== JSON.stringify(income)) return true;

    return false;
  } catch (error) {
    console.log(error);
  }
};

export default ChangeIncomeFromDB;
