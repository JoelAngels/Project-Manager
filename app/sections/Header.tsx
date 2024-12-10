import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { PenBox } from "lucide-react";
import logo from "@/public/logo.png";
import UserMenu from "../../components/user-menu";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "../../components/userLoading";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

const Header = async () => {
  await checkUser();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Stream your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started For Free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </Link>

            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>

              <Link href="/project/create">
                <Button className="destructive">
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
            </nav>
          </div>
        </div>
      </div>
      <UserLoading />
    </header>
    // <header className="container mx-auto">
    //   <nav className=" py-2 px-4 flex justify-between items-center shadow-md border-b-2">
    //     <Link href="/" className="flex items-center">
    //       <Image
    //         src={logo}
    //         width="150"
    //         height="60"
    //         alt="Logo"
    //         className="h-16 w-auto object-contain"
    //       />
    //     </Link>

    //     <div className="flex items-center gap-4">
    //       <Link href="/project/create">
    //         <Button variant="destructive" className="flex items-center gap-2">
    //           <PenBox size={18} />
    //           <span className="hidden sm:inline">Create Event</span>
    //         </Button>
    //       </Link>

    //       <SignedOut>
    //         <SignInButton forceRedirectUrl="/onboarding">
    //           <Button variant="outline">Login</Button>
    //         </SignInButton>
    //       </SignedOut>

    //       <SignedIn>
    //         <UserMenu />
    //       </SignedIn>
    //     </div>
    //   </nav>
    //   <UserLoading />
    // </header>
  );
};

//10 % every day
export default Header;
