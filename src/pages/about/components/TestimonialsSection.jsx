import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      quote: "Alex doesn't just edit videos - he crafts experiences. His ability to understand our brand voice and translate it into compelling visual stories is unmatched. The collaboration process was seamless, and he delivered beyond our expectations.",
      project: "Brand Story Campaign",
      collaboration: "What impressed me most was Alex's proactive communication. He provided regular updates, welcomed feedback, and made revisions feel like a natural part of the creative process rather than a burden.",
      result: "300% increase in engagement",
      videoThumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "Local Restaurant Group",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      quote: "Working with Alex transformed how we tell our story. He captured the heart of our family business in ways we never thought possible. His attention to detail and creative vision brought our brand to life.",
      project: "Restaurant Story Series",
      collaboration: "Alex took the time to understand our family history and values. He spent hours with our team, learning about our traditions, which made the final videos feel authentic and personal.",
      result: "45% increase in weekend reservations",
      videoThumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jennifer Park",
      role: "Executive Director",
      company: "Community Impact Foundation",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      quote: "Alex has an incredible gift for finding the human story in everything he touches. His work on our donor impact videos moved people to tears and action. He's not just a video editor - he's a storyteller who happens to use video as his medium.",
      project: "Donor Impact Documentary",
      collaboration: "Alex approached our sensitive subject matter with respect and professionalism. He worked closely with our beneficiaries, making them feel comfortable and ensuring their stories were told with dignity.",
      result: "Doubled annual fundraising goal",
      videoThumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Thompson",
      role: "Creative Director",
      company: "Pixel Perfect Agency",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      quote: "As a creative agency, we work with many video editors, but Alex stands out for his collaborative spirit and technical excellence. He elevates our concepts and brings fresh perspectives that make our campaigns more impactful.",
      project: "Multi-Brand Campaign Series",
      collaboration: "Alex integrates seamlessly with our creative team. He participates in brainstorming sessions, offers valuable input, and executes with precision. It feels like having an in-house editor with freelance flexibility.",
      result: "Award-winning campaign recognition",
      videoThumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Lisa Wang",
      role: "Founder",
      company: "Wellness Collective",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 5,
      quote: "Alex understood our wellness brand's need for authentic, calming content. His editing style perfectly matched our brand aesthetic, and his process was as zen as the content he created. Professional yet personal.",
      project: "Wellness Journey Series",
      collaboration: "What I appreciated most was Alex's patience with our iterative feedback process. He understood that wellness content requires a specific energy and worked with us to achieve the perfect tone and pacing.",
      result: "50% growth in online community",
      videoThumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>Client Relationships</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            What Clients Say About Working Together
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond project outcomes, these testimonials highlight the collaborative process and communication style that makes our partnerships successful.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-card rounded-2xl p-8 md:p-12 cinematic-shadow mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div>
              {/* Client Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-accent font-medium">{currentTestimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} color="var(--color-accent)" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Project Info */}
              <div className="bg-accent/5 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Film" size={16} color="var(--color-accent)" />
                  <span className="text-sm font-medium text-accent">Project: {currentTestimonial.project}</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentTestimonial.collaboration}</p>
              </div>

              {/* Result */}
              <div className="flex items-center space-x-2 text-success">
                <Icon name="TrendingUp" size={16} />
                <span className="font-semibold">{currentTestimonial.result}</span>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative">
              <div className="aspect-video bg-muted rounded-xl overflow-hidden cinematic-shadow">
                <Image
                  src={currentTestimonial.videoThumbnail}
                  alt={`${currentTestimonial.project} video thumbnail`}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
                  <button className="w-16 h-16 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center group smooth-transition">
                    <Icon name="Play" size={24} color="#1A1A1A" className="ml-1 group-hover:scale-110 smooth-transition" />
                  </button>
                </div>
              </div>
              
              {/* Project Label */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md rounded-lg px-3 py-2">
                <span className="text-sm font-medium text-foreground">{currentTestimonial.project}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevTestimonial}
            className="flex items-center space-x-2 px-4 py-2 bg-card hover:bg-accent/10 rounded-lg smooth-transition"
          >
            <Icon name="ChevronLeft" size={20} />
            <span className="text-sm font-medium">Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  index === activeTestimonial ? 'bg-accent' : 'bg-muted hover:bg-accent/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center space-x-2 px-4 py-2 bg-card hover:bg-accent/10 rounded-lg smooth-transition"
          >
            <span className="text-sm font-medium">Next</span>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`bg-card rounded-xl p-6 text-left smooth-transition cinematic-shadow ${
                index === activeTestimonial 
                  ? 'ring-2 ring-accent' :'hover:bg-accent/5'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} color="var(--color-accent)" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                "{testimonial.quote}"
              </p>
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Users" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">150+</h4>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Repeat" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">85%</h4>
              <p className="text-sm text-muted-foreground">Repeat Clients</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-trust/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Clock" size={24} color="var(--color-trust)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">48hr</h4>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-conversion/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Star" size={24} color="var(--color-conversion)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">4.9/5</h4>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;