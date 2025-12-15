import React from 'react';
import { Icon } from './Icon';

interface BottomTabsProps {
  activeTab: 'Home' | 'Files' | 'Calls' | 'Profile';
  onTabChange: (tab: string) => void;
}

export const BottomTabs: React.FC<BottomTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'Home', icon: 'home', label: 'Home' },
    { id: 'Files', icon: 'folder_open', label: 'Files' }, // Mapped from "DMs" visual slot for functionality
    { id: 'Calls', icon: 'call', label: 'Calls' }, // Mapped from "Mentions" visual slot
    { id: 'Profile', icon: 'person', label: 'You' },
  ];

  return (
    <footer className="shrink-0 border-t border-slate-200 bg-background-light/80 dark:border-slate-800 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex h-20 items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 ${
                isActive ? 'text-primary' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Icon name={tab.icon} filled={isActive} />
              <span className={`text-xs ${isActive ? 'font-semibold' : ''}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </footer>
  );
};