import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BlogHero from './components/BlogHero';
import CategoryFilter from './components/CategoryFilter';
import FeaturedPost from './components/FeaturedPost';
import BlogCard from './components/BlogCard';
import NewsletterSubscription from './components/NewsletterSubscription';
import TrendingTopics from './components/TrendingTopics';
import RecentComments from './components/RecentComments';
import PopularPosts from './components/PopularPosts';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Posts', icon: 'Grid3X3', count: 47 },
    { id: 'techniques', name: 'Editing Techniques', icon: 'Scissors', count: 15 },
    { id: 'trends', name: 'Industry Trends', icon: 'TrendingUp', count: 12 },
    { id: 'success-stories', name: 'Success Stories', icon: 'Award', count: 8 },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: 'Eye', count: 7 },
    { id: 'tutorials', name: 'Video Tutorials', icon: 'Play', count: 5 }
  ];

  // Mock data for featured post
  const featuredPost = {
    id: 'featured-1',
    title: "The Future of AI in Video Editing: Revolutionary Tools That Are Changing Everything",
    excerpt: `Discover how artificial intelligence is transforming the video editing landscape with cutting-edge tools that automate complex tasks, enhance creativity, and streamline workflows. From automated color correction to intelligent scene detection, explore the technologies that are reshaping our industry.`,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    category: { name: 'Industry Trends', icon: 'TrendingUp' },
    author: {
      name: "Alex Rivera",
      role: "Senior Video Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    publishDate: "July 8, 2025",
    readTime: "12 min read",
    views: "8.5K views",
    likes: 234,
    comments: 45,
    slug: "future-ai-video-editing"
  };

  // Mock data for blog posts
  const allPosts = [
    {
      id: 1,
      title: "Mastering Color Grading: From Basic Corrections to Cinematic Looks",
      excerpt: "Learn professional color grading techniques that transform ordinary footage into visually stunning content. This comprehensive guide covers everything from basic color correction to advanced cinematic grading workflows.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop",
      category: { name: 'Editing Techniques', icon: 'Palette' },
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a1e3d3?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "July 6, 2025",
      readTime: "15 min read",
      views: "12.3K",
      likes: 189,
      comments: 32,
      tags: ["Color Grading", "Techniques", "Cinematic"],
      hasVideo: true,
      slug: "mastering-color-grading",
      categoryId: 'techniques'
    },
    {
      id: 2,
      title: "Building a Sustainable Video Production Business: Lessons from 5 Years",
      excerpt: "Insights and strategies for creating a thriving video production business. From client acquisition to pricing strategies, discover what it takes to build a sustainable creative enterprise.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: { name: 'Success Stories', icon: 'Award' },
      author: {
        name: "Michael Torres",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "July 4, 2025",
      readTime: "10 min read",
      views: "9.8K",
      likes: 156,
      comments: 28,
      tags: ["Business", "Entrepreneurship", "Success"],
      hasVideo: false,
      slug: "sustainable-video-business",
      categoryId: 'success-stories'
    },
    {
      id: 3,
      title: "Motion Graphics Trends That Will Define 2025",
      excerpt: "Explore the latest motion graphics trends shaping the industry. From kinetic typography to 3D integration, discover what's driving visual innovation in video content.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      category: { name: 'Industry Trends', icon: 'TrendingUp' },
      author: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "July 2, 2025",
      readTime: "8 min read",
      views: "7.2K",
      likes: 134,
      comments: 19,
      tags: ["Motion Graphics", "Trends", "Design"],
      hasVideo: true,
      slug: "motion-graphics-trends-2025",
      categoryId: 'trends'
    },
    {
      id: 4,
      title: "Behind the Scenes: Creating a Viral Brand Commercial",
      excerpt: "Take an exclusive look at the creative process behind a commercial that generated over 2 million views. From concept development to final delivery, see how great ideas come to life.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      category: { name: 'Behind the Scenes', icon: 'Eye' },
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "June 30, 2025",
      readTime: "12 min read",
      views: "11.5K",
      likes: 203,
      comments: 41,
      tags: ["Behind the Scenes", "Commercial", "Case Study"],
      hasVideo: true,
      slug: "viral-brand-commercial-bts",
      categoryId: 'behind-scenes'
    },
    {
      id: 5,
      title: "Essential Keyboard Shortcuts Every Video Editor Should Know",
      excerpt: "Boost your editing efficiency with these essential keyboard shortcuts. Master the most important hotkeys for popular editing software and dramatically speed up your workflow.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=250&fit=crop",
      category: { name: 'Video Tutorials', icon: 'Play' },
      author: {
        name: "Lisa Park",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a1e3d3?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "June 28, 2025",
      readTime: "6 min read",
      views: "15.7K",
      likes: 287,
      comments: 52,
      tags: ["Shortcuts", "Productivity", "Tutorial"],
      hasVideo: true,
      slug: "essential-keyboard-shortcuts",
      categoryId: 'tutorials'
    },
    {
      id: 6,
      title: "The Psychology of Visual Storytelling in Video Content",
      excerpt: "Understand how psychological principles can enhance your video storytelling. Learn to create more engaging content that resonates with audiences on an emotional level.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      category: { name: 'Industry Trends', icon: 'TrendingUp' },
      author: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "June 26, 2025",
      readTime: "11 min read",
      views: "8.9K",
      likes: 167,
      comments: 33,
      tags: ["Psychology", "Storytelling", "Content"],
      hasVideo: false,
      slug: "psychology-visual-storytelling",
      categoryId: 'trends'
    },
    {
      id: 7,
      title: "Client Communication: Setting Expectations for Video Projects",
      excerpt: "Master the art of client communication in video production. Learn proven strategies for setting clear expectations, managing revisions, and delivering exceptional client experiences.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
      category: { name: 'Success Stories', icon: 'Award' },
      author: {
        name: "Rachel Green",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "June 24, 2025",
      readTime: "9 min read",
      views: "6.4K",
      likes: 142,
      comments: 25,
      tags: ["Client Relations", "Communication", "Business"],
      hasVideo: false,
      slug: "client-communication-expectations",
      categoryId: 'success-stories'
    },
    {
      id: 8,
      title: "Advanced Audio Editing Techniques for Video Professionals",
      excerpt: "Elevate your video projects with professional audio editing techniques. From noise reduction to creative sound design, master the audio skills that separate pros from amateurs.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop",
      category: { name: 'Editing Techniques', icon: 'Volume2' },
      author: {
        name: "Tom Anderson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      publishDate: "June 22, 2025",
      readTime: "14 min read",
      views: "10.2K",
      likes: 198,
      comments: 37,
      tags: ["Audio", "Sound Design", "Techniques"],
      hasVideo: true,
      slug: "advanced-audio-editing",
      categoryId: 'techniques'
    }
  ];

  // Filter posts based on category and search term
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog - VideoCraft Studio | Video Editing Insights & Tutorials</title>
        <meta name="description" content="Discover expert video editing insights, tutorials, and industry trends from VideoCraft Studio. Learn professional techniques and stay updated with the latest in visual storytelling." />
        <meta name="keywords" content="video editing blog, editing tutorials, video production tips, color grading, motion graphics, video marketing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <BlogHero />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Real Video Editing Blogs from the Web */}
          <div className="mb-12">
            <h2 className="text-2xl font-headline font-bold text-accent mb-4">Top Video Editing Blogs on the Web</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://www.motionedits.com/whats-next-for-video-editing-top-trends-for-2025/" target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-xl p-6 hover:border-accent/50 smooth-transition">
                <div className="font-semibold text-lg text-foreground mb-2">What’s Next for Video Editing? Top Trends for 2025</div>
                <div className="text-sm text-muted-foreground mb-2">Motion Edits Blog</div>
                <p className="text-text-secondary text-sm mb-2">Explore the latest trends in video editing for 2025, including AI-powered editing, VR/AR, 8K video, and more. Stay ahead with insights from industry experts.</p>
                <span className="text-accent text-xs font-medium">Read on motionedits.com →</span>
              </a>
              <a href="https://lwks.com/blog/the-future-of-video-editing-trends-and-predictions" target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-xl p-6 hover:border-accent/50 smooth-transition">
                <div className="font-semibold text-lg text-foreground mb-2">The Future of Video Editing: Trends and Predictions</div>
                <div className="text-sm text-muted-foreground mb-2">Lightworks Blog</div>
                <p className="text-text-secondary text-sm mb-2">A deep dive into how AI, VR/AR, cloud editing, and more are shaping the future of video editing. Essential reading for editors and creators.</p>
                <span className="text-accent text-xs font-medium">Read on lwks.com →</span>
              </a>
              <a href="https://project-aeon.com/blogs/revolutionizing-video-editing-how-ai-is-transforming-the-landscape" target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-xl p-6 hover:border-accent/50 smooth-transition">
                <div className="font-semibold text-lg text-foreground mb-2">How AI is Revolutionizing Video Editing</div>
                <div className="text-sm text-muted-foreground mb-2">Project Aeon Blog</div>
                <p className="text-text-secondary text-sm mb-2">Discover how AI is transforming video editing workflows, from automated enhancements to AI avatars and synthetic video creation.</p>
                <span className="text-accent text-xs font-medium">Read on project-aeon.com →</span>
              </a>
              <a href="https://editorsbro.com/blog/best-9-tools-for-video-editing-in-2025" target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-xl p-6 hover:border-accent/50 smooth-transition">
                <div className="font-semibold text-lg text-foreground mb-2">Best 9 Tools for Video Editing in 2025</div>
                <div className="text-sm text-muted-foreground mb-2">EditorsBro Blog</div>
                <p className="text-text-secondary text-sm mb-2">A curated list of the top video editing tools for 2025, including Adobe Premiere Pro, DaVinci Resolve, CapCut, and more. Perfect for editors of all levels.</p>
                <span className="text-accent text-xs font-medium">Read on editorsbro.com →</span>
              </a>
            </div>
          </div>

          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                {searchTerm ? `Search Results for "${searchTerm}"` : 
                 activeCategory === 'all' ? 'Latest Articles' : 
                 categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-text-secondary">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">Sort by:</span>
              <select className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Latest</option>
                <option>Most Popular</option>
                <option>Most Commented</option>
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                iconName="ChevronLeft"
                iconPosition="left"
                iconSize={16}
              >
                Previous
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium smooth-transition ${
                      currentPage === page
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                iconName="ChevronRight"
                iconPosition="right"
                iconSize={16}
              >
                Next
              </Button>
            </div>
          )}
        </main>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-accent/10 to-conversion/10 py-16">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
              Ready to Transform Your Video Content?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Let's discuss how professional video editing can elevate your brand and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact#consultation-booking">
                <Button
                  variant="default"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                iconName="Play"
                iconPosition="left"
                iconSize={16}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;