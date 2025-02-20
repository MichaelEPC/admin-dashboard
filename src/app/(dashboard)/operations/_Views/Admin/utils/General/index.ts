interface Props {
  list: [];
}

export const getYearsWorked = ({ list }: Props): number[] => {
  // @ts-ignore
  if (list.length === 0) return "---";

  const years = list.map((singleData) => {
    // @ts-ignore
    return singleData.date.split("-")[0];
  });

  const uniqueYears = Array.from(new Set(years));
  return uniqueYears.sort().reverse();
};

export const nameMonthOnList = ({ list }: Props) => {
  // @ts-ignore
  if (list?.length === 0) return [];

  const listWithMonths = list?.map((singleData) => {
    // @ts-ignore
    switch (singleData.date.split("-")[1] + "") {
      case "01":
        // @ts-ignore
        singleData["textualMonth"] = "jan";
        break;

      case "02":
        // @ts-ignore
        singleData["textualMonth"] = "feb";
        break;

      case "03":
        // @ts-ignore
        singleData["textualMonth"] = "mar";
        break;

      case "04":
        // @ts-ignore
        singleData["textualMonth"] = "apr";
        break;

      case "05":
        // @ts-ignore
        singleData["textualMonth"] = "may";
        break;

      case "06":
        // @ts-ignore
        singleData["textualMonth"] = "jun";
        break;

      case "07":
        // @ts-ignore
        singleData["textualMonth"] = "jul";
        break;

      case "08":
        // @ts-ignore
        singleData["textualMonth"] = "aug";
        break;

      case "09":
        // @ts-ignore
        singleData["textualMonth"] = "sep";
        break;

      case "10":
        // @ts-ignore
        singleData["textualMonth"] = "oct";
        break;

      case "11":
        // @ts-ignore
        singleData["textualMonth"] = "nov";
        break;

      default:
        // @ts-ignore
        singleData["textualMonth"] = "dec";
        break;
    }
    return singleData;
  });

  const listFormat = [
    {
      textualMonth: "jan",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "feb",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "mar",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "apr",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "may",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "jun",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "jul",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "aug",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "sep",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "oct",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "nov",
      Expense: 0,
      Income: 0,
    },
    {
      textualMonth: "dec",
      Expense: 0,
      Income: 0,
    },
  ];

  const listFormatted = listFormat.filter((months: any) => {
    listWithMonths.map((itemList: any) => {
      if (months.textualMonth === itemList.textualMonth) {
        if (itemList.category == "Expense") {
          months.Expense += parseFloat(itemList.amount);
        } else {
          months.Income += parseFloat(itemList.amount);
        }
      }
    });
    return months;
  });

  return listFormatted;
};
