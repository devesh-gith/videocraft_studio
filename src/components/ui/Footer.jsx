import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Corporate Videos', href: '/services#corporate' },
      { name: 'Social Media Content', href: '/services#social' },
      { name: 'Brand Storytelling', href: '/services#brand' },
      { name: 'Training Videos', href: '/services#training' },
      { name: 'Promotional Content', href: '/services#promotional' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Our Process', href: '/services#process' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'FAQ', href: '/contact#faq' },
      { name: 'Consultation', href: '/contact#consultation-booking' },
      { name: 'Project Brief', href: '/contact#project-brief' },
      { name: 'Pricing Guide', href: '/services#pricing' },
      { name: 'Support', href: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/@videocraftstudio' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/videocraftstudio' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/videocraftstudio' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/videocraftstudio' }
  ];

  return (
    <footer className="bg-primary border-t border-border">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-conversion rounded-xl flex items-center justify-center">
                  <Icon name="Video" size={28} className="text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-foreground">VideoCraft</h3>
                  <p className="text-xs text-muted-foreground font-medium tracking-wider">STUDIO</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Crafting compelling video content that captivates audiences and drives results. 
                Your story, expertly told with passion and precision.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <a 
                    href="mailto:ujjwalchoudhary994@gmail.com"
                    className="text-sm text-foreground hover:text-accent smooth-transition"
                  >
                    ujjwalchoudhary994@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <a 
                    href="tel:+918887967394"
                    className="text-sm text-foreground hover:text-accent smooth-transition"
                  >
                    +91 8887967394
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} className="text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Tulip Lemon, Sector-69, Gurugram, Haryana
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-accent hover:text-background smooth-transition"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-6 text-lg">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-6 text-lg">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-6 text-lg">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} VideoCraft Studio.</span>
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Icon name="Heart" size={14} className="text-error" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 