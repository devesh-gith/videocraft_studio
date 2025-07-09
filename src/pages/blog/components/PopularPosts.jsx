import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PopularPosts = () => {
  const popularPosts = [
    {
      id: 1,
      title: "10 Essential Video Editing Shortcuts That Will Save You Hours",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      views: "15.2K",
      readTime: "8 min",
      category: "Techniques"
    },
    {
      id: 2,
      title: "Color Grading Like a Pro: Advanced Techniques for Cinematic Look",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop",
      views: "12.8K",
      readTime: "12 min",
      category: "Color Grading"
    },
    {
      id: 3,
      title: "Building Long-Term Client Relationships in Video Production",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      views: "9.5K",
      readTime: "6 min",
      category: "Business"
    },
    {
      id: 4,
      title: "Motion Graphics Trends That Will Dominate 2024",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      views: "8.3K",
      readTime: "10 min",
      category: "Trends"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Flame" size={20} className="text-conversion" />
        <h3 className="text-lg font-headline font-semibold text-foreground">
          Popular This Week
        </h3>
      </div>

      <div className="space-y-4">
        {popularPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="flex space-x-3 p-3 rounded-lg hover:bg-muted/50 smooth-transition group"
          >
            <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
              />
              <div className="absolute top-1 left-1 w-5 h-5 bg-conversion/90 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-conversion-foreground">
                  {index + 1}
                </span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-sm leading-tight mb-2 group-hover:text-accent smooth-transition line-clamp-2">
                {post.title}
              </h4>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span className="bg-muted px-2 py-1 rounded">
                  {post.category}
                </span>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={12} />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-accent hover:text-accent/80 font-medium smooth-transition">
          View All Popular Posts
        </button>
      </div>
    </div>
  );
};

export default PopularPosts;