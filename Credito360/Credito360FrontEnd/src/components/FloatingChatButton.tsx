import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import LiveChat from './LiveChat';

const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-10 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Abrir chat ao vivo"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat ao Vivo
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      )}
      
      <LiveChat isOpen={isChatOpen} onClose={closeChat} />
    </>
  );
};

export default FloatingChatButton; 