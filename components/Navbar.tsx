'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaInstagram,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import siteData from '@/data/site.json';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { site, navigation, social } = siteData;
  const router = useRouter();
  const pathname = usePathname();

  const joinCommunity = () => {
    window.open('https://chat.whatsapp.com/BTZ16UTw3zIKWVv877CatW', '_blank');
  };

  const handleNavigation = (href: string) => {
    // If we're not on the home page and the link is a hash link, go to home first
    if (pathname !== '/' && href.startsWith('#')) {
      router.push(`/${href}`);
    } else if (href.startsWith('#')) {
      // If we're on home page, use smooth scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const socialIcons = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  return (
    <nav className='sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <Image
              src={site.logo}
              alt={site.name}
              width={40}
              height={40}
              className='h-10 w-auto rounded-full'
            />
            <span className='text-foreground font-semibold text-lg hidden sm:block'>
              {site.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.active ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons & CTA */}
          <div className='hidden md:flex items-center space-x-4'>
            {/* Social Icons */}
            <div className='flex items-center space-x-3'>
              {Object.entries(social).map(([platform, url]) => {
                const IconComponent =
                  socialIcons[platform as keyof typeof socialIcons];
                return IconComponent ? (
                  <a
                    key={platform}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    <IconComponent className='h-5 w-5' />
                  </a>
                ) : null;
              })}
            </div>

            <div className='w-px h-6 bg-border' />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Button
              onClick={joinCommunity}
              className='bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              Join Whatsapp Group
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent/10'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className='h-6 w-6' />
            ) : (
              <FaBars className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-background/95 backdrop-blur-sm border-t border-border'>
          <div className='container mx-auto px-6 py-4'>
            <div className='flex flex-col space-y-4'>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary text-left ${
                    item.active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className='flex flex-col space-y-4 pt-4 border-t border-border'>
                <div className='flex items-center justify-center space-x-2'>
                  {Object.entries(social).map(([platform, url]) => {
                    const IconComponent =
                      socialIcons[platform as keyof typeof socialIcons];
                    return IconComponent ? (
                      <a
                        key={platform}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/10'
                      >
                        <IconComponent className='h-4 w-4' />
                      </a>
                    ) : null;
                  })}
                  <div className='w-px h-6 bg-border mx-2' />
                  <ThemeToggle />
                </div>

                <Button
                  onClick={joinCommunity}
                  className='bg-primary hover:bg-primary/90 text-primary-foreground w-full'
                >
                  Join Whatsapp Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
