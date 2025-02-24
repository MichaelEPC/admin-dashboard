interface Props {
  list: [];
}

export const nameMonthOnListMonthExpenses = ({ list }: Props) => {
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
    },
    {
      textualMonth: "feb",
    },
    {
      textualMonth: "mar",
    },
    {
      textualMonth: "apr",
    },
    {
      textualMonth: "may",
    },
    {
      textualMonth: "jun",
    },
    {
      textualMonth: "jul",
    },
    {
      textualMonth: "aug",
    },
    {
      textualMonth: "sep",
    },
    {
      textualMonth: "oct",
    },
    {
      textualMonth: "nov",
    },
    {
      textualMonth: "dec",
    },
  ];

  const listFormatted = listFormat.filter((months: any) => {
    listWithMonths.map((itemList: any) => {
      if (months.textualMonth === itemList.textualMonth) {
        months[itemList.name] = itemList.amount;
      }
    });
    return months;
  });

  return listFormatted;
};

export const getCategoriesFromMonthExpenses = ({ list }: Props) => {
  if (!list) return [];

  const listFormatted = list.map((itemList: any) => {
    return itemList.name;
  });
  const uniqueArray = Array.from(new Set(listFormatted));

  return uniqueArray;
};
