import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getIncomeProfitMonthlyAction = async ({
  date,
}: {
  date: {
    day: string | number;
    month: string | number;
    years: string | number;
  };
}) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const incomes = await JSON.parse(company.incomes);

    const monthlyIncome: any[] = [];
    let netProfitTotal: number = 0;
    let incomeTotal: number = 0;

    incomes
      .map((income: any) => {
        if (`${date.years}-${date.month}` == income.date.slice(0, 7)) {
          netProfitTotal += parseFloat(income.profit);
          incomeTotal += parseFloat(income.revenue);
          income["Income"] = income.profit;
          monthlyIncome.push(income);
        }
      })
      .filter((item: any) => item);

    if (!monthlyIncome || monthlyIncome.length === 0) return [];

    return { monthlyIncome, netPorcent: (netProfitTotal / incomeTotal) * 100 };
  } catch (error) {
    console.log(error);
  }
};
