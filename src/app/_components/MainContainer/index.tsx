const MainContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="mainContainer flex flex-col items-center justify-between">
      {children}
    </main>
  );
};

export default MainContainer;
