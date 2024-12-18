import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/app/sections/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Alpha",
  description: "AI Project Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "text-white",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${bricolageGrotesque.className} antialiased bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

/*
      <html lang="en">
        <body
          className={`${bricolageGrotesque.className} antialiased dotted-background`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with ♥ by Joel Angels</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
*/

/*
     <html lang="en">
        <body
          className={`${bricolageGrotesque.className} antialiased dotted-background`}
        >
          {children}
          <Toaster richColors />
          {/* <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with ♥ by Joel Angels</p>
            </div>
          </footer> 
          </body>
          </html>
*/
