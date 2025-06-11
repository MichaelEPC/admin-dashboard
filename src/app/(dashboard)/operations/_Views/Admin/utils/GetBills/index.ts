"use server";

import { getBillsFromDB } from "./getBills";

export const getBillsAction = async () => {
  try {
    const res = await getBillsFromDB();
    return res;
  } catch (error) {
    console.log(error);
  }
};
