const ButtonSubmit = ({ label, ...bttonProps }: { label: string }) => {
  return (
    <button
      className="w-full rounded-lg bg-principal-color p-2 text-lg font-semibold text-white"
      type="submit"
    >
      {label}
    </button>
  );
};

export default ButtonSubmit;
