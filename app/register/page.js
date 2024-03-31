import RegisterForm from "./register-form";
import { Toaster } from "sonner";
import { UserRoundPlus } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-zinc-100 items-center justify-center px-5 md:px-0">
      <Toaster closeButton position="top-center" richColors />
      <div className="flex flex-col justify-center items-center p-5 bg-white rounded-t-lg drop-shadow-md  md:w-[400px]">
        <div className="size-16  flex items-center justify-center border border-indigo-200 rounded-full bg-gradient-to-br from-indigo-100 to-zinc-0">
          <UserRoundPlus className="text-indigo-400" />
        </div>
        <p className="font-semibold text-xl mt-5">Create a new account</p>
        <p className="text-zinc-500 mt-2 text-sm w-4/3 text-center">
          Enter your details to create a new account
        </p>
        <RegisterForm />
      </div>
      <div className="flex flex-col justify-center items-center py-3 bg-indigo-50 rounded-b-lg drop-shadow-md md:w-[400px] z-10">
        <p className="text-indigo-600 text-xs">
          Secured by{" "}
          <a
            className="font-semibold hover:underline"
            href="https://easypanel.io"
            target={"_blank"}
          >
            easypanel.io
          </a>
        </p>
      </div>
    </main>
  );
}
