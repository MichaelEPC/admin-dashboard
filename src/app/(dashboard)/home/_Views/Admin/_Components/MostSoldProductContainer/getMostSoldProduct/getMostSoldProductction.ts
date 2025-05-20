import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getMostSoldProductAction = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const soldProducts = await JSON.parse(company.mostProductSold);

    const products = soldProducts.products;
    const listSells = soldProducts.list;

    products.map((product: any) => {
      listSells.map((sell: any) => {
        if (sell.product.id == product.id) {
          if (!("value" in product)) product["value"] = 0;
          product["value"] += sell.amount;
        }
      });
    });

    let organizedList = products
      .sort((a: any, b: any) => b.value - a.value)
      .slice(0, 5);

    return organizedList;
  } catch (error) {
    console.log(error);
  }
};
