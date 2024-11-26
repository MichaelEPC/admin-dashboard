import EmployeeContainer from "../Admin/_Components/EmployeesContainer";

const EmployeeTeam = () => {
  return (
    <section className="mt-2 flex h-auto w-full justify-center">
      <section className="flex h-auto w-full flex-col items-center bg-white p-2 shadow-md x3:w-2/4">
        <h3 className="text-2xl font-bold text-principal-color">My team</h3>
        <EmployeeContainer />
      </section>
    </section>
  );
};

export default EmployeeTeam;
