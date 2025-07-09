import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 smooth-transition group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 cinematic-transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium">
            <Icon name={post.category.icon} size={12} />
            <span>{post.category.name}</span>
          </div>
        </div>

        {/* Video Indicator */}
        {post.hasVideo && (
          <div className="absolute top-3 right-3">
            <div className="w-8 h-8 bg-accent/90 rounded-full flex items-center justify-center">
              <Icon name="Play" size={14} color="#1A1A1A" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
          <span>{post.publishDate}</span>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{post.views}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-headline font-semibold text-foreground mb-3 leading-tight group-hover:text-accent smooth-transition">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author & Tags */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-text-secondary">{post.author.name}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-text-secondary hover:text-accent smooth-transition">
              <Icon name="Heart" size={14} />
              <span className="text-xs">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-text-secondary hover:text-accent smooth-transition">
              <Icon name="MessageCircle" size={14} />
              <span className="text-xs">{post.comments}</span>
            </button>
          </div>
          
          <button className="flex items-center space-x-1 text-text-secondary hover:text-accent smooth-transition">
            <Icon name="Share2" size={14} />
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;