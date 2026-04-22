import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your Azure Pool expert. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulated AI Response
    setTimeout(() => {
      let response = "That's a great question! One of our specialists will be able to give you a detailed quote. Would you like to schedule a free consultation?";
      if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        response = "Our custom pool projects typically range from R150,000 to R1,500,000 depending on size and features. Would you like a more specific estimate?";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[2000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass rounded-2xl shadow-2xl w-[320px] md:w-[350px] overflow-hidden flex flex-col border border-white mb-4"
          >
            {/* Header */}
            <div className="azure-gradient p-3 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-luxury-aquamarine rounded-full flex items-center justify-center">
                  <MessageCircle size={14} className="text-luxury-navy" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Azure Assistant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/10 p-1 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-[11px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-luxury-premier text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions (Design inspired) */}
            <div className="p-2 border-t flex gap-2 overflow-x-auto bg-white/50 scrollbar-hide">
              {['Pricing', 'Schedule', 'Services'].map(action => (
                <button 
                  key={action}
                  onClick={() => setInput(action)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white text-luxury-navy text-[10px] font-bold border border-gray-100 hover:border-luxury-premier transition-all"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white/80 border-t backdrop-blur-md flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                className="flex-1 bg-transparent text-[11px] outline-none"
              />
              <button type="submit" className="text-luxury-premier font-bold text-[10px] uppercase hover:text-luxury-navy transition-colors">
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 azure-gradient rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer group active:scale-95 transition-all relative"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X size={28} /> : (
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        )}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-luxury-coral rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">1</div>
      </button>
    </div>
  );
};
