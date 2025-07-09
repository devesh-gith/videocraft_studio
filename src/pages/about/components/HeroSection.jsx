import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Video editing workspace with multiple monitors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Video" size={16} />
              <span>Meet the Creator</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
              Crafting Stories,
              <span className="block text-accent">Frame by Frame</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              My name is Ujjwal and I'm an intermediate-level video editor using Premiere Pro, DaVinci Resolve, VN, CapCut, and more. I know various video editing tools and features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                iconName="Play"
                iconPosition="left"
                iconSize={18}
              >
                Watch My Story
              </Button>
              
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                iconSize={18}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Video Player Mockup */}
          <div className="relative">
            <div className="relative aspect-video bg-card rounded-2xl overflow-hidden cinematic-shadow">
              <Image
                src="/assets/images/Ujjwal.jpg"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
                <button className="w-20 h-20 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center group smooth-transition">
                  <Icon name="Play" size={32} color="#1A1A1A" className="ml-1 group-hover:scale-110 smooth-transition" />
                </button>
              </div> */}
              
              {/* Video Controls Mockup */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-conversion rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground font-medium">Introduction Video</span>
                  <div className="flex-1"></div>
                  <span className="text-xs text-muted-foreground">2:34</span>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 cinematic-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">500+ Projects</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 cinematic-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">4.9/5 Rating</p>
                  <p className="text-xs text-muted-foreground">Client Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;