
import { useState } from "react";
import CreatorCard from "../components/explore/CreatorCard";

function ExplorePage() {
  // Store search text
  const [search, setSearch] = useState("");

  // Store selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Demo creator information
  const creators = [
    {
      id: 1,
      name: "Alex Morgan",
      username: "alexcreates",
      bio: "Digital artist sharing tutorials and creative ideas.",
      category: "Art",
      membershipPrice: 299,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      username: "sarahmusic",
      bio: "Musician sharing original songs and music lessons.",
      category: "Music",
      membershipPrice: 399,
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300",
    },
    {
      id: 3,
      name: "David Smith",
      username: "davidsphotos",
      bio: "Photographer sharing photography tips and experiences.",
      category: "Photography",
      membershipPrice: 249,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    },
  ];

  // Filter creators using search and category
 const filteredCreators = creators.filter((creator) => {
  const searchText = search.toLowerCase();

  return (
    creator.name.toLowerCase().includes(searchText) ||
    creator.username.toLowerCase().includes(searchText) ||
    creator.category.toLowerCase().includes(searchText) ||
    creator.bio.toLowerCase().includes(searchText)
  );
});

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page heading */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Discover Amazing Creators
        </h1>

        <p className="text-gray-600 mt-3">
          Find creators, explore their work and support their journey.
        </p>
      </section>

      {/* Search box */}
      <div className="max-w-xl mx-auto px-6 mb-8">
        <input
          type="text"
          placeholder="Search creators by name or username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {["All", "Art", "Music", "Photography"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-purple-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Creator cards */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCreators.map((creator) => (
            <CreatorCard
              key={creator.id}
              name={creator.name}
              username={creator.username}
              bio={creator.bio}
              category={creator.category}
              membershipPrice={creator.membershipPrice}
              avatar={creator.avatar}
            />
          ))}

          {/* No results message */}
          {filteredCreators.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No creators found. Try another search or category.
            </p>
          )}

        </div>
      </div>

    </div>
  );
}

export default ExplorePage;
