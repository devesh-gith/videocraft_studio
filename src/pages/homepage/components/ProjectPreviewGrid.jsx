import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectPreviewGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Corporate', 'Social Media', 'Brand Stories', 'Training'];

  const projects = [
    {
      id: 1,
      title: "TechCorp Brand Launch",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
      duration: "2:30",
      client: "TechCorp Industries",
      year: "2024",
      description: "Complete brand story showcasing innovation and leadership in technology sector"
    },
    {
      id: 2,
      title: "Fitness Revolution Campaign",
      category: "Social Media",
      thumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/169599296?autoplay=1&loop=1&muted=1",
      duration: "1:45",
      client: "FitLife Studio",
      year: "2024",
      description: "High-energy social media campaign driving membership growth"
    },
    {
      id: 3,
      title: "Artisan Coffee Story",
      category: "Brand Stories",
      thumbnail: "https://images.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/158148793?autoplay=1&loop=1&muted=1",
      duration: "3:15",
      client: "Roasted Perfection",
      year: "2024",
      description: "Authentic storytelling capturing the passion behind artisan coffee crafting"
    },
    {
      id: 4,
      title: "Employee Onboarding Series",
      category: "Training",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
      duration: "4:20",
      client: "Global Solutions Inc",
      year: "2024",
      description: "Comprehensive training series improving employee engagement and retention"
    },
    {
      id: 5,
      title: "Startup Pitch Deck",
      category: "Corporate",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/169599296?autoplay=1&loop=1&muted=1",
      duration: "2:45",
      client: "InnovateTech",
      year: "2024",
      description: "Compelling investor presentation that secured Series A funding"
    },
    {
      id: 6,
      title: "Fashion Week Highlights",
      category: "Social Media",
      thumbnail: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg?w=600&h=400&fit=crop",
      videoPreview: "https://player.vimeo.com/video/158148793?autoplay=1&loop=1&muted=1",
      duration: "1:30",
      client: "Style Collective",
      year: "2024",
      description: "Dynamic fashion content driving social engagement and brand awareness"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our diverse portfolio of video projects that have helped brands tell their stories and achieve their goals
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden cinematic-shadow hover:scale-105 smooth-transition cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Thumbnail/Video */}
              <div className="relative aspect-video overflow-hidden">
                {hoveredProject === project.id ? (
                  <iframe
                    src={project.videoPreview}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={project.title}
                  />
                ) : (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                )}

                {/* Play Overlay */}
                {hoveredProject !== project.id && (
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} color="#1A1A1A" />
                    </div>
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-foreground">{project.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-accent-foreground">{project.category}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-headline font-semibold text-foreground group-hover:text-accent smooth-transition">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-accent opacity-0 group-hover:opacity-100 smooth-transition">
                    <span className="text-sm font-medium">View Project</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link to="/portfolio">
            <button className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 rounded-lg font-semibold text-lg smooth-transition inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreviewGrid;