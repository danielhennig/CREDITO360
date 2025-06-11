import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bot,
  Maximize2,
  MessageCircle,
  Minimize2,
  PhoneOff,
  Send,
  User,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  agentName?: string;
}

interface LiveChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiveChat = ({ isOpen, onClose }: LiveChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [agentStatus, setAgentStatus] = useState<'connecting' | 'connected' | 'offline'>('connecting');
  const [showEndChatConfirm, setShowEndChatConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agentName = 'Ana Silva';
  const agentResponses = [
    'Olá! Sou a Ana, sua assistente virtual. Como posso ajudá-lo hoje?',
    'Entendo sua dúvida. Vou verificar isso para você.',
    'Posso ajudá-lo com informações sobre crédito, conta ou problemas técnicos.',
    'Essa é uma ótima pergunta! Deixe-me explicar...',
    'Para resolver isso, você pode seguir estes passos:',
    'Tem mais alguma dúvida? Estou aqui para ajudar!',
    'Vou transferir você para um especialista em alguns instantes.',
    'Obrigada por entrar em contato conosco!'
  ];

  const quickReplies = [
    'Como solicitar crédito?',
    'Esqueci minha senha',
    'Problemas no app',
    'Falar com humano'
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Simula conexão inicial
      setTimeout(() => {
        setAgentStatus('connected');
        addAgentMessage(agentResponses[0]);
      }, 2000);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addAgentMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'agent',
      timestamp: new Date(),
      agentName
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateAgentTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
      addAgentMessage(randomResponse);
    }, 1500 + Math.random() * 2000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addUserMessage(inputMessage);
      setInputMessage('');
      simulateAgentTyping();
    }
  };

  const handleEndChat = () => {
    setShowEndChatConfirm(true);
  };

  const confirmEndChat = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addAgentMessage('Obrigada por entrar em contato conosco! Espero ter ajudado. Tenha um ótimo dia! 😊');
      setTimeout(() => {
        setAgentStatus('offline');
        setTimeout(() => {
          onClose();
          // Reset do chat para próxima abertura
          setMessages([]);
          setAgentStatus('connecting');
          setShowEndChatConfirm(false);
        }, 2000);
      }, 1500);
    }, 1000);
  };

  const cancelEndChat = () => {
    setShowEndChatConfirm(false);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    
    // Respostas específicas para quick replies
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        let response = '';
        
        switch (reply) {
          case 'Como solicitar crédito?':
            response = 'Para solicitar crédito: 1) Faça login na sua conta 2) Conecte seus bancos via Open Finance 3) Nossa IA analisará seu perfil 4) Você receberá ofertas personalizadas. Quer que eu te ajude com algum passo específico?';
            break;
          case 'Esqueci minha senha':
            response = 'Sem problemas! Na tela de login, clique em "Esqueci minha senha", digite seu email e você receberá um link para redefinir. O link é válido por 24 horas. Precisa de mais ajuda?';
            break;
          case 'Problemas no app':
            response = 'Vamos resolver isso! Primeiro, tente fechar e abrir o app novamente. Se não funcionar, verifique se tem a versão mais recente. Qual problema específico você está enfrentando?';
            break;
          case 'Falar com humano':
            response = 'Claro! Vou conectar você com um de nossos especialistas humanos. Aguarde um momento... 👨‍💼';
            break;
          default:
            response = agentResponses[Math.floor(Math.random() * agentResponses.length)];
        }
        
        addAgentMessage(response);
      }, 1000);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-40 right-4 z-50">
      <Card className={`w-80 shadow-2xl border-0 transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-96'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                agentStatus === 'connected' ? 'bg-green-400' : 
                agentStatus === 'connecting' ? 'bg-yellow-400' : 'bg-red-400'
              }`}></div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Chat ao Vivo</h3>
              <p className="text-xs text-blue-100">
                {agentStatus === 'connected' ? `${agentName} - Online` :
                 agentStatus === 'connecting' ? 'Conectando...' : 'Chat Finalizado'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {agentStatus === 'connecting' && (
                <div className="text-center text-gray-500 text-sm">
                  <div className="animate-pulse">Conectando com um agente...</div>
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-green-600 text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      </div>
                      <div>
                        <div className={`px-3 py-2 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                        }`}>
                          {message.text}
                        </div>
                        <div className={`text-xs text-gray-500 mt-1 ${
                          message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs text-white">
                      <Bot className="h-3 w-3" />
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-bl-none shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && agentStatus === 'connected' && (
              <div className="px-4 py-2 border-t bg-white">
                <p className="text-xs text-gray-500 mb-2">Respostas rápidas:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* End Chat Confirmation */}
            {showEndChatConfirm && (
              <div className="px-4 py-3 border-t bg-yellow-50 border-yellow-200">
                <p className="text-sm text-gray-700 mb-3">Tem certeza que deseja finalizar o chat?</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={cancelEndChat}
                    className="flex-1 text-xs"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={confirmEndChat}
                    className="flex-1 text-xs bg-red-600 hover:bg-red-700"
                  >
                    Finalizar
                  </Button>
                </div>
              </div>
            )}

            {/* Input */}
            {!showEndChatConfirm && (
              <div className="p-4 border-t bg-white rounded-b-lg">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    disabled={agentStatus !== 'connected'}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || agentStatus !== 'connected'}
                    size="sm"
                    className="px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {agentStatus === 'connected' && messages.length > 0 && (
                  <div className="flex justify-center">
                    <Button
                      onClick={handleEndChat}
                      size="sm"
                      variant="outline"
                      className="text-xs text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                    >
                      <PhoneOff className="h-3 w-3 mr-1" />
                      Finalizar Chat
                    </Button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default LiveChat; 