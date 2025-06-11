import { getYearsWorked } from "../../utils/General";
import { getClientsAction } from "../../utils/GetClients";
import ClientsChart from "./ClientsChart";

const ClientsContainer = async () => {
  // @ts-ignore
  const list = await getClientsAction();

  const years = getYearsWorked({
    list: list,
  });

  if (!list || !list) {
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="ml-0 mt-4 flex h-auto w-full items-center justify-center x2:ml-12 x3S:mt-0">
      <ClientsChart list={list} years={years} />
    </div>
  );
};

export default ClientsContainer;
