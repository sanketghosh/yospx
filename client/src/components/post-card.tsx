import { formatNumber } from "@/utils/convert-number";
import {
  BookmarkIcon,
  BookmarkPlusIcon,
  ForwardIcon,
  HeartIcon,
  MessageSquare,
  SendIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PostCardPropsType {
  username: string;
  post: string;
  noOfLikes: number;
  noOfComments: number;
  postId: string | number;
}

export default function PostCard({
  username,
  post,
  noOfComments = 0,
  noOfLikes = 0,
  postId,
}: PostCardPropsType) {
  const [likePost, setLikePost] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  function handleLikePost() {
    setLikePost(!likePost);
  }

  function handleSetBookmark() {
    setBookmark(!bookmark);
  }

  return (
    <div className="space-y-3 rounded-md border px-4 py-3">
      <Link
        to={`/user/${username}`}
        className="text-lg font-medium text-muted-foreground underline underline-offset-2"
      >
        @{username}
      </Link>
      <Link to={`/post/${postId}`} className="line-clamp-3 leading-5">
        {post}
      </Link>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <button onClick={handleLikePost}>
            <HeartIcon size={18} fill={likePost ? "red" : "none"} />
          </button>
          <p className="text-sm">{formatNumber(noOfLikes)}</p>
        </span>
        <Link className="flex items-center gap-1" to={`/post/${postId}`}>
          <MessageSquare size={18} fill="none" />
          <p className="text-sm">{formatNumber(noOfComments)}</p>
        </Link>
        <span className="flex items-center gap-1">
          <button onClick={handleSetBookmark}>
            <BookmarkIcon size={18} fill={bookmark ? "#03d975" : "none"} />
          </button>
        </span>
        <span className="flex items-center gap-1">
          <button>
            <SendIcon size={18} fill="none" />
          </button>
        </span>
      </div>
    </div>
  );
}
