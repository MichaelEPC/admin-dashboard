import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getProductsNumberAction = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const soldProducts = await JSON.parse(company.mostProductSold);

    let productsAmount = soldProducts.products.length;

    return productsAmount;
  } catch (error) {
    console.log(error);
  }
};
