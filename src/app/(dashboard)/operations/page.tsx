import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import Admin from "./_Views/Admin";
import Employee from "./_Views/Employee";

const operation = async () => {
  const user = await isUserLog();
  return (
    <div className="flex h-auto w-full flex-col items-center">
      {user?.rol === "owner" ? <Admin /> : <Employee />}
    </div>
  );
};

export default operation;
