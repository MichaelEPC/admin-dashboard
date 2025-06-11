import { isUserLog } from "app/actions/Auth/CheckUserSingIn";
import Admin from "./_Views/Admin";

export const dynamic = "force-dynamic";

const Operation = async () => {
  const user = await isUserLog();

  if (!user || !user) {
    // Manejar el error o retornar fallback
    return <div>Error cargando datos</div>;
  }

  return (
    <div className="flex h-auto w-full flex-col items-center">
      {user?.rol === "owner" ? <Admin /> : ""}
    </div>
  );
};

export default Operation;
