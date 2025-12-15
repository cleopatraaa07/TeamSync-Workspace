export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: 'online' | 'offline' | 'busy';
  badge?: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text?: string;
  image?: string;
  timestamp: string;
  isMe: boolean;
  reactions?: { emoji: string; count: number; active?: boolean }[];
  replyCount?: number;
  lastReplyTime?: string;
  isRead?: boolean;
}

export interface FileItem {
  id: string;
  name: string;
  type: 'pdf' | 'excel' | 'image' | 'zip';
  author: string;
  date: string;
}

export interface Call {
  id: string;
  name: string;
  participants: string[]; // Avatar URLs
  participantCount: number;
}