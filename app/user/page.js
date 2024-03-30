import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="mb-5 flex gap-5">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-52 h-5 rounded-full" />
          <Skeleton className="w-52 h-5 rounded-full" />
          <Skeleton className="w-52 h-5 rounded-full" />
        </div>
      </div>
      <Button>Submit</Button>
      <p className="text-2xl mt-5">Deployment on Easypanel using Heroku</p>
    </div>
  );
}
