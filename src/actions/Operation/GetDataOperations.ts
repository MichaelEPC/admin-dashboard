"use server";

import { getAllOperationsAction } from "./GetAllOperations";

export const getDataOperationsAction = async () => {
  const operationList = await getAllOperationsAction();

  const listFormat = [
    {
      date: "jan",
      name: "jan",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "feb",
      name: "feb",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "mar",
      name: "mar",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "apr",
      name: "apr",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "may",
      name: "may",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "jun",
      name: "jun",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "jul",
      name: "jul",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "aug",
      name: "aug",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "sep",
      name: "sep",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "oct",
      name: "oct",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "nov",
      name: "nov",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
    {
      date: "dec",
      name: "dec",
      Losses: 0,
      Earnings: 0,
      Total: 0,
    },
  ];

  try {
    const list = listFormat.filter((months: any) => {
      operationList.map((operation: any) => {
        if (months.date == operation.month) {
          if (operation.category == "win") {
            months.Earnings += parseFloat(operation.amount);
          } else {
            months.Losses += parseFloat(operation.amount);
          }
        }
      });
      months.Total = parseFloat(months.Earnings) + parseFloat(months.Losses);
      return months;
    });

    let totalEarnings = 0;
    let totalLosses = 0;

    list.map((operation: any) => {
      totalEarnings += parseFloat(operation.Earnings);
      totalLosses += parseFloat(operation.Losses);
    });

    const resume =
      ((parseFloat(totalEarnings) - parseFloat(totalLosses)) / totalEarnings) *
      100;
    return { list, resume };
  } catch (error) {}
};
