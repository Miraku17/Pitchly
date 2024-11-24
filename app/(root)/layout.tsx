import NavBar from "../components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
        <NavBar />
        {children}
    </main>
  );
}
