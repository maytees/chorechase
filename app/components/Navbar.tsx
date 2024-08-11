import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitch, ThemeToggle } from "@/components/ui/ThemeSwitch";
import {
  DoorOpenIcon,
  FormInputIcon,
  LandPlot,
  Menu,
  MenuIcon,
  Package2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[8vh] flex-row items-center justify-between border-b px-5 sm:px-20 lg:px-40 2xl:px-52">
      <Link href="/">
        <div className="flex flex-row items-end gap-2">
          <LandPlot className="h-10 w-10 font-semibold text-primary" />
          <h1 className="text-3xl">
            Chore<span className="text-primary">Chase</span>
          </h1>
        </div>
      </Link>
      <div className="hidden flex-row gap-8 sm:flex">
        <ThemeSwitch />
        <div className="flex flex-row gap-4">
          <Button className="w-full" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/register">Sign up</Link>
          </Button>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <div className="flex flex-row items-center gap-2">
                <LandPlot className="h-9 w-9 font-semibold text-primary" />
                <h1 className="text-2xl">
                  Chore<span className="text-primary">Chase</span>
                </h1>
              </div>
              <span className="sr-only">Chore Chase</span>
            </Link>
            <div className="grid gap-2 text-lg font-medium">
              <ThemeToggle />
              <Button
                className="flex flex-row items-center justify-between"
                variant={"outline"}
                asChild
              >
                <Link href="/login">
                  Log in
                  <DoorOpenIcon />
                </Link>
              </Button>
              <Button
                className="flex flex-row items-center justify-between"
                asChild
              >
                <Link href={"/register"}>
                  Register
                  <FormInputIcon />
                </Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
