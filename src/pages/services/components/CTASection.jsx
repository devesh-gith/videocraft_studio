import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-conversion/10 to-trust/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-conversion rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-trust rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-conversion/20 text-conversion px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} />
            <span>Ready to Start?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Let's Create Something
            <span className="text-transparent bg-gradient-to-r from-accent via-conversion to-trust bg-clip-text"> Extraordinary</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your vision into compelling video content that captivates audiences and drives results. Our team is ready to bring your story to life.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free Consultation Card */}
          <div className="bg-card rounded-2xl border border-accent/20 p-8 text-center hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Free Strategy Consultation
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Get expert insights on your video strategy with a complimentary 30-minute consultation. We'll discuss your goals, audience, and recommend the best approach.
            </p>
            
            <ul className="text-sm text-muted-foreground space-y-2 mb-8">
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Project scope analysis</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Budget planning guidance</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Timeline estimation</span>
              </li>
            </ul>
            
            <Link to="/contact#consultation-booking">
              <Button
                variant="default"
                fullWidth
                className="bg-accent hover:bg-accent/90 text-primary"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Instant Quote Card */}
          <div className="bg-card rounded-2xl border border-conversion/20 p-8 text-center hover:border-conversion/40 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Zap" size={32} className="text-conversion" />
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Get Instant Quote
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Have a clear project in mind? Get a detailed quote within 24 hours. Simply fill out our project brief and we'll provide comprehensive pricing.
            </p>
            
            <ul className="text-sm text-muted-foreground space-y-2 mb-8">
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Detailed cost breakdown</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Project timeline</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Service recommendations</span>
              </li>
            </ul>
            
            <Button
              variant="default"
              fullWidth
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="FileText"
              iconPosition="left"
              iconSize={16}
            >
              Request Quote
            </Button>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <Icon name="Phone" size={24} className="text-trust mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
            <p className="text-sm text-muted-foreground mb-3">Speak directly with our team</p>
            <p className="text-trust font-medium">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <Icon name="Mail" size={24} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
            <p className="text-sm text-muted-foreground mb-3">Get detailed project information</p>
            <p className="text-accent font-medium">hello@videocraftstudio.com</p>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <Icon name="MessageSquare" size={24} className="text-conversion mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
            <p className="text-sm text-muted-foreground mb-3">Instant support available</p>
            <p className="text-conversion font-medium">Start Chat</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={16} className="text-success" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} className="text-trust" />
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Award" size={16} className="text-accent" />
              <span>Award-Winning Team</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Join 500+ satisfied clients who trust VideoCraft Studio for their video production needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;