export const filterData = (list: [], yearSelected: number) => {
  if (list?.length === 0 || list === undefined) return [];

  const filteredData = list.filter((singleData) => {
    // @ts-ignore
    const yearData = parseInt(singleData.date.split("-")[0]);
    return yearData === yearSelected;
  });

  return filteredData;
};

export const getRecentYear = (list: []) => {
  if (list?.length === 0 || list === undefined) return [];

  const filteredData = list.map((singleData) => {
    // @ts-ignore
    const yearData = parseInt(singleData.date.split("-")[0]);

    return yearData;
  });
  return Array.from(new Set(filteredData))
    .sort((a, b) => a - b)
    .at(-1);
};
