import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search your queries..." />
        <Button>Search</Button>
      </div>
    </div>
  );
}
