import { Check, Sparkles } from "lucide-react";
import type { Creator } from "./types";
import { CreatorButton } from "./CreatorButton";

interface MembershipCardProps {
  creator: Creator;
  onJoin: () => void;
}

export function MembershipCard({ creator, onJoin }: MembershipCardProps) {
  const benefits = creator.membershipBenefits ?? ["Exclusive posts", "Early access", "Community chat", "Monthly updates"];
  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm dark:border-violet-900 dark:bg-stone-900">
      <div className="bg-gradient-to-br from-violet-700 to-indigo-800 px-6 py-8 text-white sm:px-9">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold"><Sparkles size={14} aria-hidden="true" />CREATOR MEMBERSHIP</span>
        <h2 className="mt-5 text-2xl font-bold">{creator.membershipTitle ?? `Join ${creator.name}`}</h2>
        <p className="mt-2 max-w-lg text-sm leading-6 text-violet-100">Get closer to the work and support {creator.name} with a monthly membership.</p>
        <p className="mt-6"><span className="text-4xl font-bold">NPR {creator.membershipPrice.toLocaleString()}</span><span className="ml-2 text-sm text-violet-100">/ month</span></p>
      </div>
      <div className="p-6 sm:p-9">
        <h3 className="font-semibold text-stone-900 dark:text-white">Membership includes</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">{benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2.5 text-sm text-stone-600 dark:text-stone-300"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Check size={14} aria-hidden="true" /></span>{benefit}</li>)}</ul>
        <CreatorButton onClick={onJoin} className="mt-7 w-full sm:w-auto"><Sparkles size={16} aria-hidden="true" />Join for NPR {creator.membershipPrice.toLocaleString()} / month</CreatorButton>
      </div>
    </section>
  );
}
