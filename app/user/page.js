import { Skeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-5">
      <div className="mb-5 flex gap-5">
        <Avatar>
          <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-52 h-5 rounded-full" />
          <Skeleton className="w-52 h-5 rounded-full" />
        </div>
      </div>
      <p className="mb-5 text-xs">
        Currently logged in user:{" "}
        <span className="font-medium">{session?.user?.name}</span>{" "}
        <span className="text-zinc-400">({session?.user?.id})</span>
      </p>
      <p className="text-xs mb-5 text-zinc-500">
        Deployment on{" "}
        <a
          href="https://easypanel.io"
          target="_blank"
          className="hover:underline text-zinc-900"
        >
          easypanel.io
        </a>{" "}
        using <span className="font-semibold text-zinc-900">Heroku Build</span>
      </p>
    </div>
  );
}
