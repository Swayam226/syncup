import Image from "next/image"
import {
  MoreHorizontal,
  ThumbsUp,
  Smile,
  MessageCircle,
  Send,
  Bookmark,
  Paperclip,
  ImageIcon,
} from "lucide-react"

interface FeedPostProps {
  author: string
  avatar: string
  date: string
  content: string
  image?: string
  boldText?: string
  likes: number
  comments: number
  shares: number
  saved: number
  reactions: number
}

export function FeedPost({
  author,
  avatar,
  date,
  content,
  image,
  boldText,
  likes,
  comments,
  shares,
  saved,
  reactions,
}: FeedPostProps) {
  return (
    <div className="rounded-xl border border-[#6c63ff]/20 bg-card p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={author}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <button aria-label="More options">
          <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-foreground">
        {boldText ? (
          <>
            {content.split(boldText)[0]}
            <span className="font-semibold">{boldText}</span>
            {content.split(boldText)[1]}
          </>
        ) : (
          content
        )}
      </p>

      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt="Post image"
            width={600}
            height={340}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-xs">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground">
            <Smile className="h-4 w-4" />
            <span className="text-xs">{reactions}</span>
          </button>
          <button className="text-muted-foreground">
            <Smile className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" />
            {comments} Comments
          </span>
          <span className="flex items-center gap-1">
            <Send className="h-3.5 w-3.5" />
            {shares} Shares
          </span>
          <span className="flex items-center gap-1">
            <Bookmark className="h-3.5 w-3.5" />
            {saved} Saved
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src="/images/avatar-user.jpg"
          alt="Your avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Write your comment..."
            className="h-9 w-full rounded-lg border border-border bg-background pl-4 pr-20 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2 text-muted-foreground">
            <Paperclip className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Smile className="h-4 w-4 cursor-pointer hover:text-primary" />
            <ImageIcon className="h-4 w-4 cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
