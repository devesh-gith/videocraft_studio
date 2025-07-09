import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetricsCounter = () => {
  const [metrics, setMetrics] = useState({
    projectsCompleted: 0,
    hoursEdited: 0,
    clientSatisfaction: 0,
    awardsWon: 0
  });

  const finalMetrics = {
    projectsCompleted: 150,
    hoursEdited: 2500,
    clientSatisfaction: 98,
    awardsWon: 12
  };

  const metricsData = [
    {
      key: 'projectsCompleted',
      label: 'Projects Completed',
      icon: 'CheckCircle',
      suffix: '+',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      key: 'hoursEdited',
      label: 'Hours of Footage Edited',
      icon: 'Clock',
      suffix: '+',
      color: 'text-conversion',
      bgColor: 'bg-conversion/10'
    },
    {
      key: 'clientSatisfaction',
      label: 'Client Satisfaction',
      icon: 'Heart',
      suffix: '%',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      key: 'awardsWon',
      label: 'Industry Awards',
      icon: 'Award',
      suffix: '+',
      color: 'text-trust',
      bgColor: 'bg-trust/10'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setMetrics({
          projectsCompleted: Math.floor(finalMetrics.projectsCompleted * progress),
          hoursEdited: Math.floor(finalMetrics.hoursEdited * progress),
          clientSatisfaction: Math.floor(finalMetrics.clientSatisfaction * progress),
          awardsWon: Math.floor(finalMetrics.awardsWon * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setMetrics(finalMetrics);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Impact by Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics showcasing our commitment to excellence and client success
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metricsData.map((metric) => (
            <div
              key={metric.key}
              className="relative bg-card rounded-xl p-8 cinematic-shadow hover:scale-105 smooth-transition group"
            >
              {/* Background Icon */}
              <div className={`absolute top-4 right-4 w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 smooth-transition`}>
                <Icon name={metric.icon} size={24} className={metric.color} />
              </div>

              {/* Metric Value */}
              <div className="mb-4">
                <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2 font-headline`}>
                  {metrics[metric.key].toLocaleString()}{metric.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted/30 rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full smooth-transition ${metric.color.replace('text-', 'bg-')}`}
                  style={{
                    width: `${(metrics[metric.key] / finalMetrics[metric.key]) * 100}%`
                  }}
                />
              </div>

              {/* Live Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-conversion rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground font-medium">LIVE UPDATE</span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 smooth-transition" />
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="bg-gradient-to-r from-card to-muted/20 rounded-xl p-8 cinematic-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Years of Experience */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Calendar" size={32} className="text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">8+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Response Time */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Zap" size={32} className="text-conversion" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">&lt;24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Globe" size={32} className="text-trust" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">25+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Updates Notice */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Metrics updated in real-time • Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetricsCounter;