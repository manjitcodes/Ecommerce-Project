


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreatorProfile } from "../components/creator/CreatorProfile";
import {
  allCreators,
  creatorPosts,
  sarahPosts,
  davidPosts,
} from "../data/creatorDemo";

export default function CreatorProfilePage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const selectedCreator = allCreators.find(
    (creator) => creator.username === username
  );

  const selectedPosts =
    username === "sarahmusic"
      ? sarahPosts
      : username === "davidsphotos"
      ? davidPosts
      : creatorPosts;

  const [followedCreators, setFollowedCreators] = useState<string[]>([]);

  if (!selectedCreator) {
    return <h1>Creator not found!</h1>;
  }

  const isFollowing = followedCreators.includes(selectedCreator.id);

  const handleFollow = () => {
    setFollowedCreators((previous) =>
      isFollowing
        ? previous.filter((id) => id !== selectedCreator.id)
        : [...previous, selectedCreator.id]
    );
  };

 return (
  <CreatorProfile
    creator={{
      ...selectedCreator,
      isFollowing,
      followers:
        selectedCreator.followers + (isFollowing ? 1 : 0),
    }}
    posts={selectedPosts}
    onFollow={handleFollow}
    onJoinMembership={(creator) =>
      navigate(`/membership/${creator.username}`)
    }
  />
);
}