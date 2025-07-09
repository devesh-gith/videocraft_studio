import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Play' },
    { name: 'Services', path: '/services', icon: 'Settings' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Blog', path: '/blog', icon: 'FileText' },
    { name: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border cinematic-shadow' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link 
          to="/homepage" 
          className="flex items-center space-x-3 group"
          onClick={closeMenu}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-conversion rounded-lg flex items-center justify-center group-hover:scale-105 smooth-transition">
              <Icon name="Video" size={24} color="#1A1A1A" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion rounded-full animate-pulse-glow"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-headline font-bold text-foreground group-hover:text-accent smooth-transition">
              VideoCraft
            </h1>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              STUDIO
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg font-medium smooth-transition group ${
                isActivePath(item.path)
                  ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </span>
              {isActivePath(item.path) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="hidden md:flex bg-conversion hover:bg-conversion/90 text-conversion-foreground"
            iconName="Calendar"
            iconPosition="left"
            iconSize={16}
          >
            Start Project
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 smooth-transition"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="smooth-transition" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border cinematic-shadow transform transition-all duration-400 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' :'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <nav className="px-6 py-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium smooth-transition ${
                isActivePath(item.path)
                  ? 'text-accent bg-accent/10 border-l-2 border-accent' :'text-foreground hover:text-accent hover:bg-accent/5'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.name}</span>
              {isActivePath(item.path) && (
                <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
              )}
            </Link>
          ))}
          
          <div className="pt-4 mt-4 border-t border-border">
            <Button
              variant="default"
              fullWidth
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Start Your Project
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-[-1]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;