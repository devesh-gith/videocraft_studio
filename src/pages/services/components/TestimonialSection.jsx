import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      service: "Corporate Video Production",
      rating: 5,
      content: `VideoCraft Studio transformed our company presentation into a cinematic masterpiece. The attention to detail and storytelling approach resulted in a 340% increase in client engagement. Our sales team now has a powerful tool that consistently impresses prospects.`,
      metrics: {
        engagement: "+340%",
        conversion: "+85%",
        satisfaction: "98%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Bloom Digital Agency",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      service: "Social Media Content Creation",
      rating: 5,
      content: `Working with VideoCraft Studio has been a game-changer for our social media campaigns. They created 15 unique video assets that generated over 2.5M views across platforms. The ROI exceeded our expectations by 250%.`,
      metrics: {
        views: "2.5M+",
        roi: "+250%",
        engagement: "+180%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Brand Manager",
      company: "EcoLife Products",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      service: "Brand Storytelling",
      rating: 5,
      content: `Our brand story video became our most powerful marketing asset. VideoCraft Studio captured our mission perfectly, resulting in a 420% increase in brand awareness and helping us secure three major partnerships within two months of launch.`,
      metrics: {
        awareness: "+420%",
        partnerships: "3 Major",
        reach: "1.8M+"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "HR Director",
      company: "Global Innovations Inc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      service: "Training Video Production",
      rating: 5,
      content: `The training videos produced by VideoCraft Studio revolutionized our onboarding process. Employee retention improved by 65%, and training completion rates reached 94%. The investment paid for itself within the first quarter.`,
      metrics: {
        retention: "+65%",
        completion: "94%",
        efficiency: "+150%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Trusted by Industry
            <span className="text-trust"> Leaders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our video production services have transformed businesses and delivered measurable results across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
              <Image
                src={currentTestimonial.videoThumbnail}
                alt={`${currentTestimonial.service} project`}
                className="w-full h-80 object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                <button className="w-20 h-20 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                </button>
              </div>

              {/* Service Badge */}
              <div className="absolute top-4 left-4 bg-accent/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {currentTestimonial.service}
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {Object.entries(currentTestimonial.metrics).map(([key, value], index) => (
                <div key={key} className="bg-card rounded-lg border border-border p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8">
            {/* Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.role}
                </div>
                <div className="text-accent font-medium">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-accent bg-accent/5 scale-105' :'border-border bg-card hover:border-accent/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground line-clamp-3">
                {testimonial.content}
              </div>
              
              <div className="mt-4 text-xs text-accent font-medium">
                {testimonial.service}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;