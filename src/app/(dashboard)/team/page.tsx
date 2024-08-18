import Image from "next/image";
import EmployeeContainer from "./_Components/EmployeesContainer";
import Request from "./_Components/Request";
const team = () => {
  return (
    <div className="flex h-auto w-full flex-col p-10 x3:flex-row">
      <section className="flex h-auto w-full flex-col items-center border-2 border-ligh-gray bg-white p-2 shadow-md x3:w-2/4">
        <h3 className="text-2xl font-bold text-principal-color">My team</h3>
        <EmployeeContainer />
      </section>
      <section className="mt-4 flex h-auto w-full justify-end x3:mt-0 x3:w-2/4">
        <Request />
      </section>
    </div>
  );
};

export default team;
