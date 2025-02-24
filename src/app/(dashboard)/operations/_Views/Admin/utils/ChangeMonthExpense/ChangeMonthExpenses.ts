import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  name: string;
  amount: string | number;
  date: string;
}

const changeMonthExpenseFromDB = async ({
  id,
  name,
  amount,
  date,
}: ControlProps) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-ignore
    const monthExpenses = await JSON.parse(company.monthlyExpenses);

    const editedMonthExpenses = monthExpenses
      .map((monthExpense: any) => {
        if (monthExpense.id === id) {
          return {
            id: id,
            name: name,
            amount: amount,
            date: date,
          };
        }
        return monthExpense;
      })
      .filter((monthExpense: any) => monthExpense);

    await db
      .update(companyTable)
      .set({
        monthlyExpenses: JSON.stringify(editedMonthExpenses),
      })
      .where(eq(companyTable.id, company.id));

    return editedMonthExpenses;
  } catch (error) {
    console.log(error);
  }
};

export default changeMonthExpenseFromDB;
