import { getYearsWorked } from "app/app/(dashboard)/operations/_Views/Admin/utils/General";
import BillsChart from "./BillChart";
import { getBillsAction } from "app/app/(dashboard)/operations/_Views/Admin/utils/GetBills";

export const ShowBillsContainer = async () => {
  // @ts-ignore
  const list = await getBillsAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="flex h-auto w-full items-center justify-center">
      <BillsChart list={list} years={years} />
    </div>
  );
};
