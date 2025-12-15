import React, { useState } from 'react';
import { Icon } from '../components/Icon';

interface ProfileScreenProps {
  onSignOut: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onSignOut }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('pengguna@email.com');
  const [avatar, setAvatar] = useState('https://picsum.photos/id/64/100/100');
  
  // Settings states
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Visual toggle only for this demo

  const handleUpload = () => {
    alert("This would open the file picker to upload a new profile picture.");
    // Simulate change
    setAvatar(`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/100/100`);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Persist changes here
  };

  return (
    <div className="flex h-full flex-col bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <div className="flex items-center p-4 pb-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h2>
        <div className="ml-auto">
          {isEditing ? (
            <button onClick={handleSave} className="text-primary font-bold text-sm">Done</button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="text-primary font-bold text-sm">Edit</button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        {/* Profile Info */}
        <div className="flex flex-col items-center mt-6 mb-8">
          <div className="relative group cursor-pointer" onClick={isEditing ? handleUpload : undefined}>
            <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
               <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
            </div>
            {isEditing && (
              <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center">
                <Icon name="photo_camera" className="text-white text-3xl" />
              </div>
            )}
          </div>
          
          {isEditing ? (
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-4 text-center bg-transparent border-b border-primary text-xl font-bold text-slate-900 dark:text-white focus:outline-none"
            />
          ) : (
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
          )}
          <p className="text-slate-500 dark:text-slate-400 text-sm">Senior Developer</p>
        </div>

        {/* Settings Section */}
        <div className="flex flex-col gap-6">
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 ml-1">Account Settings</h4>
            <div className="flex flex-col gap-2 rounded-2xl bg-white dark:bg-[#191933] p-2 shadow-sm">
               <div className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Icon name="notifications" className="text-lg" />
                     </div>
                     <span className="text-slate-900 dark:text-white font-medium">Notifications</span>
                  </div>
                  <button 
                    onClick={() => setNotifications(!notifications)}
                    className={`w-12 h-7 rounded-full transition-colors flex items-center px-1 ${notifications ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                  >
                    <div className={`h-5 w-5 bg-white rounded-full transition-transform ${notifications ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
               </div>
               
               <div className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Icon name="dark_mode" className="text-lg" />
                     </div>
                     <span className="text-slate-900 dark:text-white font-medium">Dark Mode</span>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-12 h-7 rounded-full transition-colors flex items-center px-1 ${darkMode ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                  >
                    <div className={`h-5 w-5 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
               </div>
            </div>
          </section>

          <section>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 ml-1">Support</h4>
            <div className="flex flex-col gap-2 rounded-2xl bg-white dark:bg-[#191933] p-2 shadow-sm">
               <div className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <Icon name="help" className="text-lg" />
                     </div>
                     <span className="text-slate-900 dark:text-white font-medium">Help & FAQ</span>
                  </div>
                  <Icon name="chevron_right" className="text-slate-400" />
               </div>
            </div>
          </section>

          <button 
            onClick={onSignOut}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/20 p-4 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          >
             <Icon name="logout" />
             <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};