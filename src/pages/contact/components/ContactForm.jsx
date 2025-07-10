import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    referenceFiles: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: 'corporate', label: 'Corporate Video' },
    { value: 'social-media', label: 'Social Media Content' },
    { value: 'brand-story', label: 'Brand Storytelling' },
    { value: 'training', label: 'Training & Educational' },
    { value: 'event', label: 'Event Coverage' },
    { value: 'product', label: 'Product Showcase' },
    { value: 'testimonial', label: 'Client Testimonials' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '₹5,000 - ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-100k', label: '₹50,000 - ₹100,000' },
    { value: '100k+', label: '₹100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'ASAP (Rush Job)' },
    { value: '1-2weeks', label: '1-2 Weeks' },
    { value: '3-4weeks', label: '3-4 Weeks' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3months+', label: '3+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setFormData(prev => ({
      ...prev,
      referenceFiles: files
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Project description is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Instead of API call, open mailto link
    const subject = encodeURIComponent('New Project Brief from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:ujjwalchoudhary994@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Project Brief Builder
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us about your vision, and we'll craft a tailored proposal that brings your story to life.
          </p>
        </div>

        <div className="bg-card rounded-2xl cinematic-shadow p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Company/Organization"
                name="company"
                type="text"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleInputChange}
              />
              
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Project Details */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                Project Details
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Select
                  label="Project Type"
                  placeholder="Select project type"
                  options={projectTypes}
                  value={formData.projectType}
                  onChange={(value) => handleSelectChange('projectType', value)}
                  error={errors.projectType}
                  required
                />
                
                <Select
                  label="Budget Range"
                  placeholder="Select budget range"
                  options={budgetRanges}
                  value={formData.budget}
                  onChange={(value) => handleSelectChange('budget', value)}
                />
              </div>

              <div className="mb-6">
                <Select
                  label="Timeline"
                  placeholder="When do you need this completed?"
                  options={timelineOptions}
                  value={formData.timeline}
                  onChange={(value) => handleSelectChange('timeline', value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Describe your project vision, target audience, key messages, and any specific requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-error">{errors.message}</p>
                )}
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Reference Materials (Optional)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent smooth-transition">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Icon name="Upload" size={32} className="mx-auto text-text-secondary mb-2" />
                    <p className="text-text-secondary mb-1">
                      Drop files here or click to upload
                    </p>
                    <p className="text-xs text-text-secondary">
                      PDF, DOC, Images, Videos (Max 50MB each)
                    </p>
                  </label>
                  {formData.referenceFiles && (
                    <div className="mt-4 text-sm text-accent">
                      {formData.referenceFiles.length} file(s) selected
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border">
              <div className="text-sm text-text-secondary mb-4 sm:mb-0">
                <Icon name="Shield" size={16} className="inline mr-2" />
                Your information is secure and confidential
              </div>
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8"
                iconName="Send"
                iconPosition="right"
                iconSize={18}
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Brief'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;