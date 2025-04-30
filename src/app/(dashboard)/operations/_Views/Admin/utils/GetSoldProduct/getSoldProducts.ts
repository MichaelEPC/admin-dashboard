import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getSoldProductsFromDB = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const soldProducts = await JSON.parse(company.mostProductSold);
    return soldProducts;
  } catch (error) {
    console.log(error);
  }
};
