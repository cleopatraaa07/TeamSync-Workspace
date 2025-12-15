import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../components/Icon';
import { UserData } from '../types';

interface DirectMessageScreenProps {
  user: UserData | null;
  onBack: () => void;
}

interface Message {
  id: string;
  sender: 'me' | 'them';
  content: string;
  time: string;
  type?: 'text' | 'image';
  imageUrl?: string;
  reactions?: number;
}

export const DirectMessageScreen: React.FC<DirectMessageScreenProps> = ({ user, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // If no user is selected (shouldn't happen with proper nav), show placeholder
  if (!user) {
    return (
      <div className="flex h-full items-center justify-center bg-background-light dark:bg-background-dark">
        <p>User not found</p>
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  // Load user-specific chat history
  useEffect(() => {
    let history: Message[] = [];
    if (user.id === 'alicia') {
      history = [
        { id: '1', sender: 'them', content: 'Hey, did you see the new project guidelines?', time: 'Yesterday 4:00 PM' },
        { id: '2', sender: 'me', content: 'Yes! I think they look solid. Especially the section on accessibility.', time: 'Yesterday 4:05 PM' },
        { id: '3', sender: 'them', content: 'Agreed. Let\'s sync up tomorrow?', time: '9:00 AM' }
      ];
    } else if (user.id === 'david') {
      history = [
        { id: '1', sender: 'them', content: 'Are you free for lunch?', time: '12:00 PM' },
        { id: '2', sender: 'me', content: 'Sure, where are we going?', time: '12:01 PM' },
        { id: '3', sender: 'them', content: 'That new burger place downstairs.', time: '12:02 PM' }
      ];
    } else if (user.id === 'jane') {
      history = [
        { id: '1', sender: 'them', content: 'I found a bug in the login flow.', time: '10:00 AM' },
        { id: '2', sender: 'them', content: 'It only happens on Safari.', time: '10:01 AM', type: 'image', imageUrl: 'https://picsum.photos/id/20/400/300' },
        { id: '3', sender: 'me', content: 'Thanks Jane, I\'m looking into it now.', time: '10:05 AM' }
      ];
    } else {
      // Default fallback
      history = [
        { id: '1', sender: 'them', content: 'Hello!', time: '10:00 AM' }
      ];
    }
    setMessages(history);
  }, [user.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'me',
      content: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleAdd = () => alert("Add file functionality");
  const handleEmoji = () => alert("Emoji picker");
  const handleMention = () => setInputText((prev) => prev + '@');
  const handleCall = () => alert(`Calling ${user.name}...`);
  const handleVideo = () => alert(`Starting video call with ${user.name}...`);

  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col font-display bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between border-b border-zinc-200 dark:border-white/10 bg-background-light dark:bg-background-dark px-4">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Icon name="arrow_back_ios_new" className="text-2xl" />
          </button>
          <div className="relative">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
            {user.status === 'online' && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-dark bg-green-500"></div>}
            {user.status === 'busy' && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-dark bg-red-500"></div>}
          </div>
          <div className="ml-2">
            <h1 className="font-bold text-zinc-900 dark:text-white">{user.name}</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 capitalize">{user.status}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleCall} className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Icon name="call" className="text-2xl" />
          </button>
          <button onClick={handleVideo} className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Icon name="videocam" className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Message List */}
      <main ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 custom-scrollbar scroll-smooth">
        <div className="flex flex-col gap-4 pb-4">
          {/* Date Separator */}
          <div className="flex items-center justify-center py-2">
            <div className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              Today
            </div>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'me' ? 'self-end' : 'self-start'}`}>
              {msg.sender === 'them' && (
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 shrink-0" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
              )}
              
              <div className={`flex max-w-[80%] flex-col gap-1 ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                <div className={`rounded-lg px-4 py-3 shadow-md ${
                  msg.sender === 'me' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-none'
                }`}>
                  {msg.imageUrl && (
                    <img src={msg.imageUrl} className="rounded-md w-full aspect-video object-cover mb-2" alt="attachment" />
                  )}
                  <p className="text-base font-normal leading-normal">{msg.content}</p>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{msg.time}</span>
                  {msg.sender === 'me' && <Icon name="done_all" className="!text-base text-blue-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Message Composer */}
      <footer className="sticky bottom-0 mt-auto flex w-full shrink-0 flex-col bg-background-light dark:bg-background-dark border-t border-zinc-200 dark:border-white/5">
        <div className="flex items-center gap-2 p-4">
          <button 
            onClick={handleAdd}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:text-blue-400 hover:bg-primary/30 transition-colors"
          >
            <Icon name="add" className="text-2xl" />
          </button>
          <div className="relative flex-1">
            <input 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-full border-none bg-zinc-200 py-3 pl-4 pr-12 text-zinc-900 placeholder:text-zinc-500 focus:ring-2 focus:ring-primary dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 focus:outline-none" 
              placeholder={`Message ${user.name}...`} 
              type="text" 
            />
            <button 
              onClick={handleMention}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:text-primary"
            >
              <Icon name="alternate_email" className="text-2xl" />
            </button>
          </div>
          <button 
            onClick={handleSend}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:brightness-110 active:scale-95 transition-all"
          >
            <Icon name="send" className="text-2xl" />
          </button>
        </div>
      </footer>
    </div>
  );
};