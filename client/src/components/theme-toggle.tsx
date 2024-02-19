import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/theme/theme-provider";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  //   const [btnBg, setBtnBg] = useState(theme);

  return (
    <div className="bg-background flex items-center justify-between overflow-hidden rounded-lg border-2">
      <Button
        className={cn("border-r")}
        onClick={() => setTheme("dark")}
        variant={theme === "dark" ? "default" : "ghost"}
      >
        dark
      </Button>
      <Button
        className={cn("border-r")}
        onClick={() => setTheme("light")}
        variant={theme === "light" ? "default" : "ghost"}
      >
        light
      </Button>
      <Button
        className={cn("border-r")}
        onClick={() => setTheme("system")}
        variant={theme === "system" ? "default" : "ghost"}
      >
        system
      </Button>
    </div>
  );
}

/* 


*/
