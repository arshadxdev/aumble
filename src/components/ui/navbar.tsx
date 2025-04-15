"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "../ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Aumble</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>Solutions</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link href={"/#solutions"}>Portfolio</Link>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href={"/our-capabilities"}>Our Capabilities</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>About</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Our Team</DropdownMenuLabel>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="max-md:hidden">
            <ThemeToggle />
          </div>
          <nav className="flex items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="px-2">
                  <div className="flex flex-col space-y-4 py-4">
                    <Link
                      href="/"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-2 pt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
