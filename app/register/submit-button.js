"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500 disabled:cursor-not-allowed"
        type="submit"
        disabled={pending}
      >
        {pending ? (
          <p className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registering account
          </p>
        ) : (
          "Register"
        )}
      </Button>
    </div>
  );
}
