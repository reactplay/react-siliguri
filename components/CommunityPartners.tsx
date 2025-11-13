'use client';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import siteData from '@/data/site.json';

const CommunityPartners = () => {
  const { communityPartners } = siteData;

  return (
    <section id='partners' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Community Partners
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Organizations and communities we collaborate with to strengthen the tech ecosystem
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {communityPartners.map((partner) => (
            <div
              key={partner.id}
              className='bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group shadow-sm dark:border-border/20 dark:hover:border-primary/50'
            >
              <div className='flex flex-col items-center space-y-6'>
                {/* Partner Logo */}
                <div className='relative w-20 h-20 flex-shrink-0'>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className='object-contain rounded-lg'
                    sizes='(max-width: 768px) 80px, 80px'
                  />
                </div>

                {/* Partner Info */}
                <div className='space-y-3 flex-1'>
                  <h3 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors'>
                    {partner.name}
                  </h3>
                </div>

                {/* View Details Button */}
                <Button
                  asChild
                  className='bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 w-full sm:w-auto'
                >
                  <a
                    href={partner.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2'
                  >
                    View Details
                    <FaExternalLinkAlt className='h-4 w-4' />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;