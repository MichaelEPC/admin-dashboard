import EmployeeContainer from "./_Components/EmployeesContainer";
import Request from "./_Components/Request";

const AdminTeam = async () => {
  return (
    <section className="flex h-auto w-full flex-col p-10 x3:flex-row">
      <div className="flex h-auto w-full flex-col items-center border-2 border-ligh-gray bg-white p-2 pb-8 shadow-lg x3:w-3/5">
        <h3 className="text-2xl font-bold text-principal-color">
          Members of the company
        </h3>
        <EmployeeContainer />
      </div>
      <div className="mt-4 flex h-auto w-full justify-end x3:mt-0 x3:w-2/5">
        <Request />
      </div>
    </section>
  );
};

export default AdminTeam;
