import type { KeyboardEvent } from "react";
import type { CreatorTab } from "./types";

const tabs: { id: CreatorTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "posts", label: "Posts" },
  { id: "membership", label: "Membership" },
  { id: "about", label: "About" },
];

interface CreatorTabsProps {
  activeTab: CreatorTab;
  onChange: (tab: CreatorTab) => void;
}

export function CreatorTabs({ activeTab, onChange }: CreatorTabsProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = tabs.findIndex((tab) => tab.id === activeTab);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    onChange(tabs[next].id);
    document.getElementById(`creator-tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div role="tablist" aria-label="Creator profile sections" className="flex overflow-x-auto border-b border-stone-200 dark:border-stone-800">
      {tabs.map((tab) => (
        <button key={tab.id} id={`creator-tab-${tab.id}`} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`creator-panel-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => onChange(tab.id)} onKeyDown={handleKeyDown} className={`relative shrink-0 px-5 py-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 ${activeTab === tab.id ? "text-violet-800 dark:text-violet-300" : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"}`}>
          {tab.label}
          <span className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-violet-700 transition-transform duration-200 ${activeTab === tab.id ? "scale-x-100" : "scale-x-0"}`} />
        </button>
      ))}
    </div>
  );
}
