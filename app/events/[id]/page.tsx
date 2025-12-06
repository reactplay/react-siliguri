'use client';

import { useParams, useRouter } from 'next/navigation';
import siteData from '@/data/site.json';
import Image from 'next/image';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaArrowLeft,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = Number(params.id);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  const event = siteData.events.find((e) => e.id === eventId);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains('dark'));
    };

    checkTheme();

    if (theme === 'system') {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setIsDark(theme === 'dark');
    }
  }, [theme]);

  if (!event) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Event Not Found</h1>
          <Button onClick={() => router.push('/#events')}>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-background'>
        {/* Header with Back Button */}
        <div className='container mx-auto px-6 py-8'>
        <Button
          variant='ghost'
          onClick={() => router.push('/#events')}
          className='mb-6 flex items-center gap-2'
        >
          <FaArrowLeft />
          Back to Events
        </Button>

        <div className='max-w-5xl mx-auto'>
          {/* Event Banner */}
          <div className='relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8'>
            <Image
              src={event.imageUrl || '/placeholder.jpg'}
              alt={event.title}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Event Details Grid */}
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Main Content - Left Side */}
            <div className='md:col-span-2'>
              {/* Title */}
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${textPrimary}`}
              >
                {event.title}
              </h1>

              {/* Status Badge */}
              <div className='mb-6'>
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    event.status === 'upcoming'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-gray-500/20 text-gray-500'
                  }`}
                >
                  {event.status === 'upcoming'
                    ? 'Upcoming Event'
                    : 'Past Event'}
                </span>
              </div>

              {/* Description */}
              <div className='mb-8'>
                <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
                  About This Event
                </h2>
                <p className={`text-lg leading-relaxed ${textSecondary}`}>
                  {event.description}
                </p>
              </div>

              {/* Event Type */}
              <div className='mb-8'>
                <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
                  Event Type
                </h3>
                <p className={`text-lg ${textSecondary}`}>{event.type}</p>
              </div>

              {/* Speakers Section */}
              {event.speakers && event.speakers.length > 0 && (
                <div className='mb-8'>
                  <h2 className={`text-2xl font-bold mb-6 ${textPrimary}`}>
                    Speakers
                  </h2>
                  <div className='space-y-6'>
                    {event.speakers.map((speaker) => (
                      <div
                        key={speaker.id}
                        className='bg-muted/50 dark:bg-muted/30 rounded-xl p-6 hover:shadow-md transition-shadow'
                      >
                        <div className='flex flex-col sm:flex-row gap-6'>
                          {/* Speaker Image */}
                          <div className='flex-shrink-0'>
                            <div className='relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden'>
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className='object-cover'
                              />
                            </div>
                          </div>

                          {/* Speaker Details */}
                          <div className='flex-1'>
                            <h3
                              className={`text-xl font-bold mb-1 ${textPrimary}`}
                            >
                              {speaker.name}
                            </h3>
                            <p className={`text-sm mb-1 ${textSecondary}`}>
                              {speaker.designation}
                              {speaker.company && (
                                <span className={textMuted}>
                                  {' '}
                                  at {speaker.company}
                                </span>
                              )}
                            </p>

                            {/* Session Title */}
                            <div className='mt-3 mb-3'>
                              <p
                                className={`text-sm font-semibold ${textMuted} mb-1`}
                              >
                                Session
                              </p>
                              <p
                                className={`text-base font-semibold ${textPrimary}`}
                              >
                                {speaker.sessionTitle}
                              </p>
                            </div>

                            {/* Social Links */}
                            <div className='flex gap-3'>
                              {speaker.social.github && (
                                <a
                                  href={speaker.social.github}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className={`${textMuted} hover:text-primary transition-colors`}
                                >
                                  <FaGithub className='text-xl' />
                                </a>
                              )}
                              {speaker.social.twitter && (
                                <a
                                  href={speaker.social.twitter}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className={`${textMuted} hover:text-primary transition-colors`}
                                >
                                  <FaTwitter className='text-xl' />
                                </a>
                              )}
                              {speaker.social.linkedin && (
                                <a
                                  href={speaker.social.linkedin}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className={`${textMuted} hover:text-primary transition-colors`}
                                >
                                  <FaLinkedin className='text-xl' />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Event Pictures Section */}
              {event.eventPictures && event.eventPictures.length > 0 && (
                <div className='mb-8'>
                  <h2 className={`text-2xl font-bold mb-6 ${textPrimary}`}>
                    Event Pictures
                  </h2>
                  <div className='space-y-6'>
                    {event.eventPictures.map((picture, index) => (
                      <div
                        key={index}
                        className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow'
                      >
                        <Image
                          src={picture}
                          alt={`Event picture ${index + 1}`}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Right Side */}
            <div className='md:col-span-1'>
              <div className='sticky top-8 space-y-6'>
                {/* Event Info Card */}
                <div className='bg-muted/50 dark:bg-muted/30 rounded-xl p-6 space-y-4'>
                  <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>
                    Event Details
                  </h3>

                  {/* Date */}
                  <div className='flex items-start gap-3'>
                    <FaCalendarAlt className={`text-xl mt-1 ${textMuted}`} />
                    <div>
                      <p className={`text-sm ${textMuted}`}>Date</p>
                      <p className={`font-semibold ${textPrimary}`}>
                        {formatDisplayDate(event.date)}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className='flex items-start gap-3'>
                    <FaClock className={`text-xl mt-1 ${textMuted}`} />
                    <div>
                      <p className={`text-sm ${textMuted}`}>Time</p>
                      <p className={`font-semibold ${textPrimary}`}>
                        {event.time} IST
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className='flex items-start gap-3'>
                    <FaMapMarkerAlt className={`text-xl mt-1 text-red-500`} />
                    <div>
                      <p className={`text-sm ${textMuted}`}>Venue</p>
                      <p className={`font-semibold ${textPrimary}`}>
                        {event.venue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {event.status === 'upcoming' && (
                  <div className='space-y-3'>
                    {event.registrationUrl && (
                      <Button
                        variant='default'
                        className='w-full rounded-xl h-12 text-base'
                        asChild
                      >
                        <a
                          href={event.registrationUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Register for Event
                        </a>
                      </Button>
                    )}
                    {event.speakerFormUrl && (
                      <Button
                        variant='outline'
                        className='w-full rounded-xl h-12 text-base'
                        asChild
                      >
                        <a
                          href={event.speakerFormUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Become a Speaker
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
