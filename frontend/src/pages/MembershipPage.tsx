
import { useNavigate, useParams } from "react-router-dom";
import { allCreators } from "../data/creatorDemo";
import { CreatorButton } from "../components/creator/CreatorButton";

export default function MembershipPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const creator = allCreators.find(
    (item) => item.username === username
  );

  if (!creator) {
    return <h1>Creator not found!</h1>;
  }

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 px-4 py-12">
      <div className="mx-auto max-w-lg rounded-2xl bg-white dark:bg-stone-900 p-8 shadow-md">

        <h1 className="text-2xl font-bold text-stone-900 dark:text-white">
          Join Membership
        </h1>

        <p className="mt-3 text-stone-600 dark:text-stone-300">
          You are about to become a member of {creator.name}.
        </p>

        <div className="mt-6 rounded-xl bg-violet-50 dark:bg-violet-950 p-5">
          <h2 className="text-xl font-semibold">
            {creator.membershipTitle}
          </h2>

          <p className="mt-3 text-3xl font-bold text-violet-800 dark:text-violet-300">
            NPR {creator.membershipPrice.toLocaleString()}
          </p>

          <p className="text-sm text-stone-500 dark:text-stone-400">
            Per month
          </p>
        </div>

        <h3 className="mt-6 font-semibold">
          Membership Benefits
        </h3>

        <ul className="mt-3 space-y-2">
          {creator.membershipBenefits?.map((benefit) => (
            <li key={benefit} className="text-sm text-stone-600 dark:text-stone-300">
              ✓ {benefit}
            </li>
          ))}
        </ul>

        <CreatorButton
          className="mt-8 w-full"
          onClick={() => alert("Membership confirmed!")}
        >
          Confirm Membership
        </CreatorButton>

        <button
          onClick={() => navigate(`/creator/${creator.username}`)}
          className="mt-4 w-full text-sm text-stone-500 hover:text-violet-700"
        >
          Go Back
        </button>

      </div>
    </main>
  );
}
