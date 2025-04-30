interface Props {
  list: [] | undefined;
  products: [] | undefined;
}

export const getMostSoldProductsForForm = ({ list }: any) => {
  if (!list || list.length === 0) return;

  // @ts-ignore
  const separatedProducts = list.map((item: any) => {
    return item.name;
  });
  const uniqueArray = Array.from(new Set(separatedProducts));

  const listFormatted = uniqueArray.map((item: any) => {
    return {
      name: item,
      amount: 0,
    };
  });
  const finalList = list.map((itemList: any) => {
    listFormatted.map((item: any) => {
      if (item.name === itemList.name) {
        item.amount += itemList.amount;
      }
    });
  });
  return finalList;
};

export const transformMostSoldProducts = ({ list }: Props) => {
  // @ts-ignore
  const separatedProducts = list.map((item: any) => {
    return item.name;
  });
  const uniqueArray = Array.from(new Set(separatedProducts));

  const listFormatted = uniqueArray.map((item: any) => {
    return {
      name: item,
      amount: 0,
    };
  });

  if (!list) return;

  const finalList = list.map((itemList: any) => {
    listFormatted.map((item: any) => {
      if (item.name === itemList.name) {
        item.amount += itemList.amount;
      }
    });
  });
  return finalList;
};

export const nameMonthOnListProductSold = ({ list, products }: Props) => {
  // @ts-ignore
  if (list?.length === 0) return [];

  // @ts-ignore
  let listFormat = getProductList({ products });
  listFormat = listFormat.map((productName: any) => {
    return {
      name: productName,
      Earn: 0,
    };
  });

  if (!listFormat || listFormat.length === 0) return;

  const donutList = list?.map((product: any) => {
    listFormat.map((productFormat: any) => {
      if (productFormat?.name === product?.product.name) {
        productFormat.Earn += product.amount;
      }
    });
  });

  return listFormat;
};

export const getProductList = ({ products }: Props) => {
  const listProduct = products?.map((product: any) => {
    return product.name;
  });
  return Array.from(new Set(listProduct));
};
