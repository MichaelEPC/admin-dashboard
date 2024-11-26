import ItemsEmployees from "../ItemsEmployee";
import { getEmployees } from "app/actions/Company/getEmployees";
const EmployeeContainer = async () => {
  const employee = await getEmployees();
  return (
    <div className="mt-2 grid h-auto w-full grid-cols-1 px-4">
      {typeof employee != "object" && <p>Join a company</p>}
      {typeof employee === "object" &&
        // @ts-expect-error
        employee.map((employ: any) => (
          <ItemsEmployees
            key={employ.email}
            name={employ.name}
            email={employ.email}
            rol={employ.job}
          />
        ))}
    </div>
  );
};

export default EmployeeContainer;
