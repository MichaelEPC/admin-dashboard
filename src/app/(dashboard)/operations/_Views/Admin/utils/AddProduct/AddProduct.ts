import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const sendProductToDB = async (
  name: string,
  category: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const mostProductSold = await JSON.parse(company.mostProductSold);
    const uniqueId = crypto.randomUUID();

    mostProductSold.products.push({
      id: uniqueId,
      name: capitalizeFirstLetter(name).trim(),
      category: capitalizeFirstLetter(category).trim(),
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        mostProductSold: JSON.stringify(mostProductSold),
      })
      .where(eq(companyTable.id, company.id));
    return mostProductSold;
  } catch (error) {
    console.log(error);
  }
};
