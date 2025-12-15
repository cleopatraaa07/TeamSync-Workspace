import React, { useState } from 'react';
import { Icon } from '../components/Icon';

interface FilesScreenProps {
  onBack: () => void;
}

interface FileItem {
  id: string;
  name: string;
  desc: string;
  icon: string;
  colorClass: string;
  type: 'File' | 'Integrasi';
}

export const FilesScreen: React.FC<FilesScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'File' | 'Integrasi'>('File');
  const [searchTerm, setSearchTerm] = useState('');

  const allItems: FileItem[] = [
    { id: '1', type: 'File', name: 'Design_System.pdf', desc: 'oleh Sarah pada 21 Mei 2024', icon: 'picture_as_pdf', colorClass: 'text-red-500 dark:text-red-400 bg-red-500/20 dark:bg-red-400/20' },
    { id: '2', type: 'File', name: 'Sprint_Planning.xlsx', desc: 'oleh Budi pada 20 Mei 2024', icon: 'description', colorClass: 'text-green-500 dark:text-green-400 bg-green-500/20 dark:bg-green-400/20' },
    { id: '3', type: 'File', name: 'UI_Mockups_Final.png', desc: 'oleh Anda pada 19 Mei 2024', icon: 'image', colorClass: 'text-blue-500 dark:text-blue-400 bg-blue-500/20 dark:bg-blue-400/20' },
    { id: '4', type: 'File', name: 'Project_Assets.zip', desc: 'oleh John pada 18 Mei 2024', icon: 'folder', colorClass: 'text-yellow-500 dark:text-yellow-400 bg-yellow-500/20 dark:bg-yellow-400/20' },
    { id: '5', type: 'Integrasi', name: 'Google Drive', desc: 'Connected', icon: 'cloud_upload', colorClass: 'text-blue-600 dark:text-blue-400 bg-blue-600/20 dark:bg-blue-400/20' },
    { id: '6', type: 'Integrasi', name: 'Figma', desc: 'Connected', icon: 'palette', colorClass: 'text-purple-500 dark:text-purple-400 bg-purple-500/20 dark:bg-purple-400/20' },
    { id: '7', type: 'Integrasi', name: 'Slack', desc: 'Disconnected', icon: 'forum', colorClass: 'text-orange-500 dark:text-orange-400 bg-orange-500/20 dark:bg-orange-400/20' },
  ];

  const filteredItems = allItems.filter(item => 
    item.type === activeTab && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (activeTab === 'File') alert("Upload new file...");
    else alert("Connect new integration...");
  };

  const handleMore = (name: string) => {
    alert(`Options for ${name}`);
  };

  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col font-display group/design-root bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-start hover:opacity-70">
          <Icon name="arrow_back_ios_new" className="text-2xl" />
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Berbagi File & Integrasi</h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      <div className="flex flex-col flex-1 px-4 overflow-y-auto">
        {/* Segmented Buttons */}
        <div className="flex py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
            <button 
              onClick={() => setActiveTab('File')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all duration-200 ${activeTab === 'File' ? 'bg-background-light dark:bg-background-dark shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <span className="truncate">File</span>
            </button>
            <button 
               onClick={() => setActiveTab('Integrasi')}
               className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all duration-200 ${activeTab === 'Integrasi' ? 'bg-background-light dark:bg-background-dark shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <span className="truncate">Integrasi</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-3">
          <label className="flex flex-col h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
              <div className="text-slate-400 dark:text-slate-500 flex border-none bg-slate-200 dark:bg-slate-800 items-center justify-center pl-4 pr-2">
                <Icon name="search" />
              </div>
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex w-full min-w-0 flex-1 resize-none bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-2 text-base font-normal leading-normal" 
                placeholder={`Cari ${activeTab.toLowerCase()}...`} 
              />
            </div>
          </label>
        </div>

        {/* Spacer */}
        <div className="h-4"></div>

        {/* File List Items */}
        <div className="flex flex-col gap-2 pb-24">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-slate-500 dark:text-slate-400">
               No {activeTab.toLowerCase()}s found.
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-transparent px-0 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg p-2 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`${item.colorClass} flex items-center justify-center rounded-lg shrink-0 size-12`}>
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">{item.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">{item.desc}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMore(item.name); }}
                    className="text-slate-500 dark:text-slate-400 flex size-7 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <Icon name="more_horiz" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6">
        <button 
          onClick={handleAdd}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Icon name="add" className="text-3xl text-white" />
        </button>
      </div>
    </div>
  );
};