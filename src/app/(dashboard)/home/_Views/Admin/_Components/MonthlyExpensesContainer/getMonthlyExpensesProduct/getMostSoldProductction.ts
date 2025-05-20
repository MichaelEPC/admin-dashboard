import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getMonthlyExpensesAction = async ({
  date,
}: {
  date: { day: number; month: string; years: number };
}) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const allMontlyExpenses = await JSON.parse(company.monthlyExpenses);

    const montlyExpenses: any[] = [];

    allMontlyExpenses.map((expense: any) => {
      if (expense.date.slice(0, 7) == `${date.years}-${date.month}`) {
        expense.date = expense.date.slice(0, 7);
        expense[expense.name] = expense.amount;
        montlyExpenses.push(expense);
      }
    });

    return montlyExpenses;
  } catch (error) {
    console.log(error);
  }
};
