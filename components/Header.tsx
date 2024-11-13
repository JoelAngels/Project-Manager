import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import UserMenu from "./user-menu";

export default function Home() {
  return (
    <nav className="container mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
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
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}

//10 % every day
