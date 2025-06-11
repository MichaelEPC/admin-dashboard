import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const sendProductSoldToDB = async (
  product: string,
  amount: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const productSold = await JSON.parse(company.mostProductSold);
    const uniqueId = crypto.randomUUID();
    productSold.list.unshift({
      id: uniqueId,
      product: JSON.parse(product),
      amount: parseFloat(amount),
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        mostProductSold: JSON.stringify(productSold),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
