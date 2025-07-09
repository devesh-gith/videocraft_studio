import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentRecognition = () => {
  const [activeAward, setActiveAward] = useState(0);

  const awards = [
    {
      id: 1,
      title: "Best Video Editor 2024",
      organization: "Creative Industry Awards",
      year: "2024",
      category: "Professional Excellence",
      description: "Recognized for outstanding creativity and technical expertise in video editing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      badge: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=100&h=100&fit=crop",
      isNew: true
    },
    {
      id: 2,
      title: "Innovation in Storytelling",
      organization: "Digital Media Excellence",
      year: "2024",
      category: "Creative Innovation",
      description: "Awarded for revolutionary approach to visual narrative and client engagement",
      image: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=300&fit=crop",
      badge: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      isNew: true
    },
    {
      id: 3,
      title: "Client Choice Award",
      organization: "Business Excellence Network",
      year: "2023",
      category: "Customer Satisfaction",
      description: "Voted by clients for exceptional service delivery and project outcomes",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=400&h=300&fit=crop",
      badge: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg?w=100&h=100&fit=crop",
      isNew: false
    },
    {
      id: 4,
      title: "Technical Excellence Award",
      organization: "Video Production Guild",
      year: "2023",
      category: "Technical Achievement",
      description: "Honored for mastery of cutting-edge editing techniques and workflow optimization",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      badge: "https://images.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg?w=100&h=100&fit=crop",
      isNew: false
    }
  ];

  const certifications = [
    {
      name: "Adobe Certified Expert",
      issuer: "Adobe Systems",
      year: "2024",
      icon: "Award",
      color: "text-accent"
    },
    {
      name: "Final Cut Pro Certified",
      issuer: "Apple Inc.",
      year: "2023",
      icon: "CheckCircle",
      color: "text-success"
    },
    {
      name: "DaVinci Resolve Certified",
      issuer: "Blackmagic Design",
      year: "2023",
      icon: "Star",
      color: "text-conversion"
    },
    {
      name: "Motion Graphics Specialist",
      issuer: "After Effects Academy",
      year: "2024",
      icon: "Zap",
      color: "text-trust"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Recent Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry awards and certifications that validate our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Award */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl overflow-hidden cinematic-shadow">
              {/* Award Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={awards[activeAward].image}
                  alt={awards[activeAward].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Award Badge Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                    <Image
                      src={awards[activeAward].badge}
                      alt="Award badge"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* New Badge */}
                {awards[activeAward].isNew && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-conversion text-conversion-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Award Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                      {awards[activeAward].title}
                    </h3>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="Building" size={16} />
                        <span>{awards[activeAward].organization}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={16} />
                        <span>{awards[activeAward].year}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {awards[activeAward].category}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {awards[activeAward].description}
                </p>

                {/* Award Navigation */}
                <div className="flex items-center space-x-2">
                  {awards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveAward(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeAward === index
                          ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Awards List */}
          <div className="space-y-8">
            {/* Professional Certifications */}
            <div className="bg-card rounded-xl p-6 cinematic-shadow">
              <h3 className="text-xl font-headline font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Award" size={24} className="text-accent" />
                <span>Certifications</span>
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 smooth-transition">
                    <div className={`w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center`}>
                      <Icon name={cert.icon} size={20} className={cert.color} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Summary */}
            <div className="bg-card rounded-xl p-6 cinematic-shadow">
              <h3 className="text-xl font-headline font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Trophy" size={24} className="text-conversion" />
                <span>Awards Summary</span>
              </h3>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <button
                    key={award.id}
                    onClick={() => setActiveAward(index)}
                    className={`w-full text-left p-3 rounded-lg smooth-transition ${
                      activeAward === index
                        ? 'bg-accent/10 border-l-4 border-accent' :'hover:bg-muted/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground text-sm">{award.title}</div>
                        <div className="text-xs text-muted-foreground">{award.year}</div>
                      </div>
                      
                      {award.isNew && (
                        <div className="w-2 h-2 bg-conversion rounded-full animate-pulse" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Memberships */}
            <div className="bg-card rounded-xl p-6 cinematic-shadow">
              <h3 className="text-xl font-headline font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Users" size={24} className="text-trust" />
                <span>Memberships</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Video Production Guild</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Creative Industry Association</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Digital Media Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="mt-16 bg-gradient-to-r from-accent/5 to-conversion/5 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-conversion mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-success mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Professional Memberships</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-trust mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentRecognition;