import ItemsRequest from "../ItemsRequest";
import { getJoinRequest } from "app/actions/Company/getJoinRequest";

const Request = async () => {
  const request = await getJoinRequest();
  console.log(request);

  return (
    <div className="flex h-auto w-full flex-col items-center rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md x3:w-3/5">
      <h3 className="mt-1 text-2xl font-bold text-principal-color">
        Join request
      </h3>
      {typeof request != "object" && <p>No requests found</p>}
      {request?.length == 0 && (
        <p className="mt-1 font-semibold text-text-color">No requets found</p>
      )}
      {typeof request === "object" &&
        request.map((request) => (
          // Keyy!!!!!!
          <ItemsRequest name="hola" email="ejemplo@gmail.com" />
        ))}
    </div>
  );
};

export default Request;
