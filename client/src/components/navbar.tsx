import { Search, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-10 h-16 w-full border-b">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 py-4">
        <Link to={"/"} className="text-xl font-medium lg:text-2xl">
          yospx
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to={"/search"}
            className="bg-secondary flex items-center gap-2 rounded-full px-3 py-2"
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
