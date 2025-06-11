"use server";

import { getClientsFromDB } from "./getClients";

export const getClientsToDashBoardAction = async () => {
  try {
    const res = await getClientsFromDB();
    return res;
  } catch (error) {
    console.log(error);
  }
};
