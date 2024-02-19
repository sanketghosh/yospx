import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CreatePost() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-end gap-2">
        <Button className="" size={"sm"}>
          Make Post
        </Button>
        <Button asChild size={"sm"} variant={"ghost"}>
          <Link to="/">Discard</Link>
        </Button>
      </div>
      <div>
        <Textarea
          className="resize-none border-none focus-visible:ring-0"
          rows={40}
          placeholder="Write your post..."
        />
      </div>
    </div>
  );
}
