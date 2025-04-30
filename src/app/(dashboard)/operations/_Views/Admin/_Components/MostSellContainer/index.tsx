import { getYearsWorked } from "../../utils/General";
import { getSoldProductsAction } from "../../utils/GetSoldProduct";
import MostSellChart from "./MostSellChart";

const MostSellsChartContainer = async () => {
  // @ts-ignore
  const soldProducts = await getSoldProductsAction();

  const years = getYearsWorked({
    list: soldProducts.list,
  });

  return (
    <div>
      <MostSellChart
        list={soldProducts.list}
        products={soldProducts.products}
        years={years}
      />
    </div>
  );
};

export default MostSellsChartContainer;
