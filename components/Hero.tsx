'use client';

import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
import siteData from '@/data/site.json';

const Hero = () => {
  const { hero } = siteData;

  return (
    <section id='home' className='relative min-h-screen bg-background'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-30'>
        <div className='h-full w-full bg-linear-to-br from-primary/5 via-accent/5 to-primary/5'></div>
      </div>

      <div className='relative container mx-auto px-6 pt-32 pb-20'>
        <div className='max-w-4xl'>
          {/* Badge */}
          <div className='mb-6'>
            <span className='inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20'>
              <span className='w-2 h-2 bg-primary rounded-full mr-2 animate-pulse'></span>
              Community • Events • Learning
            </span>
          </div>

          {/* Main Heading */}
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight'>
            {hero.title}
          </h1>

          {/* Subtitle */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight'>
            <span className='text-primary'>Build.</span>{' '}
            <span className='text-accent'>Learn.</span>{' '}
            <span className='text-info'>Connect.</span>
          </h2>

          {/* Description */}
          <p className='text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed'>
            {hero.description.split(' ').map((word, index) => {
              if (word === 'meetups,') {
                return (
                  <span key={index} className='text-primary font-medium'>
                    meetups,{' '}
                  </span>
                );
              }
              if (word === 'talks,') {
                return (
                  <span key={index} className='text-accent font-medium'>
                    talks,{' '}
                  </span>
                );
              }
              if (word === 'workshops') {
                return (
                  <span key={index} className='text-info font-medium'>
                    workshops{' '}
                  </span>
                );
              }
              return word + ' ';
            })}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mb-16'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium group shadow-lg hover:shadow-xl transition-all h-14 rounded-xl'
            >
              {hero.cta.primary}
              <FaArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
            <a href='#events'>
              <Button
                size='lg'
                variant='outline'
                className='border-border hover:bg-accent hover:text-accent-foreground px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all h-14 rounded-xl'
              >
                {hero.cta.secondary}
              </Button>
            </a>
          </div>

          {/* Stats */}
          {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {hero.stats.map((stat, index) => {
              const IconComponent =
                statsIcons[stat.description as keyof typeof statsIcons];
              return (
                <div key={index} className='text-center md:text-left'>
                  <div className='flex items-center justify-center md:justify-start mb-2'>
                    {IconComponent && (
                      <IconComponent className='h-6 w-6 text-primary mr-2' />
                    )}
                    <span className='text-3xl font-bold text-foreground'>
                      {stat.value}
                    </span>
                  </div>
                  <p className='text-muted-foreground font-medium'>
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center opacity-60'>
          <div className='w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
