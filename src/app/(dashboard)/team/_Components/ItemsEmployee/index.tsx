const ItemsEmployees = ({
  name,
  email,
  rol,
}: {
  name: string;
  email: string;
  rol: string;
}) => {
  return (
    <article className="mt-2 flex h-12 w-full flex-row items-center justify-around rounded-lg border-2 border-ligh-gray p-4">
      <div className="flex h-auto justify-center">
        <svg
          className="h-10 w-10 fill-test-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
        </svg>
      </div>
      <p className="text-lg font-medium text-text-color">{name}</p>
      <p className="hidden text-lg font-medium text-text-color md:block">
        {email}
      </p>
      <p className="hidden text-lg font-medium text-text-color sm:block">
        {rol}
      </p>
    </article>
  );
};

export default ItemsEmployees;
