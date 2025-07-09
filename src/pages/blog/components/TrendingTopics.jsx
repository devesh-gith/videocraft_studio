import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingTopics = () => {
  const trendingTopics = [
    {
      id: 1,
      title: "AI in Video Editing",
      count: 24,
      trend: "up",
      icon: "Zap"
    },
    {
      id: 2,
      title: "Color Grading Techniques",
      count: 18,
      trend: "up",
      icon: "Palette"
    },
    {
      id: 3,
      title: "Motion Graphics",
      count: 15,
      trend: "stable",
      icon: "Move"
    },
    {
      id: 4,
      title: "Client Communication",
      count: 12,
      trend: "up",
      icon: "MessageSquare"
    },
    {
      id: 5,
      title: "Workflow Optimization",
      count: 10,
      trend: "down",
      icon: "Settings"
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return { name: 'TrendingUp', color: 'text-success' };
      case 'down':
        return { name: 'TrendingDown', color: 'text-error' };
      default:
        return { name: 'Minus', color: 'text-text-secondary' };
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="TrendingUp" size={20} className="text-accent" />
        <h3 className="text-lg font-headline font-semibold text-foreground">
          Trending Topics
        </h3>
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic, index) => {
          const trendIcon = getTrendIcon(topic.trend);
          
          return (
            <div
              key={topic.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 smooth-transition cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                  <Icon name={topic.icon} size={16} className="text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground group-hover:text-accent smooth-transition">
                    {topic.title}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {topic.count} articles
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">
                  #{index + 1}
                </span>
                <Icon 
                  name={trendIcon.name} 
                  size={16} 
                  className={trendIcon.color} 
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-accent hover:text-accent/80 font-medium smooth-transition">
          View All Topics
        </button>
      </div>
    </div>
  );
};

export default TrendingTopics;