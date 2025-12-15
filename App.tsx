import React, { useState } from 'react';
import { WorkspaceScreen } from './screens/WorkspaceScreen';
import { ChannelChatScreen } from './screens/ChannelChatScreen';
import { DirectMessageScreen } from './screens/DirectMessageScreen';
import { FilesScreen } from './screens/FilesScreen';
import { CallsScreen } from './screens/CallsScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BottomTabs } from './components/BottomTabs';
import { UserData } from './types';

export enum Screen {
  LOGIN = 'LOGIN',
  WORKSPACE = 'WORKSPACE',
  CHANNEL = 'CHANNEL',
  DM = 'DM',
  FILES = 'FILES',
  CALLS = 'CALLS',
  PROFILE = 'PROFILE',
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [activeTab, setActiveTab] = useState<'Home' | 'Files' | 'Calls' | 'Profile'>('Home');
  const [selectedChannel, setSelectedChannel] = useState({ id: 'general', name: '# general' });
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  // Navigation handlers
  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    // Sync tab state roughly with screen
    if (screen === Screen.WORKSPACE) setActiveTab('Home');
    if (screen === Screen.FILES) setActiveTab('Files');
    if (screen === Screen.CALLS) setActiveTab('Calls');
    if (screen === Screen.PROFILE) setActiveTab('Profile');
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'Home') navigateTo(Screen.WORKSPACE);
    if (tab === 'Files') navigateTo(Screen.FILES);
    if (tab === 'Calls') navigateTo(Screen.CALLS);
    if (tab === 'Profile') navigateTo(Screen.PROFILE);
    setActiveTab(tab as any);
  };

  const handleChannelSelect = (channel: { id: string; name: string }) => {
    setSelectedChannel(channel);
    navigateTo(Screen.CHANNEL);
  };

  const handleDMSelect = (user: UserData) => {
    setSelectedUser(user);
    navigateTo(Screen.DM);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LOGIN:
        return <LoginScreen onLogin={() => navigateTo(Screen.WORKSPACE)} />;
      case Screen.WORKSPACE:
        return (
          <WorkspaceScreen 
            onNavigateToChannel={handleChannelSelect}
            onNavigateToDM={handleDMSelect}
          />
        );
      case Screen.CHANNEL:
        return <ChannelChatScreen channel={selectedChannel} onBack={() => navigateTo(Screen.WORKSPACE)} />;
      case Screen.DM:
        return <DirectMessageScreen user={selectedUser} onBack={() => navigateTo(Screen.WORKSPACE)} />;
      case Screen.FILES:
        return <FilesScreen onBack={() => navigateTo(Screen.WORKSPACE)} />;
      case Screen.CALLS:
        return <CallsScreen onBack={() => navigateTo(Screen.WORKSPACE)} />;
      case Screen.PROFILE:
        return <ProfileScreen onSignOut={() => navigateTo(Screen.LOGIN)} />;
      default:
        return <LoginScreen onLogin={() => navigateTo(Screen.WORKSPACE)} />;
    }
  };

  const showBottomTabs = currentScreen !== Screen.LOGIN && currentScreen !== Screen.CHANNEL && currentScreen !== Screen.DM;

  return (
    <div className="mx-auto flex h-dvh w-full max-w-md flex-col bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden relative">
      <div className="flex-1 overflow-hidden relative">
        {renderScreen()}
      </div>
      
      {showBottomTabs && (
        <BottomTabs activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default App;