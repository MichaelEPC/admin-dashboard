import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import AdminAgenda from "./_Views/Admin";
import EmployeeAgenda from "./_Views/Employee";

const Agenda = async () => {
  const user = await isUserLog();

  return (
    <div className="flex h-auto w-full flex-col items-center">
      {user?.rol === "owner" ? <AdminAgenda /> : <EmployeeAgenda />}
    </div>
  );
};

export default Agenda;
