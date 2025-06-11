import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getClientsFromDB = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const clients = await JSON.parse(company.clients);

    if (!clients) return [];

    let categories = clients
      .map((item: any) => {
        return item.name;
      })
      .filter((isUndefined: any) => isUndefined);

    categories = Array.from(new Set(categories));

    const listFormat = categories.map((item: any) => {
      return {
        name: item,
        value: 1,
      };
    });

    return { listFormat, categories };
  } catch (error) {
    console.log(error);
  }
};
