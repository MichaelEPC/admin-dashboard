import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import Admin from "./_Views/Admin";
import EmployeeView from "./_Views/EmployeeView";

const home = async () => {
  const user = await isUserLog();
  let isEmployee = true;
  if (user?.rol === "owner") {
    isEmployee = false;
    console.log("d");
  }

  return <>{isEmployee ? <EmployeeView /> : <Admin />}</>;
};

export default home;
