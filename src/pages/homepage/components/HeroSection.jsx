import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';


const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroVideos = [
    {
      id: 1,
      title: "Corporate Brand Story",
      videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1&background=1",
      category: "Corporate"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      videoUrl: "https://player.vimeo.com/video/169599296?autoplay=1&loop=1&muted=1&background=1",
      category: "Social Media"
    },
    {
      id: 3,
      title: "Product Launch",
      videoUrl: "https://player.vimeo.com/video/158148793?autoplay=1&loop=1&muted=1&background=1",
      category: "Brand Stories"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVideoLoaded(false);
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {heroVideos.map((video, index) => (
            <div
              key={video.id}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <iframe
                src={video.videoUrl}
                className="w-full h-full object-cover scale-105"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={video.title}
              />
            </div>
          ))}
        </div>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Tagline */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-foreground leading-tight">
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Crafting Stories,
              </span>
              <span className="block text-accent opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Frame by Frame
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              Transform your vision into compelling visual narratives that captivate audiences and drive results
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                View Portfolio
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 text-lg font-semibold"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Video Navigation Dots */}
          <div className="flex items-center justify-center space-x-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? 'bg-accent scale-125' :'bg-muted-foreground/50 hover:bg-muted-foreground/80'
                }`}
                aria-label={`Switch to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium tracking-wide">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Current Video Info */}
      <div className="absolute bottom-8 right-8 z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
        <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-conversion rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {heroVideos[currentVideoIndex].category}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;