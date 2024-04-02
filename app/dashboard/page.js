import SignOut from "./signout";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-zinc-100 items-center justify-center px-5 md:px-0">
      <p className="mb-5">Dashboard</p>
      <SignOut />
    </main>
  );
}
