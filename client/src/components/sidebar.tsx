import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import SidebarNav from "./sidebar-nav";

export default function Sidebar() {
  return (
    <aside
      style={{
        minHeight: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
      }}
      className="sticky top-16 hidden w-80 border-l border-r lg:block"
    >
      <SidebarNav />
    </aside>
  );
}
