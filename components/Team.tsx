'use client';

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import siteData from '@/data/site.json';
import Image from 'next/image';

const Team = () => {
  const { team } = siteData;

  const socialIcons = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
  };

  return (
    <section id='team' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Core Team Section */}
        <div className='mb-20'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Core Team
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Meet the passionate individuals who drive our community forward
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {team.map((member) => (
              <div
                key={member.id}
                className='bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group shadow-sm dark:border-border/20 dark:hover:border-primary/50'
              >
                {/* Avatar */}
                <div className='relative mb-6'>
                  <div className='w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1'>
                    <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold text-white'>
                      <Image
                        loading='lazy'
                        height={300}
                        width={300}
                        src={member?.avatar}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  {member.name}
                </h3>

                {/* Social Links */}
                <div className='flex items-center justify-center space-x-3'>
                  {Object.entries(member.social).map(([platform, url]) => {
                    const IconComponent =
                      socialIcons[platform as keyof typeof socialIcons];
                    return IconComponent ? (
                      <a
                        key={platform}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-full'
                      >
                        <IconComponent className='h-5 w-5' />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributors Section */}
        {/* <div id='contributors'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Contributors
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Amazing community members who help make events successful
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {contributors.map((contributor) => (
              <div
                key={contributor.id}
                className='bg-card backdrop-blur-sm border border-border rounded-2xl p-4 text-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group shadow-sm'
              >
                <div className='relative mb-4'>
                  <div className='w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500 to-teal-600 p-1'>
                    <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-white'>
                      {contributor.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>
                  <div className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold'>
                    {contributor.contributions}
                  </div>
                </div>

                <h3 className='text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                  {contributor.name}
                </h3>
                <p className='text-xs text-muted-foreground'>
                  {contributor.contributions} contributions
                </p>
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <button className='text-primary hover:text-primary/80 font-medium'>
              View all contributors →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
