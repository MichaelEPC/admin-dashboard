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

    return clients;
  } catch (error) {
    console.log(error);
  }
};
