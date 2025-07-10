import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary to-background flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-conversion rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-trust rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Professional Video Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-foreground mb-6 leading-tight">
            Transform Your Vision Into
            <span className="block text-transparent bg-gradient-to-r from-accent via-conversion to-trust bg-clip-text">
              Cinematic Reality
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            From concept to completion, we craft compelling video content that captivates audiences, drives engagement, and delivers measurable results for your brand.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link to="/contact#consultation-booking">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 text-lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              Start Your Project
            </Button>
          </Link>
          
          <Link to="/portfolio">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg"
              iconName="Play"
              iconPosition="left"
              iconSize={20}
            >
              View Our Work
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-headline font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-headline font-bold text-conversion mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-headline font-bold text-trust mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-headline font-bold text-success mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-accent" />
      </div>
    </section>
  );
};

export default ServiceHero;