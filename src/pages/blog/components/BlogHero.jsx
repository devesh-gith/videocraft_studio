import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-primary to-background pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-conversion rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-trust rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Industry Insights & Creative Inspiration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
            Crafting Stories,
            <span className="text-accent block">Frame by Frame</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            Dive deep into the world of video editing with expert insights, cutting-edge techniques, and behind-the-scenes stories from the VideoCraft Studio. Discover how visual storytelling transforms brands and captivates audiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="Play"
              iconPosition="left"
              iconSize={16}
            >
              Watch Latest Tutorial
            </Button>
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Subscribe to Newsletter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-headline font-bold text-accent mb-1">150+</div>
              <div className="text-sm text-text-secondary">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-headline font-bold text-conversion mb-1">50K+</div>
              <div className="text-sm text-text-secondary">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-headline font-bold text-trust mb-1">25+</div>
              <div className="text-sm text-text-secondary">Video Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-headline font-bold text-success mb-1">95%</div>
              <div className="text-sm text-text-secondary">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;