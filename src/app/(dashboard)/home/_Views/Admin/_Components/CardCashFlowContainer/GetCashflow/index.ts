"use server";

import { getCashFlowNumberAction } from "./getCashFlowAction";

export const getCashFlowNumber = async () => {
  try {
    const number = await getCashFlowNumberAction();
    return number;
  } catch (error) {
    console.log(error);
  }
};
