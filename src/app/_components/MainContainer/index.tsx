import style from "./style.module.css";

const MainContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className={`z-20 flex flex-col ${style.mainContainer} `}>
      {children}
    </main>
  );
};

export default MainContainer;
