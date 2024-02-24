import { Link } from "react-router-dom";
import {
  BookmarkPlus,
  ForwardIcon,
  HeartIcon,
  MessageSquare,
  PlusCircle,
} from "lucide-react";
import PostCard from "@/components/post-card";
import { fakePosts } from "@/data/fake-post-data";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/actions/get-posts";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  console.log(data);

  return (
    <div>
      <Link
        to={"/create-post"}
        className="flex cursor-pointer items-center justify-between rounded-full border bg-secondary px-4 py-3 shadow-sm"
      >
        <p className="text-muted-foreground">
          Feel free to write your thoughts...
        </p>
        <PlusCircle className="text-muted-foreground" />
      </Link>

      <div className="mt-5 space-y-5">
        {data?.posts.map((post: any) => (
          <PostCard
            key={post.postId}
            post={post.body}
            noOfComments={post.comments}
            noOfLikes={post.postLikes}
            username={post.user.username}
            postId={post.postId}
          />
        ))}
      </div>
    </div>
  );
}
