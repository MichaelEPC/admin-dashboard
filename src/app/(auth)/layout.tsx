export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex h-auto w-full justify-center">{children}</main>;
}
