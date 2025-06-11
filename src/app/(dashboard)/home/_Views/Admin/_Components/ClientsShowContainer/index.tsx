import { DonutChartGraphic } from "app/app/_components/DonutChart";
import { getClientsToDashBoardAction } from "./GetClients";
import { getClientsAction } from "app/app/(dashboard)/operations/_Views/Admin/utils/GetClients";
import { getYearsWorked } from "app/app/(dashboard)/operations/_Views/Admin/utils/General";
import HistoryEarningsChart from "app/app/(dashboard)/operations/_Views/Admin/_Components/ClientsContainer/ClientsChart/History";
import ShowMoreContainer from "app/app/(dashboard)/operations/_Views/Admin/_Components/ClientsContainer/ClientsChart/ShowMoreContainer";

export const ClientContainer = async () => {
  // @ts-ignore
  const { listFormat, categories } = await getClientsToDashBoardAction();

  const list = await getClientsAction();

  const years = getYearsWorked({
    list: list,
  });
  HistoryEarningsChart;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div>
        <DonutChartGraphic
          data={listFormat}
          indexName="name"
          category="value"
          categories={categories}
          legend={false}
        />
      </div>
      <div className="min-w-52 md:w-auto">
        <HistoryEarningsChart cashflows={list} hideDate={true} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <ShowMoreContainer list={list} years={years} />
      </div>
    </div>
  );
};
