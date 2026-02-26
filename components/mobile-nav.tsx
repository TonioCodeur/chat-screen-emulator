"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, MessageSquare, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const publicLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
];

const authLinks = [
  { href: "/dashboard", label: "Dashboard" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;

  async function handleSignOut() {
    setOpen(false);
    await signOut();
    toast.success("Signed out", {
      description: "You have been signed out successfully.",
    });
    router.push("/");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-bold">ChatFrame</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 px-4 pt-4">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Separator />

          {isAuthenticated ? (
            <>
              {authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-sm font-medium text-destructive transition-colors hover:text-destructive/80"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
