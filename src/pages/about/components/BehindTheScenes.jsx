import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BehindTheScenes = () => {
  const [activeTab, setActiveTab] = useState('workspace');

  const tabs = [
    { id: 'workspace', label: 'My Workspace', icon: 'Monitor' },
    { id: 'process', label: 'Editing Process', icon: 'Settings' },
    { id: 'collaboration', label: 'Client Collaboration', icon: 'Users' },
    { id: 'tools', label: 'Tools & Equipment', icon: 'Wrench' }
  ];

  const workspaceImages = [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Main editing station with multiple monitors",
      title: "Command Center"
    },
    {
      src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Color grading setup with professional monitors",
      title: "Color Suite"
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Audio editing and mixing station",
      title: "Audio Lab"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Story Analysis",
      description: "I start by understanding the core message and emotional journey we want to create.",
      icon: "FileText"
    },
    {
      step: "02",
      title: "Rough Assembly",
      description: "Building the foundation with key scenes and establishing the narrative flow.",
      icon: "Layers"
    },
    {
      step: "03",
      title: "Fine Cutting",
      description: "Refining timing, pacing, and transitions to enhance the storytelling impact.",
      icon: "Scissors"
    },
    {
      step: "04",
      title: "Color & Audio",
      description: "Adding the final polish with color grading and audio mixing for maximum impact.",
      icon: "Palette"
    }
  ];

  const collaborationFeatures = [
    {
      title: "Real-time Feedback",
      description: "Clients can leave timestamped comments directly on the video timeline.",
      icon: "MessageCircle"
    },
    {
      title: "Version Control",
      description: "Track all revisions with clear documentation of changes made.",
      icon: "GitBranch"
    },
    {
      title: "Secure Sharing",
      description: "Password-protected links ensure your content stays confidential.",
      icon: "Shield"
    },
    {
      title: "Mobile Access",
      description: "Review and approve projects from anywhere, on any device.",
      icon: "Smartphone"
    }
  ];

  const equipment = [
    { name: "MacBook Pro M2 Max", category: "Primary Workstation", icon: "Laptop" },
    { name: "LG UltraFine 5K Display", category: "Color-Accurate Monitor", icon: "Monitor" },
    { name: "Adobe Creative Suite", category: "Editing Software", icon: "Layers" },
    { name: "DaVinci Resolve", category: "Color Grading", icon: "Palette" },
    { name: "Audio-Technica ATH-M50x", category: "Professional Headphones", icon: "Headphones" },
    { name: "Blackmagic DeckLink", category: "Video I/O Interface", icon: "Zap" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'workspace':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                Where the Magic Happens
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a peek inside my creative sanctuary where every frame is crafted with precision and passion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {workspaceImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="aspect-square bg-card rounded-xl overflow-hidden cinematic-shadow group-hover:scale-105 smooth-transition">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mt-4 text-center">
                    {image.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                My Creative Process
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every project follows a proven methodology that ensures consistent quality and client satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name={step.icon} size={24} color="var(--color-accent)" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-accent">{step.step}</span>
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'collaboration':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                Seamless Collaboration
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern tools and clear communication ensure your vision is perfectly realized.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {collaborationFeatures.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={20} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                Professional Arsenal
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry-leading tools and equipment ensure the highest quality output for every project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipment.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-4 cinematic-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={16} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Camera" size={16} />
            <span>Behind the Scenes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            Inside VideoCraft Studio
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get an exclusive look at the workspace, process, and tools that bring your stories to life.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium smooth-transition ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
            iconName="Calendar"
            iconPosition="left"
            iconSize={18}
          >
            Schedule a Studio Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;