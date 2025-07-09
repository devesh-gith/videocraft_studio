import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Phone Call',
      description: 'Immediate consultation available',
      detail: '+1 (555) 123-4567',
      action: 'Call Now',
      availability: 'Mon-Fri, 9AM-6PM EST',
      color: 'text-success'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Detailed project discussions',
      detail: 'hello@videocraftstudio.com',
      action: 'Send Email',
      availability: '24-hour response time',
      color: 'text-trust'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Quick questions & support',
      detail: 'Instant messaging available',
      action: 'Start Chat',
      availability: 'Online now',
      color: 'text-conversion'
    },
    {
      icon: 'MapPin',
      title: 'Studio Visit',
      description: 'In-person consultation',
      detail: '123 Creative Ave, Studio City, CA',
      action: 'Get Directions',
      availability: 'By appointment only',
      color: 'text-accent'
    }
  ];

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      alert(`Message sent: "${chatMessage}". We'll respond shortly!`);
      setChatMessage('');
      setIsChatOpen(false);
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
                onClick={method.title === 'Live Chat' ? handleChatToggle : undefined}
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
              <div className="text-2xl font-bold text-success mb-2">15 min</div>
              <div className="text-sm text-text-secondary">Live Chat Response</div>
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

        {/* Live Chat Widget */}
        {isChatOpen && (
          <div className="fixed bottom-6 right-6 w-80 bg-card rounded-2xl cinematic-shadow border border-border z-50">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Live Chat</div>
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
            
            <div className="p-4 h-64 overflow-y-auto">
              <div className="bg-muted rounded-lg p-3 mb-4">
                <div className="text-sm text-foreground">
                  Hi! I'm here to help with any questions about your video project. What can I assist you with today?
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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