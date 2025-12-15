import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../components/Icon';

interface ChannelChatScreenProps {
  channel: { id: string; name: string };
  onBack: () => void;
}

interface Message {
  id: string;
  user: string;
  time: string;
  content: string;
  avatar: string;
  type: 'text' | 'image' | 'me' | 'system';
  imageUrl?: string;
  reactions?: { emoji: string; count: number }[];
}

export const ChannelChatScreen: React.FC<ChannelChatScreenProps> = ({ channel, onBack }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize messages based on channel
  useEffect(() => {
    let initialMessages: Message[] = [];
    switch (channel.id) {
      case 'announcements':
        initialMessages = [
          {
            id: '1',
            user: 'System Admin',
            time: 'Yesterday',
            content: '🎉 Welcome to the #announcements channel! Important updates will be posted here.',
            avatar: 'https://picsum.photos/id/1/100/100',
            type: 'text'
          },
          {
            id: '2',
            user: 'Sarah Connor',
            time: '9:00 AM',
            content: 'New company policy update: Remote work days are now flexible for everyone starting next month. Please check your email for the full PDF.',
            avatar: 'https://picsum.photos/id/5/100/100',
            type: 'text',
            reactions: [{ emoji: '🔥', count: 12 }, { emoji: '🙌', count: 5 }]
          }
        ];
        break;
      case 'design-team':
        initialMessages = [
          {
            id: '1',
            user: 'Brenda Smith',
            time: '10:47 AM',
            content: "I've uploaded my latest designs to the Figma file. Here's a quick preview:",
            avatar: 'https://picsum.photos/id/222/100/100',
            type: 'image',
            imageUrl: 'https://picsum.photos/id/3/600/400',
            reactions: [{ emoji: '👍', count: 3 }, { emoji: '🎉', count: 1 }]
          },
          {
            id: '2',
            user: 'You',
            time: '10:50 AM',
            content: "Looks great, Brenda! I'll be there.",
            avatar: 'https://picsum.photos/id/64/100/100',
            type: 'me'
          }
        ];
        break;
      case 'project-pegasus':
        initialMessages = [
          {
            id: '1',
            user: 'Lead Dev',
            time: 'Mon 2:00 PM',
            content: '🔒 This channel is private. Please do not share internal documents outside of this group.',
            avatar: 'https://picsum.photos/id/10/100/100',
            type: 'system' // Custom type for emphasis
          },
          {
            id: '2',
            user: 'Alice',
            time: '11:15 AM',
            content: 'Backend API for the new module is ready for testing.',
            avatar: 'https://picsum.photos/id/20/100/100',
            type: 'text'
          }
        ];
        break;
      default: // General
        initialMessages = [
          {
            id: '0',
            user: 'Channel Bot',
            time: 'Today',
            content: 'Welcome to the #general channel! This is the place for team-wide announcements and casual chatter.',
            avatar: 'https://picsum.photos/id/870/100/100',
            type: 'system'
          },
          {
            id: '1',
            user: 'Alex Hartman',
            time: '10:45 AM',
            content: 'Hey team, just a reminder about the design sync meeting at 2 PM today. Please come prepared with your latest mockups.',
            avatar: 'https://picsum.photos/id/111/100/100',
            type: 'text'
          },
          {
            id: '2',
            user: 'You',
            time: '10:55 AM',
            content: 'Thanks for the reminder!',
            avatar: 'https://picsum.photos/id/64/100/100',
            type: 'me'
          },
          {
            id: '3',
            user: 'Charles Davis',
            time: '11:02 AM',
            content: "Perfect, see you all then. @channel don't forget to approve your timesheets.",
            avatar: 'https://picsum.photos/id/555/100/100',
            type: 'text'
          }
        ];
        break;
    }
    setMessages(initialMessages);
  }, [channel.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      user: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: inputText,
      avatar: 'https://picsum.photos/id/64/100/100',
      type: 'me',
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleAttach = () => alert("Open file picker...");
  const handleEmoji = () => alert("Open emoji picker...");
  const handleMention = () => setInputText((prev) => prev + '@');
  const handleInfo = () => alert(`Channel details for ${channel.name}\n128 members\nCreated Oct 2023`);

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 flex items-center border-b border-zinc-200 dark:border-white/5 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-3 shadow-sm dark:shadow-none">
        <button onClick={onBack} className="flex h-10 w-10 shrink-0 items-center justify-center -ml-2 rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
          <Icon name="arrow_back_ios_new" className="text-xl" />
        </button>
        <div className="flex flex-1 flex-col ml-1">
          <h2 className="flex items-center gap-1 text-lg font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
            {channel.name}
          </h2>
          {channel.id === 'announcements' ? (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Read-only channel</p>
          ) : (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">128 members</p>
          )}
        </div>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={handleInfo}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
          >
            <Icon name="info" className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-4 custom-scrollbar scroll-smooth">
        {/* Channel Welcome Header */}
        <div className="py-8 flex flex-col items-center justify-center gap-2 border-b border-zinc-200 dark:border-zinc-800 mb-6 opacity-80 text-center">
           <div className={`h-20 w-20 rounded-full flex items-center justify-center mb-2 shadow-inner ${
             channel.id === 'project-pegasus' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
           }`}>
              <Icon name={channel.id === 'project-pegasus' ? 'lock' : 'tag'} className="text-4xl" />
           </div>
           <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Welcome to {channel.name}!</h3>
           <p className="text-zinc-600 dark:text-zinc-400 max-w-xs">This is the start of the <span className="font-semibold text-zinc-900 dark:text-white">{channel.name}</span> channel. Be nice and helpful.</p>
        </div>

        {/* Dynamic Messages */}
        {messages.map((msg, index) => {
          if (msg.type === 'system') {
             return (
              <div key={msg.id} className="flex justify-center mb-6 px-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm text-center border border-blue-100 dark:border-blue-800/50">
                   {msg.content}
                </div>
              </div>
             )
          }

          return (
            <div key={msg.id} className={`flex gap-3 mb-6 ${msg.type === 'me' ? 'justify-end' : ''}`}>
              {msg.type !== 'me' && (
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 shrink-0 shadow-sm" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>
              )}
              
              <div className={`flex flex-1 flex-col gap-1 max-w-[85%] ${msg.type === 'me' ? 'items-end' : 'items-start'}`}>
                  {msg.type !== 'me' && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-zinc-900 dark:text-white font-bold text-sm">{msg.user}</span>
                      <span className="text-zinc-500 dark:text-zinc-500 text-xs">{msg.time}</span>
                    </div>
                  )}
                  
                  <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                    msg.type === 'me' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-100 rounded-tl-none border border-zinc-100 dark:border-white/5'
                  }`}>
                    <p className="text-base font-normal leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>

                  {msg.imageUrl && (
                    <div className="mt-1">
                      <img src={msg.imageUrl} className="rounded-xl w-full max-w-[360px] aspect-video object-cover shadow-sm border border-zinc-100 dark:border-white/5" alt="attachment" />
                    </div>
                  )}

                  {msg.reactions && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {msg.reactions.map((reaction, i) => (
                        <button key={i} className="flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                          <span>{reaction.emoji}</span>
                          <span className="text-zinc-600 dark:text-zinc-400">{reaction.count}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.type === 'me' && (
                    <span className="text-xs text-zinc-400 mt-1">{msg.time}</span>
                  )}
              </div>

              {msg.type === 'me' && (
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 shrink-0 shadow-sm" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>
              )}
            </div>
          )
        })}
        
        {/* New Messages Divider */}
        {channel.id === 'general' && messages.length > 4 && (
          <div className="relative py-4 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-red-500/30"></div>
            </div>
            <div className="relative bg-background-light dark:bg-background-dark px-4 py-1 rounded-full border border-red-500/30 text-xs font-bold text-red-500 shadow-sm">
              New Messages
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 mt-auto border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#15152a] p-3 pb-safe">
        <div className="flex items-end gap-2 rounded-xl bg-white dark:bg-background-dark p-2 shadow-sm border border-zinc-200 dark:border-zinc-800 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
          <button 
            onClick={handleAttach}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-colors self-end"
          >
            <Icon name="add_circle" className="text-2xl" />
          </button>
          <div className="flex-1 py-2 min-h-[40px]">
             <input 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border-none bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-0 focus:outline-none p-0 text-base" 
              placeholder={`Message ${channel.name}`} 
              type="text" 
            />
          </div>
          <div className="flex items-center gap-1 self-end pb-1">
             <button 
              onClick={handleEmoji}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 rounded-full transition-colors"
            >
              <Icon name="mood" className="text-xl" />
            </button>
            <button 
              onClick={handleMention}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 rounded-full transition-colors"
            >
              <Icon name="alternate_email" className="text-xl" />
            </button>
             <button 
              onClick={handleSend}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all shadow-md ml-1"
            >
              <Icon name="arrow_upward" className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};