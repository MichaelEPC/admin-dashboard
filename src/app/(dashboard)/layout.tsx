import { Inter } from "next/font/google";
import HeaderContainer from "../_components/HeaderContainer";
import Nav from "../_components/Nav";
import MainContainer from "../_components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
