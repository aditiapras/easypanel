import { Button } from "@/components/ui/button";
import React from "react";
import LoginForm from "./form-login";
import { Fingerprint, UserRoundPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-zinc-100 items-center justify-center px-5 md:px-0">
      <Toaster position="top-center" richColors closeButton />
      <div className="flex flex-col justify-center items-center p-5 bg-white rounded-t-lg drop-shadow-md  md:w-[400px]">
        <div className="size-16  flex items-center justify-center border border-indigo-200 rounded-full bg-gradient-to-br from-indigo-100 to-zinc-0">
          <Fingerprint className="text-indigo-400" />
        </div>
        <p className="font-semibold text-xl mt-5">Welcome Back!</p>
        <p className="text-zinc-500 mt-2 text-sm w-4/3 text-center">
          Sign in to access your dashboard, customers & settings.
        </p>
        <LoginForm />
        <Button className="w-full mt-5">Sign In with Apple ID</Button>
        <Button className="w-full mt-2" variant="secondary">
          Sign In with Google <FcGoogle className="ml-2" />
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center py-3 bg-indigo-50 rounded-b-lg drop-shadow-md md:w-[400px] z-10">
        <p className="text-indigo-600 text-xs">
          Secured by{" "}
          <a
            href="https://easypanel.io"
            target="_blank"
            className="font-semibold hover:underline"
          >
            easypanel.io
          </a>
        </p>
      </div>
    </main>
  );
}
