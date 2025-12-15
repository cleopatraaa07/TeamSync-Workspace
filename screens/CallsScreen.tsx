import React from 'react';
import { Icon } from '../components/Icon';

interface CallsScreenProps {
  onBack: () => void;
}

export const CallsScreen: React.FC<CallsScreenProps> = ({ onBack }) => {
  const handleStartCall = () => {
    alert("Starting a new call...");
  };

  const handleJoinCall = (channelName: string) => {
    alert(`Joining call in ${channelName}...`);
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={onBack} className="flex size-12 shrink-0 items-center justify-start text-black dark:text-white hover:opacity-70">
          <Icon name="arrow_back_ios" className="text-xl" />
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-black dark:text-white">Panggilan</h2>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={handleStartCall}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-black dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Icon name="add_ic_call" />
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto pb-4">
        {/* Start New Call Button */}
        <div className="flex px-4 py-3">
          <button 
            onClick={handleStartCall}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-md"
          >
            <Icon name="videocam" className="text-white" />
            <span className="truncate">Start a New Call</span>
          </button>
        </div>

        {/* Section Header */}
        <h3 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Active Calls</h3>

        {/* Card 1 */}
        <div className="p-4 pt-2">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#191933] p-4 shadow-sm border border-gray-100 dark:border-transparent">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-black dark:text-white text-base font-bold leading-tight">#general-voice</p>
                <p className="text-gray-600 dark:text-[#9292c9] text-sm font-normal leading-normal">5 people talking</p>
              </div>
              <div className="flex items-center -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-100 dark:ring-[#191933]" src="https://picsum.photos/id/10/100/100" alt="Avatar 1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-100 dark:ring-[#191933]" src="https://picsum.photos/id/11/100/100" alt="Avatar 2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-100 dark:ring-[#191933]" src="https://picsum.photos/id/12/100/100" alt="Avatar 3" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-[#232348] ring-2 ring-gray-100 dark:ring-[#191933] text-xs font-medium text-gray-600 dark:text-white">+2</div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button 
                onClick={() => handleJoinCall("#general-voice")}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Join</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 pt-0">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#191933] p-4 shadow-sm border border-gray-100 dark:border-transparent">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-black dark:text-white text-base font-bold leading-tight">#design-team</p>
                <p className="text-gray-600 dark:text-[#9292c9] text-sm font-normal leading-normal">2 people talking</p>
              </div>
              <div className="flex items-center -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-100 dark:ring-[#191933]" src="https://picsum.photos/id/13/100/100" alt="Avatar 4" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-100 dark:ring-[#191933]" src="https://picsum.photos/id/14/100/100" alt="Avatar 5" />
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button 
                 onClick={() => handleJoinCall("#design-team")}
                 className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Join</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State Illustration */}
        <div className="flex flex-1 flex-col items-center justify-center p-8 text-center mt-8 opacity-60">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-[#191933]">
            <Icon name="campaign" className="text-4xl text-gray-500 dark:text-gray-400" />
          </div>
          <h3 className="mt-6 text-lg font-bold text-black dark:text-white">It's quiet in here...</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-[#9292c9]">Be the first to start a call and get the conversation going.</p>
        </div>
      </div>
    </div>
  );
};