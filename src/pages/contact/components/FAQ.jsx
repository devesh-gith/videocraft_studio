import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What\'s included in the free consultation?",
      answer: `During our 30-minute consultation, we'll discuss your project vision, target audience, timeline, and budget. I'll share relevant portfolio examples and provide initial creative direction. You'll receive a detailed proposal within 24 hours with no obligation to proceed.`
    },
    {
      question: "How do you determine project pricing?",
      answer: `Pricing depends on several factors: project complexity, duration, number of revisions, timeline urgency, and deliverable formats. I provide transparent, fixed-price quotes with no hidden fees. Rush jobs (under 2 weeks) include a 25% expedite fee.`
    },
    {
      question: "What\'s your typical project timeline?",
      answer: `Most projects follow this timeline:\n• Initial consultation: Day 1\n• Proposal & contract: Days 2-3\n• Pre-production planning: Days 4-7\n• Production/editing: 1-3 weeks\n• Revisions: 3-5 days\n• Final delivery: 2-4 weeks total\n\nTimelines vary based on project scope and complexity.`
    },
    {
      question: "How many revisions are included?",
      answer: `All projects include 3 rounds of revisions at no additional cost. This covers script changes, editing adjustments, color correction, and audio refinements. Additional revisions are available at ₹12,500/hour. I encourage detailed feedback to maximize your included revisions.`
    },
    {
      question: "What file formats do you deliver?",
      answer: `I deliver in multiple formats optimized for your needs:\n• Web: MP4 (H.264) in various resolutions\n• Social Media: Platform-specific formats and aspect ratios\n• Broadcast: ProRes or DNxHD for professional use\n• Archive: Uncompressed master files\n• Custom formats available upon request`
    },
    {
      question: "Do you work with clients remotely?",
      answer: `Absolutely! 80% of my clients are remote. I use secure file sharing, video conferencing for reviews, and collaborative project management tools. Local clients can visit my studio for in-person meetings, but it's not required for successful project completion.`
    },
    {
      question: "What if I need rush delivery?",
      answer: `Rush projects (under 2 weeks) are possible depending on my current workload. They include a 25% expedite fee and require immediate approval of all materials and feedback. I'll assess feasibility during our consultation and provide realistic timeline expectations.`
    },
    {
      question: "How do you handle project payments?",
      answer: `Payment structure:\n• 50% deposit to begin work\n• 25% at rough cut approval\n• 25% upon final delivery\n\nI accept bank transfers, checks, and major credit cards. Net 15 terms for established clients. All pricing is in INR and includes standard revisions.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get instant answers to common questions about our video production process, pricing, and timelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-card rounded-2xl cinematic-shadow overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 smooth-transition"
              >
                <h3 className="text-lg font-headline font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-secondary flex-shrink-0 smooth-transition"
                />
              </button>
              
              <div className={`overflow-hidden smooth-transition ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 lg:px-8 pb-6">
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-card rounded-2xl cinematic-shadow p-8">
          <Icon name="HelpCircle" size={48} className="mx-auto text-accent mb-4" />
          <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-6">
            Can't find what you're looking for? Let's discuss your specific needs in a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:ujjwalchoudhary994@gmail.com"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 smooth-transition"
            >
              <Icon name="Mail" size={16} />
              <span>ujjwalchoudhary994@gmail.com</span>
            </a>
            <span className="hidden sm:block text-text-secondary">•</span>
            <a 
              href="tel:+918887967394"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 smooth-transition"
            >
              <Icon name="Phone" size={16} />
              <span>+91 8887967394</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;