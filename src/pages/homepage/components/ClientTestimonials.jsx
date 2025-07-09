import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ClientTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const youtubeVideos = [
    {
      id: 1,
      title: "Brand Showcase",
      videoUrl: "https://www.youtube.com/embed/ONQ1axS9IWQ",
      channelName: "VideoCraft Studio",
      views: "15.2K",
      likes: "1,240",
      comments: "89",
      rating: 4.8,
      publishedDate: "2 weeks ago",
      description: "Complete brand story showcasing innovation and leadership in technology sector"
    },
    {
      id: 2,
      title: "LetsStartDance",
      videoUrl: "https://www.youtube.com/embed/zKpG8D3AK0I",
      channelName: "VideoCraft Studio",
      views: "12.8K",
      likes: "1,156",
      comments: "67",
      rating: 4.9,
      publishedDate: "1 month ago",
      description: "A dance video showcasing the talent of the dancer crew of LetsStartDance."
    },
    {
      id: 3,
      title: "Creative Process Explaination",
      videoUrl: "https://www.youtube.com/embed/3rhZy-lSGIM",
      channelName: "VideoCraft Studio",
      views: "18.5K",
      likes: "1,432",
      comments: "124",
      rating: 4.7,
      publishedDate: "3 weeks ago",
      description: "An educational video telling how to apply for a loan from Solfin."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % youtubeVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our YouTube channel videos and see the real impact of our video storytelling
          </p>
        </div>

        {/* Main Video Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Video Player */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden cinematic-shadow">
              <iframe
                src={youtubeVideos[activeVideo].videoUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={youtubeVideos[activeVideo].title}
              />
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={20} color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {youtubeVideos[activeVideo].channelName}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {youtubeVideos[activeVideo].publishedDate}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{youtubeVideos[activeVideo].views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} className="text-red-500" />
                    <span className="text-muted-foreground">{youtubeVideos[activeVideo].likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Details */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                {youtubeVideos[activeVideo].title}
              </h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={16} 
                      className={i < Math.floor(youtubeVideos[activeVideo].rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-sm font-medium text-foreground ml-2">
                    {youtubeVideos[activeVideo].rating}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{youtubeVideos[activeVideo].views} views</span>
                  <span>{youtubeVideos[activeVideo].likes} likes</span>
                  <span>{youtubeVideos[activeVideo].comments} comments</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Client Feedback</h4>
              <p className="text-muted-foreground leading-relaxed">
                {youtubeVideos[activeVideo].description}
              </p>
            </div>

            {/* Engagement Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">{youtubeVideos[activeVideo].views}</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{youtubeVideos[activeVideo].likes}</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">{youtubeVideos[activeVideo].comments}</div>
                <div className="text-sm text-muted-foreground">Comments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Navigation */}
        <div className="flex items-center justify-center space-x-4">
          {youtubeVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(index)}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                activeVideo === index
                  ? 'bg-accent/20 scale-110' :'bg-muted/50 hover:bg-muted/80'
              }`}
            >
              <div className="w-16 h-12 bg-gray-800 rounded flex items-center justify-center">
                <Icon name="Play" size={20} color="white" />
              </div>
              <div className="text-xs text-muted-foreground mt-1 max-w-16 truncate">
                {video.title.split(' ').slice(0, 3).join(' ')}...
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;