"use server";

export const getTodayDate = async () => {
  const date = new Date();
  const day = date.getDate();
  let month = (date.getMonth() + 1).toLocaleString();
  if (month.length === 1) month = `0${month}`;
  const years = date.getFullYear();
  return { day, month, years };
};
