"use server";
import { getCompany } from "./GetCompany";

export const getJoinRequest = async () => {
  try {
    const company = await getCompany();
    if (company === "none") return "Join a company";
    let joinRequests = company?.request;
    joinRequests = JSON.parse(joinRequests);
    return joinRequests;
  } catch (error) {}
};
