import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentComments = () => {
  const recentComments = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a1e3d3?w=150&h=150&fit=crop&crop=face"
      },
      comment: "This tutorial completely changed my approach to color grading. The before/after examples were incredibly helpful!",
      article: "Advanced Color Grading Techniques",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Mike Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      comment: "Great insights on client communication. I\'ve started implementing these strategies and already seeing better results.",
      article: "Managing Client Expectations",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      comment: "The workflow optimization tips saved me hours each week. Thank you for sharing your expertise!",
      article: "Streamlining Your Edit Process",
      timeAgo: "1 day ago"
    },
    {
      id: 4,
      author: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      comment: "Love the behind-the-scenes content. It\'s inspiring to see the creative process in action.",
      article: "Behind the Scenes: Commercial Edit",
      timeAgo: "2 days ago"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="MessageCircle" size={20} className="text-accent" />
        <h3 className="text-lg font-headline font-semibold text-foreground">
          Recent Comments
        </h3>
      </div>

      <div className="space-y-6">
        {recentComments.map((comment) => (
          <div key={comment.id} className="group">
            <div className="flex space-x-3">
              <Image
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-foreground text-sm">
                    {comment.author.name}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {comment.timeAgo}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-2">
                  {comment.comment}
                </p>
                
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={12} className="text-accent" />
                  <span className="text-xs text-accent hover:underline cursor-pointer">
                    {comment.article}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-accent hover:text-accent/80 font-medium smooth-transition">
          View All Comments
        </button>
      </div>
    </div>
  );
};

export default RecentComments;