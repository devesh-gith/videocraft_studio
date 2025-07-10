import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const JourneyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2020,
      title: "The Beginning",
      role: "Video Editor",
      company: "Clubs & Societies",
      description: "Started my journey in video editing by working in various clubs and societies, learning the fundamentals of storytelling and editing through real projects and teamwork.",
      achievements: ["Edited 20+ club videos", "Learned basics of Premiere Pro & VN", "First collaborative project"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Play"
    },
    {
      year: 2021,
      title: "Skill Building",
      role: "Course Learner",
      company: "Udemy & Online Platforms",
      description: "Expanded my skills by completing multiple video editing courses on Udemy and other platforms, focusing on advanced techniques and creative workflows.",
      achievements: ["Completed 5+ Udemy courses", "Learned color grading & keyframing", "Built a personal project portfolio"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Award"
    },
    {
      year: 2022,
      title: "Freelancing",
      role: "Freelance Video Editor",
      company: "Fiverr",
      description: "Started freelancing on Fiverr, working with clients on diverse projects and applying my skills in real-world scenarios.",
      achievements: ["Completed 30+ freelance projects", "5-star client reviews", "Expanded to DaVinci Resolve & CapCut"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Rocket"
    },
    {
      year: 2023,
      title: "Creative Growth",
      role: "Intermediate Video Editor",
      company: "Personal & Client Projects",
      description: "Continued to grow by taking on more complex projects, experimenting with new tools, and refining my creative process.",
      achievements: ["Worked on brand videos", "Mastered speed ramping & masking", "Built a strong client base"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Trophy"
    }
  ];

  const activeData = timelineData.find(item => item.year === activeYear);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Timeline" size={16} />
            <span>My Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            4 Years of Creative Revolution
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a curious beginner to a confident freelancer, my journey has been shaped by hands-on work in clubs and societies, online learning on Udemy, and real-world experience freelancing on Fiverr.
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