
import React, { useState, useEffect, useRef } from 'react';
import { Message } from './types';
import { EvaluationService } from './services/geminiService';
import ChatMessage from './components/ChatMessage';
import { Send, GraduationCap, RefreshCw, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationService] = useState(() => new EvaluationService());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      try {
        const initialText = await evaluationService.startEvaluation();
        setMessages([{
          role: 'model',
          text: initialText,
          timestamp: Date.now()
        }]);
      } catch (error) {
        console.error("Init error", error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [evaluationService]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await evaluationService.sendAnswer(userMsg.text);
      setMessages(prev => [...prev, {
        role: 'model',
        text: botResponse,
        timestamp: Date.now()
      }]);
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "Désolé, j'ai rencontré une erreur technique. Peux-tu reformuler ?",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 text-lg leading-tight">Évaluation Réflexive</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Cours de Ph. Clauzard</p>
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
          title="Recommencer"
        >
          <RefreshCw size={20} />
        </button>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:max-w-4xl lg:mx-auto w-full scrollbar-thin scrollbar-thumb-slate-200">
        <div className="flex flex-col gap-2">
          {messages.map((msg, i) => (
            <ChatMessage key={i} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></span>
                </div>
                <span className="text-xs font-medium text-slate-400 italic">Le tuteur réfléchit...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MessageCircle size={18} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-24 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-inner"
            placeholder="Répondez à la question ici..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${
                !inputValue.trim() || isLoading
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md active:scale-95'
              }`}
            >
              Envoyer
              <Send size={16} />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          Le chatbot évalue votre compréhension du concept de praticien réflexif.
        </p>
      </footer>
    </div>
  );
};

export default App;
