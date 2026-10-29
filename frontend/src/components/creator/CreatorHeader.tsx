import { useState } from "react";
import { Globe2, MapPin, Sparkles, UserRound } from "lucide-react";
import type { Creator } from "./types";
import { CreatorButton } from "./CreatorButton";
import { CreatorStats } from "./CreatorStats";

interface CreatorHeaderProps {
  creator: Creator;
  isFollowing: boolean;
  onFollow: () => void;
  onJoinMembership: () => void;
}

function ProfileImage({ src, alt, className, fallback }: { src?: string; alt: string; className: string; fallback: "avatar" | "banner" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return fallback === "avatar"
      ? <div className={`${className} grid place-items-center bg-stone-100 text-stone-400 dark:bg-stone-800`} aria-label={alt}><UserRound size={48} strokeWidth={1.4} aria-hidden="true" /></div>
      : <div className={`${className} bg-[radial-gradient(ellipse_at_15%_30%,rgba(139,92,246,.16),transparent_35%),radial-gradient(ellipse_at_80%_15%,rgba(251,146,60,.18),transparent_35%),linear-gradient(120deg,#f5f0e9,#ece8f4_55%,#e9edf1)]`} aria-label="Creator banner placeholder" />;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export function CreatorHeader({ creator, isFollowing, onFollow, onJoinMembership }: CreatorHeaderProps) {
  const websiteHref = creator.website && (/^https?:\/\//i.test(creator.website) ? creator.website : `https://${creator.website}`);

  return (
    <header className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="relative h-36 sm:h-48 lg:h-60">
        <ProfileImage src={creator.banner} alt={`${creator.name} cover`} className="h-full w-full object-cover" fallback="banner" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      <div className="px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex min-w-0 flex-col items-start sm:flex-row sm:items-end sm:gap-5">
            <ProfileImage src={creator.avatar} alt={`${creator.name} avatar`} className="-mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md sm:-mt-16 sm:h-32 sm:w-32 dark:border-stone-900" fallback="avatar" />
            <div className="mt-3 min-w-0 sm:mb-1 sm:mt-0">
              <h1 className="truncate text-2xl font-bold tracking-tight text-stone-950 dark:text-white sm:text-3xl">{creator.name}</h1>
              <p className="mt-0.5 text-sm font-medium text-stone-500 dark:text-stone-400">@{creator.username}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">{creator.bio}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
                {creator.location && <span className="inline-flex items-center gap-1.5"><MapPin size={15} aria-hidden="true" />{creator.location}</span>}
                {websiteHref && <a className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-violet-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" href={websiteHref} target="_blank" rel="noreferrer"><Globe2 size={15} aria-hidden="true" />{creator.website?.replace(/^https?:\/\//i, "").replace(/\/$/, "")}</a>}
                <CreatorStats followers={creator.followers} />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:pb-1">
            <CreatorButton variant="secondary" onClick={onFollow} aria-pressed={isFollowing} aria-label={`${isFollowing ? "Unfollow" : "Follow"} ${creator.name}`} className="w-full sm:w-auto">
              {isFollowing ? "Following" : "Follow"}
            </CreatorButton>
            <CreatorButton onClick={onJoinMembership} className="w-full sm:w-auto"><Sparkles size={16} aria-hidden="true" />Join membership</CreatorButton>
          </div>
        </div>
      </div>
    </header>
  );
}
