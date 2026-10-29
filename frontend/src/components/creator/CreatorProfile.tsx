import { useState } from "react";
import { Link2, MapPin } from "lucide-react";
import type { Creator, CreatorPost, CreatorTab } from "./types";
import { CreatorHeader } from "./CreatorHeader";
import { CreatorTabs } from "./CreatorTabs";
import { MembershipCard } from "./MembershipCard";
import { PostCard } from "./PostCard";
import { SectionTitle } from "./SectionTitle";

export interface CreatorProfileProps {
  creator: Creator;
  posts: CreatorPost[];
  onFollow?: (creator: Creator, isFollowing: boolean) => void;
  onJoinMembership?: (creator: Creator) => void;
}

export function CreatorProfile({ creator, posts, onFollow, onJoinMembership }: CreatorProfileProps) {
  const [activeTab, setActiveTab] = useState<CreatorTab>("overview");
  const [isFollowing, setIsFollowing] = useState(creator.isFollowing);

  const handleFollow = () => {
    const next = !isFollowing;
    setIsFollowing(next);
    onFollow?.(creator, next);
  };
  const handleJoin = () => onJoinMembership?.(creator);
  const websiteHref = creator.website && (/^https?:\/\//i.test(creator.website) ? creator.website : `https://${creator.website}`);
  const panelClass = "min-h-64 px-5 py-7 sm:px-8 sm:py-8";

  return (
    <main className="min-h-screen bg-stone-50 px-3 py-5 text-stone-900 dark:bg-stone-950 dark:text-stone-100 sm:px-6 sm:py-9">
      <div className="mx-auto max-w-6xl">
        <CreatorHeader creator={creator} isFollowing={isFollowing} onFollow={handleFollow} onJoinMembership={handleJoin} />
        <section className="mt-6 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <CreatorTabs activeTab={activeTab} onChange={setActiveTab} />
          <div id={`creator-panel-${activeTab}`} role="tabpanel" aria-labelledby={`creator-tab-${activeTab}`} className={panelClass}>
            {activeTab === "overview" && <>
              <SectionTitle title="Latest posts" description="A peek at what this creator has been working on." />
              {posts.length > 0 ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{posts.slice(0, 3).map((post) => <PostCard key={post.id} post={post} />)}</div> : <EmptyState message="No posts yet. Check back soon for new work." />}
            </>}
            {activeTab === "posts" && <>
              <SectionTitle title="All posts" description={`${posts.length} ${posts.length === 1 ? "post" : "posts"} from ${creator.name}.`} />
              {posts.length > 0 ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div> : <EmptyState message="This creator has not shared any posts yet." />}
            </>}
            {activeTab === "membership" && <MembershipCard creator={creator} onJoin={handleJoin} />}
            {activeTab === "about" && <>
              <SectionTitle title="About the creator" />
              <div className="max-w-3xl space-y-5">
                <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">{creator.bio}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-600 dark:text-stone-300">
                  {creator.location && <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" />{creator.location}</span>}
                  {websiteHref && <a className="inline-flex items-center gap-2 underline decoration-stone-300 underline-offset-4 hover:text-violet-700 dark:decoration-stone-600" href={websiteHref} target="_blank" rel="noreferrer"><Link2 size={16} aria-hidden="true" />{creator.website}</a>}
                </div>
                {creator.socialLinks && creator.socialLinks.length > 0 && <div><h3 className="text-sm font-semibold text-stone-900 dark:text-white">Find me online</h3><ul className="mt-2 flex flex-wrap gap-4">{creator.socialLinks.map((link) => <li key={link.label}><a className="text-sm font-medium text-violet-800 underline-offset-4 hover:underline dark:text-violet-300" href={link.url} target="_blank" rel="noreferrer">{link.label}</a></li>)}</ul></div>}
                {!creator.location && !websiteHref && !creator.socialLinks?.length && <p className="text-sm text-stone-500 dark:text-stone-400">No additional details have been added yet.</p>}
              </div>
            </>}
          </div>
        </section>
      </div>
    </main>
  );
}

function EmptyState({ message }: { message: string }) {
  return <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-12 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">{message}</div>;
}
