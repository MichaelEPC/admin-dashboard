import "server-only";

import { db } from "app/db";
import { eq } from "drizzle-orm";
import { companyTable } from "app/db/schema";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  name: string;
  date: string;
}

const ChangeClientsFromDB = async ({ id, name, date }: ControlProps) => {
  try {
    const company = await getCompany();

    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-ignore
    const clients = await JSON.parse(company.clients);
    const newList = clients
      .map((item: any) => {
        if (item.id === id) {
          return {
            id: id,
            name: name,
            date: date,
          };
        }
        return item;
      })
      .filter((item: any) => item);

    await db
      .update(companyTable)
      .set({
        clients: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));

    if (JSON.stringify(newList) !== JSON.stringify(clients)) return true;

    return false;
  } catch (error) {
    console.log(error);
  }
};

export default ChangeClientsFromDB;
