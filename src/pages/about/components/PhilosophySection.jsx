import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      title: "Story First, Technology Second",
      description: "Every technical decision serves the narrative. The most advanced tools mean nothing without a compelling story to tell.",
      icon: "BookOpen",
      example: "A simple cut at the right moment can be more powerful than the most complex visual effect."
    },
    {
      title: "Emotion Drives Engagement",
      description: "People don't remember facts, they remember how you made them feel. Every edit is crafted to evoke the intended emotional response.",
      icon: "Heart",
      example: "Strategic pacing and music choices can transform a product demo into an inspiring journey."
    },
    {
      title: "Authenticity Over Perfection",
      description: "Real moments resonate more than polished facades. I preserve the human elements that make stories relatable and memorable.",
      icon: "Users",
      example: "Sometimes the best take isn't the most technically perfect, but the most emotionally honest."
    },
    {
      title: "Collaboration Creates Magic",
      description: "The best results come from true partnership. Your vision combined with my expertise creates something neither could achieve alone.",
      icon: "Handshake",
      example: "Client feedback often reveals story angles I hadn't considered, making the final product stronger."
    }
  ];

  const successStories = [
    {
      client: "TechStart Solutions",
      challenge: "Boring product demo wasn\'t converting leads",
      solution: "Transformed it into a customer success story with emotional arc",
      result: "300% increase in demo-to-trial conversion",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "Local Restaurant Chain",
      challenge: "Generic food videos weren\'t driving foot traffic",
      solution: "Created story-driven content showcasing family traditions",
      result: "45% increase in weekend reservations",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "Non-Profit Organization",
      challenge: "Struggling to communicate impact to donors",
      solution: "Focused on individual beneficiary stories with authentic interviews",
      result: "Doubled annual fundraising goal",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={16} />
            <span>My Philosophy</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            The Art of Visual Storytelling
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My approach to video editing is rooted in fundamental principles that transform ordinary footage into extraordinary stories that connect, inspire, and drive action.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {philosophyPrinciples.map((principle, index) => (
            <div key={index} className="bg-card rounded-xl p-8 cinematic-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={principle.icon} size={24} color="var(--color-accent)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-sm text-foreground italic">
                      "{principle.example}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy in Action */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">
              Philosophy in Action
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real examples of how these principles translate into measurable client success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden cinematic-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={story.image}
                    alt={`${story.client} success story`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {story.client}
                  </h4>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-medium text-accent">Challenge:</span>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-accent">Solution:</span>
                      <p className="text-sm text-muted-foreground">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 rounded-lg p-3 border-l-4 border-success">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                      <span className="text-sm font-medium text-success">Result:</span>
                    </div>
                    <p className="text-sm text-foreground font-semibold mt-1">
                      {story.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Beliefs */}
        <div className="bg-card rounded-2xl p-8 md:p-12 cinematic-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">
              What I Believe
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core beliefs guide every project and client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Every brand has a unique story</strong> waiting to be discovered and told in a way that resonates with their specific audience.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Quality is non-negotiable</strong> - whether it's a 30-second social media clip or a feature-length documentary.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Deadlines are promises</strong> that must be kept to maintain trust and enable client success.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Continuous learning is essential</strong> in an industry that evolves as rapidly as video technology and audience preferences.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Transparency builds trust</strong> - clients should always know what to expect and when to expect it.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Great work speaks for itself</strong> but great relationships create lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;