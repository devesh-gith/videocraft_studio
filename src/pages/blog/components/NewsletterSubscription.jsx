import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-accent/10 to-conversion/10 border border-accent/20 rounded-2xl p-8 text-center">
      <div className="max-w-md mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Mail" size={32} className="text-accent" />
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
          Stay in the Creative Loop
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">
          Get weekly insights, exclusive tutorials, and behind-the-scenes content delivered straight to your inbox. Join 10,000+ creative professionals.
        </p>

        {/* Form */}
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center"
            />
            <Button
              type="submit"
              variant="default"
              fullWidth
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="Send"
              iconPosition="right"
              iconSize={16}
            >
              Subscribe Now
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-success">
            <Icon name="CheckCircle" size={20} />
            <span className="font-medium">Successfully subscribed!</span>
          </div>
        )}

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Zap" size={14} className="text-accent" />
            <span>Weekly Tips</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Video" size={14} className="text-conversion" />
            <span>Exclusive Content</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Users" size={14} className="text-trust" />
            <span>Community Access</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Gift" size={14} className="text-success" />
            <span>Free Resources</span>
          </div>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-text-secondary mt-4">
          No spam, unsubscribe anytime. Read our{' '}
          <a href="#" className="text-accent hover:underline">privacy policy</a>.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscription;