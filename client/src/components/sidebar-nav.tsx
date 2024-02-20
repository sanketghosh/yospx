import {
  BookmarkIcon,
  HomeIcon,
  NotebookTabsIcon,
  ScaleIcon,
  ScrollTextIcon,
  Settings2Icon,
  StarIcon,
  User2Icon,
} from "lucide-react";

import { Link } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function SidebarNav() {
  const sidebarLinks = [
    {
      icon: <HomeIcon size={20} />,
      linkName: "Home",
      href: "/",
    },
    {
      icon: <User2Icon size={20} />,
      linkName: "Profile",
      href: "/profile",
    },
    {
      icon: <BookmarkIcon size={20} />,
      linkName: "Bookmarks",
      href: "/bookmarks",
    },
    {
      icon: <StarIcon size={20} />,
      linkName: "Premium",
      href: "/premium",
    },
    {
      icon: <Settings2Icon size={20} />,
      linkName: "Settings",
      href: "/settings",
    },
    {
      icon: <ScaleIcon size={20} />,
      linkName: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      icon: <ScrollTextIcon size={20} />,
      linkName: "User Agreement",
      href: "/user-agreement",
    },
    {
      icon: <NotebookTabsIcon size={20} />,
      linkName: "Content Policy",
      href: "/content-policy",
    },
  ];
  return (
    <div className="flex h-full flex-col justify-between p-2">
      <div className="mt-2 space-y-2">
        {sidebarLinks.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-secondary"
          >
            <span className="">{item.icon}</span>
            <p>{item.linkName}</p>
          </Link>
        ))}
      </div>
      <div className="w-full space-y-4">
        <ThemeToggle />
        <Button variant={"destructive"} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
