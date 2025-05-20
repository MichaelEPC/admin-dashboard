import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getIncomesGeneratedAction = async ({
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
    let incomesNumber = 0;
    // @ts-expect-error
    const incomes = await JSON.parse(company.incomes);

    incomes.map((income: any) => {
      if (`${date.years}-${date.month}` == income.date.slice(0, 7)) {
        incomesNumber += income.profit;
      }
    });

    if (incomesNumber == undefined || incomesNumber == null) return 0;

    return incomesNumber;
  } catch (error) {
    console.log(error);
  }
};
