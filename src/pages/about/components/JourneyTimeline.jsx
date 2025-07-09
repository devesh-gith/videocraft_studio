import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const JourneyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2016,
      title: "The Beginning",
      role: "Junior Video Editor",
      company: "Creative Media Solutions",
      description: "Started my journey in video editing with basic corporate videos and social media content. Learned the fundamentals of storytelling through visual media.",
      achievements: ["Edited 50+ corporate videos", "Mastered Adobe Premiere Pro", "First client testimonial"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Play"
    },
    {
      year: 2018,
      title: "Finding My Voice",
      role: "Video Editor",
      company: "Digital Storytellers Inc.",
      description: "Developed expertise in narrative-driven content and began specializing in brand storytelling. First major campaign success with a viral video series.",
      achievements: ["Created first viral video (2M+ views)", "Won \'Best Editing\' at Local Film Festival", "Expanded to motion graphics"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Award"
    },
    {
      year: 2020,
      title: "Going Independent",
      role: "Freelance Video Editor",
      company: "VideoCraft Studio",
      description: "Launched my own studio during the pandemic, focusing on helping businesses adapt to digital-first communication through compelling video content.",
      achievements: ["Founded VideoCraft Studio", "100+ satisfied clients", "Specialized in remote collaboration"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Rocket"
    },
    {
      year: 2022,
      title: "Industry Recognition",
      role: "Senior Video Editor",
      company: "VideoCraft Studio",
      description: "Gained recognition in the industry with multiple awards and began mentoring upcoming editors. Expanded services to include full video production.",
      achievements: ["Adobe Certified Expert", "Webby Award Winner", "Featured in Video Pro Magazine"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Trophy"
    },
    {
      year: 2024,
      title: "Master Storyteller",
      role: "Creative Director",
      company: "VideoCraft Studio",
      description: "Today, I lead a team of creative professionals, pushing the boundaries of visual storytelling while maintaining the personal touch that defines our work.",
      achievements: ["500+ projects completed", "Team of 5 specialists", "International client base"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Crown"
    }
  ];

  const activeData = timelineData.find(item => item.year === activeYear);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>My Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            8 Years of Creative Evolution
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a curious beginner to an industry-recognized storyteller, every step has shaped my unique approach to video editing and client collaboration.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`px-6 py-3 rounded-lg font-medium smooth-transition ${
                activeYear === item.year
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Content */}
        {activeData && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name={activeData.icon} size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-foreground">
                    {activeData.title}
                  </h3>
                  <p className="text-accent font-medium">{activeData.year}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {activeData.role}
                </h4>
                <p className="text-muted-foreground">{activeData.company}</p>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {activeData.description}
              </p>
              
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                  Key Achievements
                </h5>
                <ul className="space-y-3">
                  {activeData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-card rounded-2xl overflow-hidden cinematic-shadow">
                  <Image
                    src={activeData.image}
                    alt={`${activeData.title} - ${activeData.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Year Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg cinematic-shadow">
                  {activeData.year}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {timelineData.map((item) => (
                <div
                  key={item.year}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    activeYear === item.year ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;