import { putJoinRequest } from "app/actions/Company/putJoinRequest";
import { OpenDialog } from "app/app/_components/OpenDialog";

const CompanyItems = ({
  id,
  name,
  category,
}: {
  id: string;
  name: string;
  category: string;
}) => {
  const action = async () => {
    await putJoinRequest(id);
  };
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between border-2 border-ligh-gray p-4 mb:flex-row">
      <div className="mb-2 flex items-center">
        <p className="text-lg font-semibold text-principal-color">
          <span className="text-text-color">Name: </span>
          {` ${name}`}
        </p>
      </div>
      <div className="mb-2 flex items-center">
        <p className="text-lg font-semibold text-principal-color">
          <span className="text-text-color">Category: </span>
          {category}
        </p>
      </div>
      <OpenDialog
        buttonTitle="Sent join request"
        title="Succesfull!"
        content="We sent your request to the company required, please wait till they respond."
        action={action}
      />
    </div>
  );
};

export default CompanyItems;
