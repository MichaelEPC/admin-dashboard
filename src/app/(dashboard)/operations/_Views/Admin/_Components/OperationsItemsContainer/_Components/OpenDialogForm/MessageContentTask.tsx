import { deleteOperationAction } from "app/actions/Operation/DeleteOperation";
import ButtonSubmit from "app/app/_components/ButtonSubmit";

const MessageContentTask = ({
  id,
  setIsOpen,
}: {
  id: string;
  setIsOpen: (bol: boolean) => void;
}) => {
  return (
    <>
      <div className="mb-4 h-auto w-full">
        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">Delete operation:</h4>
        </div>
        <div
          className="w-8 cursor-pointer rounded-lg bg-red-500 fill-white p-1"
          onClick={async () => {
            await deleteOperationAction(id);
            setIsOpen(false);
          }}
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
          </svg>
        </div>
      </div>

      <div
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ButtonSubmit label="Got it!" />
      </div>
    </>
  );
};

export default MessageContentTask;
