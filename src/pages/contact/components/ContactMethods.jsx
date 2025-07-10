import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = ({ isChatOpen = false, setIsChatOpen = () => {} }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! 👋 I'm Ujjwal's AI assistant. I can help you with video editing questions, project planning, and scheduling consultations. What would you like to know today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [userContext, setUserContext] = useState({
    projectType: null,
    budget: null,
    timeline: null,
    experience: null
  });
  const [conversationStep, setConversationStep] = useState('initial');
  const [showFeedback, setShowFeedback] = useState(false);

  // Enhanced AI Chatbot responses with context awareness
  const chatbotResponses = {
    // Video editing questions
    'pricing': {
      message: (context) => {
        if (context.projectType) {
          const pricing = {
            'corporate': '₹4,500 - ₹12,000',
            'social': '₹2,500 - ₹8,000',
            'brand': '₹6,000 - ₹15,000',
            'training': '₹3,500 - ₹10,000',
            'event': '₹5,000 - ₹12,000'
          };
          return `For ${context.projectType} videos, pricing typically ranges from ${pricing[context.projectType] || '₹2,500 - ₹15,000'}. This includes 3 rounds of revisions and final delivery. Would you like a detailed quote for your specific project?`;
        }
        return "Our pricing varies based on project complexity: 🎬 Basic editing starts at ₹2,500, 🚀 Professional packages at ₹4,500, and ⭐ Premium projects at ₹8,000+. Each includes 3 revision rounds. What type of project are you planning?";
      },
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Get Detailed Quote', 'View Portfolio']
    },
    'timeline': {
      message: (context) => {
        if (context.projectType) {
          const timelines = {
            'corporate': '3-4 weeks',
            'social': '2-3 weeks',
            'brand': '4-6 weeks',
            'training': '3-5 weeks',
            'event': '2-4 weeks'
          };
          return `For ${context.projectType} videos, typical timeline is ${timelines[context.projectType] || '2-4 weeks'}. Rush jobs available with expedite fees. What's your preferred timeline?`;
        }
        return "Project timelines depend on complexity: ⚡ Basic edits (2-3 weeks), 🚀 Professional projects (3-4 weeks), ⭐ Premium content (4-6 weeks). Rush jobs available with expedite fees. What type of project do you have in mind?";
      },
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Rush Job', 'Schedule Call']
    },
    'software': {
      message: "I use industry-standard software: 🎬 Adobe Premiere Pro for editing, 🎨 DaVinci Resolve for color grading, 📱 VN and CapCut for mobile content. I'm proficient in motion graphics, audio mixing, and creating content optimized for all social media platforms. Want to see examples of my work?",
      quickReplies: ['View Portfolio', 'Technical Demo', 'Software Questions', 'Schedule Consultation']
    },
    'services': {
      message: "I offer comprehensive video services: 🏢 Corporate videos & presentations, 📱 Social media content & reels, 🎯 Brand storytelling & commercials, 📚 Training & educational videos, 🎉 Event coverage & highlights, 📦 Product showcases & demos, 💬 Client testimonials & case studies. Each service is customized to your brand and audience. Which service interests you most?",
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Training Video', 'Event Coverage', 'Get Quote']
    },
    'portfolio': {
      message: "Check out my latest work! 🎬 View my portfolio at /portfolio or follow my Instagram @ujjwal_kr_choudhary for daily updates. I've worked with TechSolutions India, Spice Garden Restaurant, and many other amazing clients. Would you like to see specific examples of your project type?",
      quickReplies: ['View Portfolio', 'Instagram', 'Client Testimonials', 'Similar Projects', 'Schedule Call']
    },
    'consultation': {
      message: "Perfect! I'd love to schedule a free 30-minute consultation! 🗓️ We'll discuss your project goals, timeline, budget, and I'll provide a custom quote. I'm available Mon-Sat, 9AM-6PM IST. What works best for you?",
      quickReplies: ['Today', 'Tomorrow', 'This Week', 'Next Week', 'Send Calendar Link']
    },
    'contact': {
      message: "Here's how to reach me: 📧 Email: ujjwalchoudhary994@gmail.com 📱 Phone: +91 8887967394 📍 Studio: Tulip Lemon, sector-69, Gurugram, HARYANA ⏰ Available: Mon-Sat, 9AM-6PM IST. I typically respond within 2 hours during business hours!",
      quickReplies: ['Send Email', 'Call Now', 'Schedule Meeting', 'Get Directions', 'More Info']
    },
    'project_brief': {
      message: "Great! Let me help you plan your project. 📋 I'll ask a few questions to understand your needs better. What type of video are you looking to create?",
      quickReplies: ['Corporate Video', 'Social Media', 'Brand Story', 'Training Video', 'Event Coverage', 'Other']
    },
    'budget_planning': {
      message: (context) => {
        if (context.budget) {
          return `Perfect! With a budget of ${context.budget}, I can recommend the best approach for your project. Would you like me to suggest a package that fits your budget?`;
        }
        return "Budget planning is crucial for getting the best value! 💰 What's your budget range for this project? This helps me recommend the right package and services.";
      },
      quickReplies: ['₹5,000 - ₹10,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000+', 'Need Guidance']
    },
    'testimonials': {
      message: "Here's what my clients say: ⭐ 'Ujjwal transformed our brand video beyond expectations' - TechSolutions India ⭐ 'Professional, creative, and delivered on time' - Spice Garden Restaurant ⭐ 'Amazing work on our social media content' - Fashion Brand. Want to see more testimonials or discuss your project?",
      quickReplies: ['View More Testimonials', 'Similar Projects', 'Schedule Consultation', 'Get Quote']
    },
    'rush_job': {
      message: "Need it fast? ⚡ I offer rush job services with expedited timelines. Rush fees typically add 25-50% to the base price depending on urgency. What's your timeline requirement?",
      quickReplies: ['1-2 Days', '1 Week', '2 Weeks', 'Regular Timeline', 'Get Quote']
    }
  };

  // Enhanced quick reply options for initial chat
  const initialQuickReplies = [
    'Pricing & Packages',
    'Project Timeline',
    'Software & Tools',
    'View Portfolio',
    'Schedule Consultation',
    'Project Brief',
    'Client Testimonials',
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

  // Analytics tracking
  const trackConversation = (action, data) => {
    // In a real implementation, this would send data to analytics
    console.log('Chat Analytics:', { action, data, timestamp: new Date() });
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setChatHistory([
        {
          id: 1,
          type: 'bot',
          message: "Hi! 👋 I'm Ujjwal's AI assistant. I can help you with video editing questions, project planning, and scheduling consultations. What would you like to know today?",
          timestamp: new Date()
        }
      ]);
      setShowQuickReplies(true);
      setUserContext({
        projectType: null,
        budget: null,
        timeline: null,
        experience: null
      });
      setConversationStep('initial');
      trackConversation('chat_started', {});
    } else {
      trackConversation('chat_closed', { 
        conversationLength: chatHistory.length,
        userContext 
      });
    }
  };

  // Enhanced message processing with context awareness
  const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    let response = null;
    let newContext = { ...userContext };

    // Update context based on user input
    if (lowerMessage.includes('corporate') || lowerMessage.includes('business')) {
      newContext.projectType = 'corporate';
    } else if (lowerMessage.includes('social') || lowerMessage.includes('instagram') || lowerMessage.includes('reel')) {
      newContext.projectType = 'social';
    } else if (lowerMessage.includes('brand') || lowerMessage.includes('commercial')) {
      newContext.projectType = 'brand';
    } else if (lowerMessage.includes('training') || lowerMessage.includes('educational')) {
      newContext.projectType = 'training';
    } else if (lowerMessage.includes('event') || lowerMessage.includes('wedding') || lowerMessage.includes('party')) {
      newContext.projectType = 'event';
    }

    // Budget detection
    if (lowerMessage.includes('₹5,000') || lowerMessage.includes('5000')) {
      newContext.budget = '₹5,000 - ₹10,000';
    } else if (lowerMessage.includes('₹10,000') || lowerMessage.includes('10000')) {
      newContext.budget = '₹10,000 - ₹25,000';
    } else if (lowerMessage.includes('₹25,000') || lowerMessage.includes('25000')) {
      newContext.budget = '₹25,000 - ₹50,000';
    } else if (lowerMessage.includes('₹50,000') || lowerMessage.includes('50000')) {
      newContext.budget = '₹50,000+';
    }

    // Timeline detection
    if (lowerMessage.includes('rush') || lowerMessage.includes('urgent') || lowerMessage.includes('fast')) {
      newContext.timeline = 'rush';
    } else if (lowerMessage.includes('1 week') || lowerMessage.includes('week')) {
      newContext.timeline = '1 week';
    } else if (lowerMessage.includes('2 week') || lowerMessage.includes('two week')) {
      newContext.timeline = '2 weeks';
    }

    // Update context
    setUserContext(newContext);

    // Enhanced keyword matching with context
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('budget')) {
      response = chatbotResponses.pricing;
    } else if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('how long') || lowerMessage.includes('timeline')) {
      response = chatbotResponses.timeline;
    } else if (lowerMessage.includes('software') || lowerMessage.includes('tool') || lowerMessage.includes('premiere') || lowerMessage.includes('davinci') || lowerMessage.includes('capcut')) {
      response = chatbotResponses.software;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer') || lowerMessage.includes('help')) {
      response = chatbotResponses.services;
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('sample') || lowerMessage.includes('example')) {
      response = chatbotResponses.portfolio;
    } else if (lowerMessage.includes('consult') || lowerMessage.includes('meet') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
      response = chatbotResponses.consultation;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      response = chatbotResponses.contact;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('brief') || lowerMessage.includes('plan')) {
      response = chatbotResponses.project_brief;
    } else if (lowerMessage.includes('testimonial') || lowerMessage.includes('review') || lowerMessage.includes('client')) {
      response = chatbotResponses.testimonials;
    } else if (lowerMessage.includes('rush') || lowerMessage.includes('urgent') || lowerMessage.includes('fast')) {
      response = chatbotResponses.rush_job;
    } else {
      // Enhanced default response
      response = {
        message: "I'd love to help you with your video project! 🎬 Could you tell me more about what you're looking for? I can help with pricing, timelines, project planning, or scheduling a consultation.",
        quickReplies: ['Pricing', 'Timeline', 'Project Brief', 'Services', 'Schedule Consultation']
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

      // Track user message
      trackConversation('user_message', { 
        message: chatMessage,
        context: userContext 
      });

      // Simulate AI processing with variable timing
      const processingTime = Math.random() * 1000 + 500; // 500-1500ms
      setTimeout(() => {
        const response = processMessage(chatMessage);
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          message: typeof response.message === 'function' ? response.message(userContext) : response.message,
          timestamp: new Date(),
          quickReplies: response.quickReplies
        };
        
        setChatHistory(prev => [...prev, botMessage]);
        setIsTyping(false);
        setShowQuickReplies(true);

        // Show feedback after 3 bot responses
        if (chatHistory.filter(msg => msg.type === 'bot').length >= 2) {
          setShowFeedback(true);
        }

        // Track bot response
        trackConversation('bot_response', { 
          responseType: Object.keys(chatbotResponses).find(key => chatbotResponses[key] === response),
          context: userContext 
        });
      }, processingTime);
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

    // Track quick reply
    trackConversation('quick_reply', { 
      reply,
      context: userContext 
    });

    const processingTime = Math.random() * 800 + 400; // 400-1200ms for quick replies
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: typeof response.message === 'function' ? response.message(userContext) : response.message,
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      
      setChatHistory(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowQuickReplies(true);

      // Track bot response
      trackConversation('bot_response', { 
        responseType: Object.keys(chatbotResponses).find(key => chatbotResponses[key] === response),
        context: userContext 
      });
    }, processingTime);
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

        {/* Floating Chat Button */}
        {!isChatOpen && (
          <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-bounce-in">
            <button
              onClick={handleChatToggle}
              className="w-12 h-12 md:w-14 md:h-14 bg-conversion hover:bg-conversion/90 text-conversion-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
              title="Start Chat with AI Assistant"
            >
              <Icon name="MessageCircle" size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-conversion/30 rounded-full animate-ping"></div>
            
            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center shadow-md">
              <span className="text-xs font-bold text-accent-foreground">AI</span>
            </div>
            
            {/* "New" indicator */}
            <div className="absolute -bottom-1 -left-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-success text-success-foreground text-xs font-bold rounded-full shadow-md animate-pulse">
              New
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Chat with AI Assistant
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        )}

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
                  <div className="text-xs text-success flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse"></div>
                    Online now
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setChatHistory([
                      {
                        id: Date.now(),
                        type: 'bot',
                        message: "Hi! 👋 I'm Ujjwal's AI assistant. I can help you with video editing questions, project planning, and scheduling consultations. What would you like to know today?",
                        timestamp: new Date()
                      }
                    ]);
                    setUserContext({
                      projectType: null,
                      budget: null,
                      timeline: null,
                      experience: null
                    });
                    setConversationStep('initial');
                    trackConversation('chat_reset', {});
                  }}
                  className="text-text-secondary hover:text-foreground"
                  title="Reset Chat"
                >
                  <Icon name="RotateCcw" size={14} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    handleChatToggle();
                    setShowFeedback(false);
                  }}
                  className="text-text-secondary hover:text-foreground"
                  title="Minimize Chat"
                >
                  <Icon name="Minus" size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    handleChatToggle();
                    setShowFeedback(false);
                  }}
                  className="text-text-secondary hover:text-foreground"
                  title="Close Chat"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto">
              {/* Context Indicator */}
              {(userContext.projectType || userContext.budget || userContext.timeline) && (
                <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="text-xs font-medium text-accent mb-2">I understand:</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    {userContext.projectType && <div>• Project: {userContext.projectType} video</div>}
                    {userContext.budget && <div>• Budget: {userContext.budget}</div>}
                    {userContext.timeline && <div>• Timeline: {userContext.timeline}</div>}
                  </div>
                </div>
              )}
              
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
              {/* Feedback Section */}
              {showFeedback && (
                <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                  <div className="text-xs font-medium text-foreground mb-2">How was this conversation?</div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        trackConversation('feedback', { rating: 'positive' });
                        setShowFeedback(false);
                      }}
                      className="flex-1 py-1 px-2 bg-success/10 text-success rounded text-xs hover:bg-success/20 transition-colors"
                    >
                      👍 Helpful
                    </button>
                    <button
                      onClick={() => {
                        trackConversation('feedback', { rating: 'neutral' });
                        setShowFeedback(false);
                      }}
                      className="flex-1 py-1 px-2 bg-muted text-muted-foreground rounded text-xs hover:bg-muted/80 transition-colors"
                    >
                      😐 Okay
                    </button>
                    <button
                      onClick={() => {
                        trackConversation('feedback', { rating: 'negative' });
                        setShowFeedback(false);
                      }}
                      className="flex-1 py-1 px-2 bg-error/10 text-error rounded text-xs hover:bg-error/20 transition-colors"
                    >
                      👎 Not Helpful
                    </button>
                  </div>
                </div>
              )}
              
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