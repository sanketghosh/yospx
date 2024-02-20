import { MenuIcon, Search, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarNav from "./sidebar-nav";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 h-16 w-full border-b bg-background">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger className="block lg:hidden">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SidebarNav />
            </SheetContent>
          </Sheet>
          <Link to={"/"} className="text-xl font-medium lg:text-2xl">
            yospx
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={"/search"}
            className="flex items-center gap-2 rounded-full bg-secondary px-3 py-2"
          >
            <p className="text-sm">Search</p>
            <Search size={20} />
          </Link>

          <button>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </nav>
  );
}
