export interface Creator {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar?: string;
  banner?: string;
  location?: string;
  website?: string;
  followers: number;
  isFollowing: boolean;
  membershipPrice: number;
  membershipTitle?: string;
  membershipBenefits?: string[];
  socialLinks?: { label: string; url: string }[];
}

export interface CreatorPost {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  isLocked: boolean;
  thumbnail?: string;
  thumbnailAlt?: string;
}

export type CreatorTab = "overview" | "posts" | "membership" | "about";
