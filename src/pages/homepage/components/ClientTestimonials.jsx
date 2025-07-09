import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Industries",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      videoQuote: "https://player.vimeo.com/video/76979871?autoplay=0&loop=1&muted=0",
      textQuote: `VideoCraft Studio transformed our brand story in ways we never imagined. The attention to detail and creative vision exceeded all expectations.\n\nOur engagement rates increased by 300% after launching the campaign.`,
      rating: 5,
      projectType: "Brand Campaign",
      resultMetric: "300% engagement increase"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CEO",
      company: "FitLife Studio",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      videoQuote: "https://player.vimeo.com/video/169599296?autoplay=0&loop=1&muted=0",
      textQuote: `The team's ability to capture our energy and translate it into compelling video content was remarkable. Every frame tells our story perfectly.\n\nMembership inquiries doubled within the first month.`,
      rating: 5,
      projectType: "Social Media Campaign",
      resultMetric: "200% inquiry increase"
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Founder",
      company: "Roasted Perfection",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      videoQuote: "https://player.vimeo.com/video/158148793?autoplay=0&loop=1&muted=0",
      textQuote: `Working with VideoCraft was like having a creative partner who truly understood our vision. The final product was beyond our wildest dreams.\n\nOur online sales grew by 250% after the video launch.`,
      rating: 5,
      projectType: "Brand Story",
      resultMetric: "250% sales growth"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "HR Director",
      company: "Global Solutions Inc",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      videoQuote: "https://player.vimeo.com/video/76979871?autoplay=0&loop=1&muted=0",
      textQuote: `The training videos revolutionized our onboarding process. Complex concepts became engaging and easy to understand.\n\nEmployee retention improved by 40% in the first quarter.`,
      rating: 5,
      projectType: "Training Series",
      resultMetric: "40% retention improvement"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from our clients about how our video storytelling transformed their businesses
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Testimonial */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden cinematic-shadow">
              <iframe
                src={testimonials[activeTestimonial].videoQuote}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`${testimonials[activeTestimonial].name} testimonial`}
                onLoad={handleVideoPlay}
                onEnded={handleVideoEnd}
              />
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[activeTestimonial].position}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-conversion rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            {/* Quote */}
            <div className="relative">
              <Icon name="Quote" size={48} className="text-accent/20 absolute -top-4 -left-2" />
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed pl-8">
                {testimonials[activeTestimonial].textQuote}
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center space-x-4 pt-6 border-t border-border">
              <Image
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <h4 className="text-xl font-headline font-semibold text-foreground">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[activeTestimonial].position} at {testimonials[activeTestimonial].company}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Project Type</div>
                <div className="font-semibold text-foreground">{testimonials[activeTestimonial].projectType}</div>
              </div>
              
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Result</div>
                <div className="font-semibold text-success">{testimonials[activeTestimonial].resultMetric}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`relative p-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-accent/20 scale-110' :'bg-muted/50 hover:bg-muted/80'
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              
              {activeTestimonial === index && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Play" size={10} color="#1A1A1A" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-xl p-8 cinematic-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;