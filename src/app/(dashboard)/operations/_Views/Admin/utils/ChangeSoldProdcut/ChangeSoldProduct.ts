import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  amount: string | number;
  date: string;
}

export const changeSoldProductFromDB = async ({
  id,
  amount,
  date,
}: ControlProps) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-expect-error
    const productsSold = await JSON.parse(company.mostProductSold);
    const newList = productsSold.list.map((product: any) => {
      if (product.id === id) {
        // @ts-ignore
        product.amount = parseFloat(amount);
        product.date = date;
      }

      return product;
    });

    productsSold.list = newList;
    await db
      .update(companyTable)
      .set({
        mostProductSold: JSON.stringify(productsSold),
      })
      .where(eq(companyTable.id, company.id));
    return true;
  } catch (error) {
    console.log(error);
  }
};
