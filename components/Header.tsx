import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import logo from "@/public/logo.png";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./userLoading";

const Header = async () => {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className=" py-2 px-4 flex justify-between items-center shadow-md border-b-2">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            width="150"
            height="60"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden sm:inline">Create Event</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
};

//10 % every day
export default Header;
