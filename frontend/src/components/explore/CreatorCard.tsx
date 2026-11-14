import { useNavigate } from "react-router-dom";
interface CreatorCardProps {
  name: string;
  username: string;
  bio: string;
  category: string;
  membershipPrice: number;
  avatar: string;
}

function CreatorCard({ 
  name, 
  username, 
  bio, 
  category, 
  membershipPrice, 
  avatar 
}: CreatorCardProps) {

    const navigate = useNavigate();


  return (
    <div className="bg-white rounded-xl shadow-md p-5">

      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <h2 className="text-xl font-bold mt-3">{name}</h2>

      <p className="text-gray-500">@{username}</p>

      <p className="text-gray-600 mt-2">{bio}</p>

      <p className="text-purple-600 mt-3 font-medium">
        {category}
      </p>

      <p className="font-semibold mt-2">
        NPR {membershipPrice}/month
      </p>

    <button
        onClick={() => navigate(`/creator/${username}`)}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4"
        >
        View Profile
     </button>

    </div>
  );
}

export default CreatorCard;