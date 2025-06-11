"use server";

import { getClientsFromDB } from "./getClients";

export const getClientsAction = async () => {
  try {
    const res = await getClientsFromDB();
    return res;
  } catch (error) {
    console.log(error);
  }
};
