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
        request.map((soloRequest) => (
          // Keyy!!!!!!
          <ItemsRequest
            key={soloRequest.userId}
            companyId={soloRequest.companyId}
            userId={soloRequest.userId}
            name={soloRequest.name}
            email={soloRequest.email}
          />
        ))}
    </div>
  );
};

export default Request;
