
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === 'model';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm text-sm sm:text-base ${
          isBot
            ? 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
            : 'bg-indigo-600 text-white rounded-tr-none'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${isBot ? 'text-indigo-500' : 'text-indigo-200'}`}>
            {isBot ? 'Tuteur' : 'Étudiant'}
          </span>
        </div>
        <div className="whitespace-pre-wrap leading-relaxed">
          {message.text}
        </div>
        <div className={`text-[9px] mt-2 text-right ${isBot ? 'text-slate-400' : 'text-indigo-200'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
