import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onBookConsultation }) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-primary to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-conversion rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calendar" size={16} />
            <span>Free Consultation Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
            Let's Craft Your
            <span className="block text-accent font-accent italic">Visual Story</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
            Transform your vision into compelling video content that captivates audiences and drives results. Every great story begins with a conversation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              onClick={onBookConsultation}
            >
              Book Free Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-4"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={20}
            >
              Start Live Chat
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24h</div>
              <div className="text-sm text-text-secondary">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;