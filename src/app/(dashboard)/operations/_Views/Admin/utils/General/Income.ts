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
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "feb",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "mar",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "apr",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "may",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "jun",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "jul",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "aug",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "sep",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "oct",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "nov",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
    {
      textualMonth: "dec",
      Net: 0,
      Inverted: 0,
      Income: 0,
    },
  ];

  const listFormatted = listFormat.filter((months: any) => {
    listWithMonths.map((itemList: any) => {
      if (months.textualMonth === itemList.textualMonth) {
        months.Income += parseFloat(itemList.revenue);
        months.Inverted += parseFloat(itemList.spent);
        months.Net += parseFloat(itemList.profit);
      }
    });
    return months;
  });

  return listFormatted;
};
