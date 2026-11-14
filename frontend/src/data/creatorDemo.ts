import type { Creator, CreatorPost } from "../components/creator/types";

export const creatorData: Creator = {
  id: "alex-morgan",
  name: "Alex Morgan",
  username: "alexcreates",
  bio: "Digital artist sharing exclusive tutorials, thoughtful creative process notes, and behind-the-scenes looks at every new piece.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&q=85",
  banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  location: "Kathmandu, Nepal",
  website: "alexcreates.com",
  followers: 2400,
  isFollowing: false,
  membershipPrice: 299,
  membershipTitle: "The Studio Circle",
  membershipBenefits: ["Exclusive art tutorials", "Early access to new work", "Private community chat", "Monthly creative updates"],
  socialLinks: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "YouTube", url: "https://youtube.com" },
  ],
};

export const creatorPosts: CreatorPost[] = [
  { id: "post-1", title: "Building a softer color palette", description: "A step-by-step look at finding harmony in a limited palette.", price: 299, createdAt: "2026-10-27T10:00:00+05:45", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
  { id: "post-2", title: "From sketch to final piece", description: "Follow the whole illustration process, from the first rough marks to the final details.", price: 299, createdAt: "2026-10-25T10:00:00+05:45", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=85" },
  { id: "post-3", title: "Studio notes: October", description: "A few experiments, some happy accidents, and what I learned this month.", price: 299, createdAt: "2026-10-23T10:00:00+05:45", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85" },
  { id: "post-4", title: "Drawing expressive faces", description: "Simple shape and gesture exercises for more expressive character portraits.", price: 299, createdAt: "2026-10-20T10:00:00+05:45", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
  { id: "post-5", title: "My favorite brushes", description: "The digital brushes I reach for most and how I use each one.", price: 299, createdAt: "2026-10-17T10:00:00+05:45", isLocked: false, thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85" },
  { id: "post-6", title: "A little desk tour", description: "A closer look at the cozy corner where new ideas begin.", price: 299, createdAt: "2026-10-14T10:00:00+05:45", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85" },
];
export const allCreators: Creator[] = [
  creatorData,
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    username: "sarahmusic",
    bio: "Musician sharing original songs and music lessons.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300",
    banner: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200",
    location: "Kathmandu, Nepal",
    website: "sarahmusic.com",
    followers: 1800,
    isFollowing: false,
    membershipPrice: 399,
    membershipTitle: "Music Lovers Club",
    membershipBenefits: [
      "Exclusive songs",
      "Music lessons",
      "Behind-the-scenes videos",
    ],
  },
  {
    id: "david-smith",
    name: "David Smith",
    username: "davidsphotos",
    bio: "Photographer sharing photography tips and experiences.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    location: "Kathmandu, Nepal",
    website: "davidsphotos.com",
    followers: 1200,
    isFollowing: false,
    membershipPrice: 249,
    membershipTitle: "Photography Club",
    membershipBenefits: [
      "Photography tutorials",
      "Editing tips",
      "Exclusive photo collections",
    ],
  },
];
export const sarahPosts: CreatorPost[] = [
  {
    id: "sarah-post-1",
    title: "My Latest Original Song",
    description: "A new song created especially for my supporters.",
    price: 399,
    createdAt: "2026-11-08T10:00:00+05:45",
    isLocked: true,
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900",
  },
  {
    id: "sarah-post-2",
    title: "Learning Guitar Basics",
    description: "A beginner-friendly guitar lesson.",
    price: 399,
    createdAt: "2026-11-06T10:00:00+05:45",
    isLocked: true,
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900",
  },
];

export const davidPosts: CreatorPost[] = [
  {
    id: "david-post-1",
    title: "Beautiful Nature Photography",
    description: "Some of my favorite nature photographs.",
    price: 249,
    createdAt: "2026-11-08T10:00:00+05:45",
    isLocked: true,
    thumbnail: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
  },
  {
    id: "david-post-2",
    title: "Photography Tips for Beginners",
    description: "Learn how to take better photographs.",
    price: 249,
    createdAt: "2026-11-06T10:00:00+05:45",
    isLocked: true,
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900",
  },
];