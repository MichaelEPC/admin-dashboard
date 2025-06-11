import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const sendClientToDB = async (name: string, date: string) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const clients = await JSON.parse(company.clients);
    const uniqueId = crypto.randomUUID();
    clients.unshift({
      id: uniqueId,
      name: name,
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        clients: JSON.stringify(clients),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
