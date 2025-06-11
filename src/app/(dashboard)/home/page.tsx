import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import Admin from "./_Views/Admin";

const Home = async () => {
  const user = await isUserLog();
  let isEmployee = true;
  if (user?.rol === "owner") {
    isEmployee = false;
  }

  return <>{!isEmployee ? <Admin /> : ""}</>;
};

export default Home;
