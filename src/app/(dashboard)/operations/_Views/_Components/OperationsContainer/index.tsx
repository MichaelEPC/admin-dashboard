const OperationsContainer = async () => {
  return (
    <div className="mt-2 h-auto w-full rounded-lg bg-white p-4">
      <div className="mt-2 flex justify-between rounded-lg border-2 border-ligh-gray p-4 px-2">
        <p className="font-semibold text-text-color">BitCoin</p>
        <p className="font-semibold text-text-color">Started in: 2024/14/02</p>
        <p className="font-semibold text-text-color">State: working</p>
        <p className="font-semibold text-text-color">
          Earning: <span className="text-green-300">2000$</span>
        </p>
        <div className="cursor-pointer">
          <svg
            className="h-8 w-8 fill-principal-color"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OperationsContainer;
