import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getSellsProductsAction = async () => {
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
          if (!(product.name in product)) product[product.name] = 0;
          product[product.name] += 1;
        }
      });
      if (!(product.name in product)) product[product.name] = 0;
    });

    return products;
  } catch (error) {
    console.log(error);
  }
};
