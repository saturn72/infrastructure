
import { auth } from "@/auth";
import SignoutButton from "./_components/SignoutButton";
import SigninButton from "./_components/SigninButton";

export default async function Home() {
  const session = await auth();
  const isAuth = session?.user;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-4">
        {isAuth ? <SignoutButton /> : <SigninButton />}      </div>
    </div>
  );
}
