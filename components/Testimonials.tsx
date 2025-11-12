'use client';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import siteData from '@/data/site.json';

const Testimonials = () => {
  const { testimonials } = siteData;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from developers who have grown their careers with our community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              {/* Quote Icon */}
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-warning" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-1 mr-4">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to start your journey?</p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl h-14">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;