import { useState } from "react";
import { LockKeyhole, Image as ImageIcon } from "lucide-react";
import type { CreatorPost } from "./types";

function formatTimeAgo(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const days = Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"} ago`;
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

export function PostCard({ post }: { post: CreatorPost }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
        {post.thumbnail && !imageFailed
          ? <img src={post.thumbnail} alt={post.thumbnailAlt ?? post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" onError={() => setImageFailed(true)} />
          : <div className="grid h-full w-full place-items-center bg-[radial-gradient(ellipse_at_20%_20%,rgba(139,92,246,.13),transparent_40%),linear-gradient(135deg,#f7f3ed,#ece9f0)] text-stone-400 dark:bg-stone-800"><ImageIcon size={30} strokeWidth={1.4} aria-label="Post image placeholder" /></div>}
        {post.isLocked && <div className="absolute inset-0 grid place-items-center bg-stone-950/10"><span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-stone-900 shadow-md dark:bg-stone-900 dark:text-white"><LockKeyhole size={22} aria-label="Members only" /></span></div>}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold text-stone-950 dark:text-white">{post.title}</h3>
        <p className="mt-1.5 line-clamp-2 min-h-10 text-sm leading-5 text-stone-500 dark:text-stone-400">{post.description}</p>
        <div className="mt-4 flex items-center justify-between gap-2 text-xs">
          <p className="font-semibold text-violet-800 dark:text-violet-300">NPR {post.price.toLocaleString()} <span className="font-normal text-stone-500 dark:text-stone-400">/ month</span></p>
          <time dateTime={post.createdAt} className="shrink-0 text-stone-400 dark:text-stone-500">{formatTimeAgo(post.createdAt)}</time>
        </div>
      </div>
    </article>
  );
}
