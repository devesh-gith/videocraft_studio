import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = ({ isChatOpen = false, setIsChatOpen = () => {} }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm Ujjwal's AI assistant. I can help you with video editing questions and schedule consultations. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  // AI Chatbot responses
  const chatbotResponses = {
    // Video editing questions
    'pricing': {
      message: "Our pricing varies based on project complexity. Basic editing starts at ₹2,500, professional packages at ₹4,500, and premium projects at ₹8,000+. Would you like me to schedule a free consultation to discuss your specific project?",
      quickReplies: ['Schedule Consultation', 'View Portfolio', 'More Questions']
    },
    'timeline': {
      message: "Project timelines depend on complexity: Basic edits (2-3 weeks), Professional projects (3-4 weeks), Premium content (4-6 weeks). Rush jobs available with expedite fees. What type of project do you have in mind?",
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Schedule Call']
    },
    'software': {
      message: "I use Adobe Premiere Pro, DaVinci Resolve, VN, and CapCut for editing. I'm proficient in color grading, motion graphics, audio mixing, and creating content optimized for all social media platforms.",
      quickReplies: ['View Portfolio', 'Technical Questions', 'Schedule Demo']
    },
    'services': {
      message: "I offer: Corporate videos, Social media content, Brand storytelling, Training videos, Event coverage, Product showcases, and Client testimonials. Each service is customized to your brand and audience.",
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Get Quote']
    },
    'portfolio': {
      message: "You can view my portfolio at /portfolio or check out my Instagram @ujjwal_kr_choudhary for latest work. I've worked with various clients including TechSolutions India, Spice Garden Restaurant, and more.",
      quickReplies: ['View Portfolio', 'Instagram', 'Client Testimonials', 'Schedule Call']
    },
    'consultation': {
      message: "I'd be happy to schedule a free 30-minute consultation! I can help you plan your project, discuss timeline, and provide a custom quote. What's the best time for you?",
      quickReplies: ['Today', 'Tomorrow', 'This Week', 'Next Week']
    },
    'contact': {
      message: "You can reach me at: 📧 ujjwalchoudhary994@gmail.com 📱 +91 8887967394 📍 Tulip Lemon, sector-69, Gurugram, HARYANA. I'm available Mon-Sat, 9AM-6PM IST.",
      quickReplies: ['Send Email', 'Call Now', 'Schedule Meeting', 'More Info']
    }
  };

  // Quick reply options for initial chat
  const initialQuickReplies = [
    'Pricing & Packages',
    'Project Timeline',
    'Software & Tools',
    'View Portfolio',
    'Schedule Consultation',
    'Contact Info'
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Phone Call',
      description: 'Immediate consultation available',
      detail: '+91 8887967394',
      action: 'Call Now',
      availability: 'Mon-Sat, 9AM-6PM IST',
      color: 'text-success'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Detailed project discussions',
      detail: 'ujjwalchoudhary994@gmail.com',
      action: 'Send Email',
      availability: '24-hour response time',
      color: 'text-trust'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Quick questions & support',
      detail: 'AI Assistant Available',
      action: 'Start Chat',
      availability: 'Online now',
      color: 'text-conversion'
    },
    {
      icon: 'MapPin',
      title: 'Studio Visit',
      description: 'In-person consultation',
      detail: 'Tulip Lemon, sector-69, Gurugram, HARYANA',
      action: 'Get Directions',
      availability: 'By appointment only',
      color: 'text-accent'
    }
  ];

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setChatHistory([
        {
          id: 1,
          type: 'bot',
          message: "Hi! I'm Ujjwal's AI assistant. I can help you with video editing questions and schedule consultations. What would you like to know?",
          timestamp: new Date()
        }
      ]);
      setShowQuickReplies(true);
    }
  };

  const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    let response = null;

    // Check for keywords and provide appropriate responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
      response = chatbotResponses.pricing;
    } else if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
      response = chatbotResponses.timeline;
    } else if (lowerMessage.includes('software') || lowerMessage.includes('tool') || lowerMessage.includes('premiere') || lowerMessage.includes('davinci')) {
      response = chatbotResponses.software;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer')) {
      response = chatbotResponses.services;
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('sample')) {
      response = chatbotResponses.portfolio;
    } else if (lowerMessage.includes('consult') || lowerMessage.includes('meet') || lowerMessage.includes('schedule')) {
      response = chatbotResponses.consultation;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      response = chatbotResponses.contact;
    } else {
      // Default response for unrecognized queries
      response = {
        message: "I understand you're asking about video editing. Could you be more specific? I can help with pricing, timelines, software, services, or scheduling a consultation.",
        quickReplies: ['Pricing', 'Timeline', 'Services', 'Schedule Consultation']
      };
    }

    return response;
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Add user message to chat
      const userMessage = {
        id: Date.now(),
        type: 'user',
        message: chatMessage,
        timestamp: new Date()
      };
      
      setChatHistory(prev => [...prev, userMessage]);
      setChatMessage('');
      setIsTyping(true);
      setShowQuickReplies(false);

      // Simulate AI processing
      setTimeout(() => {
        const response = processMessage(chatMessage);
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          message: response.message,
          timestamp: new Date(),
          quickReplies: response.quickReplies
        };
        
        setChatHistory(prev => [...prev, botMessage]);
        setIsTyping(false);
        setShowQuickReplies(true);
      }, 1000);
    }
  };

  const handleQuickReply = (reply) => {
    const response = processMessage(reply);
    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: reply,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setIsTyping(true);
    setShowQuickReplies(false);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: response.message,
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      
      setChatHistory(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowQuickReplies(true);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the communication method that works best for you. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-card rounded-2xl cinematic-shadow p-6 hover:scale-105 smooth-transition">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${method.color.split('-')[1]}/20 to-${method.color.split('-')[1]}/10 flex items-center justify-center mb-4`}>
                <Icon name={method.icon} size={24} className={method.color} />
              </div>
              
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              
              <p className="text-sm text-text-secondary mb-3">
                {method.description}
              </p>
              
              <div className="text-sm font-medium text-foreground mb-3">
                {method.detail}
              </div>
              
              <div className="text-xs text-text-secondary mb-4">
                {method.availability}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className={`border-${method.color.split('-')[1]} text-${method.color.split('-')[1]} hover:bg-${method.color.split('-')[1]}/10`}
                onClick={() => {
                  if (method.title === 'Live Chat') {
                    handleChatToggle();
                  } else if (method.title === 'Phone Call') {
                    window.location.href = 'tel:+918887967394';
                  } else if (method.title === 'Email') {
                    window.location.href = 'mailto:ujjwalchoudhary994@gmail.com';
                  } else if (method.title === 'Studio Visit') {
                    window.open('https://www.google.com/maps/search/Tulip+Lemon+sector-69+Gurugram+HARYANA', '_blank');
                  }
                }}
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-card rounded-2xl cinematic-shadow p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Clock" size={16} />
              <span>Response Time Guarantee</span>
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              We Value Your Time
            </h3>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our commitment to prompt, professional communication ensures your project stays on track from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-success mb-2">Instant</div>
              <div className="text-sm text-text-secondary">AI Chat Response</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-trust" />
              </div>
              <div className="text-2xl font-bold text-trust mb-2">4 hours</div>
              <div className="text-sm text-text-secondary">Email Response</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-conversion" />
              </div>
              <div className="text-2xl font-bold text-conversion mb-2">24 hours</div>
              <div className="text-sm text-text-secondary">Proposal Delivery</div>
            </div>
          </div>
        </div>

        {/* Enhanced AI Chat Widget */}
        {isChatOpen && (
          <div className="fixed bottom-6 right-6 w-96 bg-card rounded-2xl cinematic-shadow border border-border z-50">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">AI Assistant</div>
                  <div className="text-xs text-success">Online now</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleChatToggle}
                className="text-text-secondary hover:text-foreground"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto">
              {chatHistory.map((msg) => (
                <div key={msg.id} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-conversion text-conversion-foreground' 
                      : 'bg-muted text-foreground'
                  }`}>
                    <div className="text-sm">{msg.message}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  
                  {/* Quick replies for bot messages */}
                  {msg.type === 'bot' && msg.quickReplies && showQuickReplies && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="text-left mb-4">
                  <div className="inline-block bg-muted text-foreground px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                />
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleSendMessage}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="Send"
                  iconSize={14}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactMethods;