"use client";
import { register } from "@/lib/actions";
import { Eye, EyeOff } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import SubmitButton from "./submit-button";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef();

  return (
    <form
      action={async (formData) => {
        const data = await register(formData);
        if (data?.registered) {
          toast.success("User created successfully");
          ref.current?.reset();
        } else {
          toast("User with this email already exists");
        }
      }}
      ref={ref}
      className="w-full mt-10 relative"
    >
      <div className="w-full flex flex-col space-y-1">
        <label htmlFor="fullname" className="text-zinc-700 text-xs font-bold">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          required
          className="w-full border border-1 rounded-lg px-3 py-2 focus-visible:outline-indigo-300 text-sm"
          autoComplete="off"
          autoCapitalize="on"
        />
      </div>
      <div className="w-full flex flex-col space-y-1 mt-5">
        <label htmlFor="email" className="text-zinc-700 text-xs font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="w-full border border-1 rounded-lg px-3 py-2 focus-visible:outline-indigo-300 text-sm"
          autoComplete="off"
        />
      </div>
      <div className="w-full flex flex-col space-y-1 mt-5 relative">
        <label htmlFor="password" className="text-zinc-700 text-xs font-bold">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="Password"
            className="w-full border border-1 rounded-lg px-3 py-2 focus-visible:outline-indigo-300 text-sm"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            {showPassword ? (
              <EyeOff
                className="hover:cursor-pointer text-zinc-500 size-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="hover:cursor-pointer text-zinc-500 size-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
