import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalTouch = () => {
  const personalInterests = [
    {
      title: "Street Photography",
      description: "Capturing candid moments and urban stories teaches me about composition, timing, and authentic emotion - skills that directly translate to video editing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "Camera",
      connection: "Enhances visual storytelling and composition skills"
    },
    {
      title: "Jazz Music",
      description: "Playing jazz piano has taught me about rhythm, improvisation, and the importance of space in creative expression - principles I apply to video pacing.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "Music",
      connection: "Influences timing, rhythm, and audio sensitivity in editing"
    },
    {
      title: "Rock Climbing",
      description: "The problem-solving mindset and attention to detail required in climbing mirrors the precision needed in video editing - every move must be calculated.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "Mountain",
      connection: "Develops problem-solving and precision under pressure"
    },
    {
      title: "Cooking",
      description: "The art of combining ingredients to create something greater than the sum of its parts is exactly what I do with footage - it's all about the perfect blend.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "ChefHat",
      connection: "Teaches patience, timing, and the art of combining elements"
    }
  ];

  const lifePhilosophy = [
    {
      principle: "Curiosity Drives Growth",
      description: "I believe that staying curious about the world around us leads to more authentic and compelling storytelling.",
      icon: "Search"
    },
    {
      principle: "Balance Creates Clarity",
      description: "Maintaining interests outside of work keeps my creative perspective fresh and prevents burnout.",
      icon: "Scale"
    },
    {
      principle: "Details Matter",
      description: "Whether it's a perfect cut or a well-prepared meal, attention to detail separates good from exceptional.",
      icon: "Eye"
    },
    {
      principle: "Collaboration Over Competition",
      description: "The best results come from working together, sharing knowledge, and lifting each other up.",
      icon: "Handshake"
    }
  ];

  const funFacts = [
    {
      fact: "Coffee Enthusiast",
      detail: "I roast my own coffee beans and can identify the origin of most specialty coffees by taste alone.",
      icon: "Coffee"
    },
    {
      fact: "Vinyl Collector",
      detail: "My collection of 500+ vinyl records spans from 1960s jazz to modern electronic music.",
      icon: "Disc"
    },
    {
      fact: "Weekend Hiker",
      detail: "I've hiked over 200 miles of trails in the Pacific Northwest, always with my camera in tow.",
      icon: "MapPin"
    },
    {
      fact: "Language Learner",
      detail: "Currently learning Spanish to better connect with clients and expand my cultural perspective.",
      icon: "Globe"
    },
    {
      fact: "Tech Tinkerer",
      detail: "I build and modify my own computers, always optimizing for the best video editing performance.",
      icon: "Cpu"
    },
    {
      fact: "Meditation Practitioner",
      detail: "Daily meditation helps maintain focus during long editing sessions and creative problem-solving.",
      icon: "Brain"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Heart" size={16} />
            <span>Personal Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            Beyond the Edit Suite
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The experiences and interests that shape my creative perspective and make me not just a better editor, but a more well-rounded storyteller and collaborator.
          </p>
        </div>

        {/* Personal Interests */}
        <div className="mb-20">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-12">
            Passions That Fuel Creativity
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {personalInterests.map((interest, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden cinematic-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name={interest.icon} size={20} color="var(--color-accent)" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{interest.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {interest.description}
                  </p>
                  
                  <div className="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="ArrowRight" size={14} color="var(--color-accent)" />
                      <span className="text-sm font-medium text-accent">Creative Connection</span>
                    </div>
                    <p className="text-sm text-foreground">{interest.connection}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Life Philosophy */}
        <div className="mb-20">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-12">
            Guiding Principles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {lifePhilosophy.map((principle, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={principle.icon} size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {principle.principle}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-12">
            Fun Facts & Quirks
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-4 cinematic-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">
                      {item.fact}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Mission */}
        <div className="bg-card rounded-2xl p-8 md:p-12 cinematic-shadow">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Target" size={32} color="var(--color-accent)" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">
              My Personal Mission
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To create video content that doesn't just inform or entertain, but genuinely connects people to ideas, emotions, and each other. Every project is an opportunity to tell a story that matters, and every client relationship is a chance to make a positive impact through the power of visual storytelling.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Heart" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Authentic Connection</h4>
              <p className="text-sm text-muted-foreground">Creating genuine emotional bonds through storytelling</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Lightbulb" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Creative Innovation</h4>
              <p className="text-sm text-muted-foreground">Pushing boundaries while respecting timeless principles</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-trust/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Users" size={24} color="var(--color-trust)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Meaningful Impact</h4>
              <p className="text-sm text-muted-foreground">Every project should make a positive difference</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
            >
              Let's Create Something Meaningful Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTouch;