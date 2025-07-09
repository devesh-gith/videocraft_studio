import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedPost = ({ post }) => {
  return (
    <div className="bg-gradient-to-br from-card to-surface border border-border rounded-2xl overflow-hidden cinematic-shadow mb-12">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 cinematic-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-accent/90 hover:bg-accent rounded-full flex items-center justify-center group smooth-transition">
              <Icon name="Play" size={24} color="#1A1A1A" className="ml-1 group-hover:scale-110 smooth-transition" />
            </button>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-conversion/90 text-conversion-foreground px-3 py-1 rounded-full text-sm font-medium">
              <Icon name="Star" size={14} />
              <span>Featured</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Category & Date */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2 text-accent">
              <Icon name={post.category.icon} size={16} />
              <span className="text-sm font-medium">{post.category.name}</span>
            </div>
            <div className="text-text-secondary text-sm">
              {post.publishDate}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-text-secondary mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Stats */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-foreground">{post.author.name}</div>
                <div className="text-xs text-text-secondary">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-text-secondary text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={14} />
                <span>{post.views}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              Read Full Article
            </Button>
            <Button
              variant="ghost"
              iconName="Bookmark"
              iconPosition="left"
              iconSize={16}
            >
              Save for Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;