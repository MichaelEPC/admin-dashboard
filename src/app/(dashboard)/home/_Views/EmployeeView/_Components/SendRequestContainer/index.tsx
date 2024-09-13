import { getCompanies } from "app/actions/Company/GetAllCompanys";
import CompanyItems from "./CompanyItems";

const SendRequestContainer = async () => {
  const companies = await getCompanies();
  return (
    <div className="mt-4 h-auto w-full rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md md:w-3/5">
      {companies.map((company) => (
        <CompanyItems
          key={company.id}
          id={company.id}
          name={company.name}
          category={company.category}
        />
      ))}
    </div>
  );
};

export default SendRequestContainer;
