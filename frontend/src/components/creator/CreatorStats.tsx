import { Users } from "lucide-react";

interface CreatorStatsProps {
  followers: number;
}

export function CreatorStats({ followers }: CreatorStatsProps) {
  return (
    <div className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400" aria-label={`${followers.toLocaleString()} followers`}>
      <Users size={16} aria-hidden="true" />
      <span className="font-semibold text-stone-800 dark:text-stone-200">{followers.toLocaleString()}</span>
      <span>followers</span>
    </div>
  );
}
