'use client';

import Image from 'next/image';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaInstagram,
} from 'react-icons/fa';
import siteData from '@/data/site.json';

const Footer = () => {
  const { site, social, navigation } = siteData;

  const socialIcons = {
    github: FaGithub,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
  };

  return (
    <footer className='bg-background border-t border-border'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Brand Section */}
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <Image
                src={site.logo}
                alt={site.name}
                width={40}
                height={40}
                className='h-10 w-auto rounded-full'
              />
              <span className='text-foreground font-bold text-xl'>
                {site.name}
              </span>
            </div>
            <p className='text-muted-foreground mb-6 max-w-xs'>
              {site.description}
            </p>
            <div className='flex items-center space-x-4'>
              {Object.entries(social).map(([platform, url]) => {
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

          {/* Quick Links */}
          <div>
            <h3 className='text-foreground font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-border'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <p className='text-muted-foreground text-sm mb-4 md:mb-0'>
              © 2025 {site.name}. All rights reserved.
            </p>
            <div className='flex items-center text-muted-foreground text-sm'>
              <span>Made with</span>
              <FaHeart className='mx-2 h-4 w-4 text-destructive' />
              <span>by the {site.name} community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
