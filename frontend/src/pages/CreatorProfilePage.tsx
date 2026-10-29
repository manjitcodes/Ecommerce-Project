import { CreatorProfile } from "../components/creator/CreatorProfile";
import { creatorData, creatorPosts } from "../data/creatorDemo";

export default function CreatorProfilePage() {
  return (
    <CreatorProfile
      creator={creatorData}
      posts={creatorPosts}
      onFollow={(creator, isFollowing) => console.info(`${isFollowing ? "Following" : "Unfollowed"} ${creator.username}`)}
      onJoinMembership={(creator) => console.info(`Join membership: ${creator.username}`)}
    />
  );
}
