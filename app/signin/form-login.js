"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);
        try {
          const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (response.error) {
            toast.error("Invalid email or password");
          } else {
            router.push("/dashboard");
          }
        } catch (error) {
          console.log(error);
        }
      }}
      className="w-full mt-5"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full border border-1 rounded-lg px-3 py-2 focus-visible:outline-indigo-300 text-sm"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="w-full border border-1 rounded-lg px-3 py-2 mt-5 focus-visible:outline-indigo-300 text-sm"
      />
      <div className="w-full flex justify-between mt-5">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="w-3 h-3 accent-indigo-600 rounded-xl mr-1"
          />
          <label
            htmlFor="remember"
            className="text-zinc-500 text-xs cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-xs text-indigo-500 hover:underline hover:text-indigo-600"
        >
          Forgot Password?
        </a>
      </div>
      <Button className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500">
        Sign In
      </Button>
    </form>
  );
}
