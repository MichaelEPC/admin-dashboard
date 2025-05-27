import { getYearsWorked } from "../../utils/General";
import { getSoldProductsAction } from "../../utils/GetSoldProduct";
import MostSellChart from "./MostSellChart";

const MostSellsChartContainer = async () => {
  // @ts-ignore
  const soldProducts = await getSoldProductsAction();

  const years = getYearsWorked({
    list: soldProducts.list,
  });

  if (!soldProducts || !years) {
    // Manejar el error o retornar fallback
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="ml-0 mt-4 x2:ml-12 x2:mt-0">
      <MostSellChart
        list={soldProducts.list}
        products={soldProducts.products}
        years={years}
      />
    </div>
  );
};

export default MostSellsChartContainer;
