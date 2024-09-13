import AreaContainer from "./_Components/AreaContainer/indext";
import DonutOperationsContainer from "./_Components/DonutContainer";

const operation = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center p-10">
      <div className="flex h-auto w-full items-center">
        <DonutOperationsContainer />
        <AreaContainer />
      </div>
      <section className="h-auto w-full">
        <p className="mt-4 text-2xl font-semibold text-text-color">
          Last works
        </p>
      </section>
    </div>
  );
};

export default operation;
