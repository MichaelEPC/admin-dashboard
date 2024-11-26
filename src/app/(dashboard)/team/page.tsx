import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import AdminTeam from "./_Views/Admin";
import EmployeeTeam from "./_Views/Employee";

const team = async () => {
  const user = await isUserLog();
  return (
    <div className="flex h-auto w-full flex-col items-center">
      {user?.rol === "owner" ? <AdminTeam /> : <EmployeeTeam />}
    </div>
  );
};

export default team;
