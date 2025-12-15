import React from 'react';
import { Icon } from '../components/Icon';
import { UserData } from '../types';

interface WorkspaceScreenProps {
  onNavigateToChannel: (channel: { id: string; name: string }) => void;
  onNavigateToDM: (user: UserData) => void;
}

export const WorkspaceScreen: React.FC<WorkspaceScreenProps> = ({ 
  onNavigateToChannel, 
  onNavigateToDM,
}) => {
  
  const handleAddDM = () => {
    alert("This feature would open a user search dialog to start a new chat.");
  };

  return (
    <div className="flex h-full flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex flex-col bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-transparent dark:border-white/5 transition-colors">
        <div className="flex h-14 items-center justify-between px-4 pt-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Workspace</h1>
            <Icon name="expand_more" className="text-slate-500 dark:text-slate-400" />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <Icon name="search" className="text-2xl" />
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
              <img 
                alt="User avatar" 
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-700" 
                src="https://picsum.photos/id/64/100/100" 
              />
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Channels</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-28">
        {/* Channels Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-1">
              <Icon name="expand_more" className="text-base text-slate-500 dark:text-slate-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Channels</h3>
            </div>
            <button 
              onClick={() => alert("Create new channel feature")}
              className="flex h-6 w-6 items-center justify-center rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <Icon name="add" className="text-lg" />
            </button>
          </div>

          {/* Channel List */}
          <div 
            onClick={() => onNavigateToChannel({ id: 'announcements', name: '# announcements' })} 
            className="flex cursor-pointer items-center gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 p-2 min-h-14 justify-between transition-colors border border-transparent hover:border-primary/20"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-slate-800 dark:text-slate-200">
                <Icon name="campaign" />
              </div>
              <p className="flex-1 truncate text-base font-semibold text-slate-900 dark:text-white"># announcements</p>
            </div>
            <div className="shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm">
                <span>2</span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onNavigateToChannel({ id: 'design-team', name: '# design-team' })} 
            className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <Icon name="palette" />
              </div>
              <p className="flex-1 truncate text-base font-medium text-slate-600 dark:text-slate-300"># design-team</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigateToChannel({ id: 'general', name: '# general' })} 
            className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <Icon name="tag" />
              </div>
              <p className="flex-1 truncate text-base font-medium text-slate-900 dark:text-white"># general</p>
            </div>
            <div className="shrink-0">
              <div className="flex h-7 w-7 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"></div>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onNavigateToChannel({ id: 'project-pegasus', name: '# project-pegasus' })} 
            className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <Icon name="lock" className="text-xl" />
              </div>
              <p className="flex-1 truncate text-base font-medium text-slate-600 dark:text-slate-300"># project-pegasus</p>
            </div>
          </div>
        </div>

        {/* Direct Messages Section */}
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-1">
              <Icon name="expand_more" className="text-base text-slate-500 dark:text-slate-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Messages</h3>
            </div>
            <button 
              onClick={handleAddDM}
              className="flex h-6 w-6 items-center justify-center rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <Icon name="add" className="text-lg" />
            </button>
          </div>

          <div 
            onClick={() => onNavigateToDM({ id: 'alicia', name: 'Alicia Puma', avatar: 'https://picsum.photos/id/1027/100/100', status: 'online' })} 
            className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <img alt="Alicia Puma" className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-700" src="https://picsum.photos/id/1027/100/100" />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-light dark:border-background-dark bg-green-500"></div>
              </div>
              <p className="flex-1 truncate text-base font-semibold text-slate-900 dark:text-white">Alicia Puma</p>
            </div>
            <div className="shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm">
                <span>1</span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onNavigateToDM({ id: 'david', name: 'David Miller', avatar: 'https://picsum.photos/id/338/100/100', status: 'offline' })}
            className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <img alt="David Miller" className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-700" src="https://picsum.photos/id/338/100/100" />
              </div>
              <p className="flex-1 truncate text-base font-medium text-slate-600 dark:text-slate-300">David Miller</p>
            </div>
          </div>

          <div 
             onClick={() => onNavigateToDM({ id: 'jane', name: 'Jane Doe', avatar: 'https://picsum.photos/id/65/100/100', status: 'busy' })}
             className="flex cursor-pointer items-center gap-4 rounded-lg p-2 min-h-14 justify-between hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <img alt="Jane Doe" className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-700" src="https://picsum.photos/id/65/100/100" />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-light dark:border-background-dark bg-green-500"></div>
              </div>
              <p className="flex-1 truncate text-base font-medium text-slate-600 dark:text-slate-300">Jane Doe</p>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <div className="absolute bottom-24 right-4 z-20">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:brightness-110 active:scale-95 transition-all">
          <Icon name="edit" className="text-2xl" />
        </button>
      </div>
    </div>
  );
};