import React, { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaArrowRight,
} from 'react-icons/fa';
import { useTheme } from '../ThemeProvider';
import { Button } from './button';
import Image from 'next/image';
import Link from 'next/link';

interface Speaker {
  id: number;
  name: string;
  image: string;
  designation: string;
  company: string;
  sessionTitle: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

interface Event {
  id: number;
  imageUrl?: string;
  title: string;
  date: string;
  time: string;
  description: string;
  venue: string;
  speaker: string;
  status: 'upcoming' | 'past';
  registrationUrl?: string;
  speakerFormUrl?: string;
  speakers?: Speaker[];
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

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

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  // Format like: Sat, Dec 13
  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const dayName = date.toLocaleString('en-US', { weekday: 'short' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${dayName}, ${month} ${day}`;
  };

  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 sm:max-w-full md:max-w-full w-full border border-transparent hover:border-primary/20`}
    >
      <Link href={`/events/${event.id}`} className='block cursor-pointer'>
        {/* Banner image */}
        <div className='h-48 w-full bg-gray-300 dark:bg-gray-700 rounded-4xl relative overflow-hidden'>
          <Image
            src={event.imageUrl || '/placeholder.jpg'}
            alt={event.title}
            fill
            className='h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Content */}
        <div className='p-5'>
          {/* Date + Time */}
          <p className={`text-sm flex items-center gap-2 ${textMuted}`}>
            <FaCalendarAlt className={textMuted} />
            {formatDisplayDate(event.date)} · {event.time} IST
          </p>

          {/* Title */}
          <h3 className={`text-xl font-bold mt-2 leading-tight ${textPrimary}`}>
            {event.title}
          </h3>

          {/* Description */}
          <p className={`mt-1 line-clamp-2 ${textSecondary}`}>
            {event.description}
          </p>

          {/* Location */}
          <div className={`mt-3 flex items-center text-sm ${textSecondary}`}>
            <FaMapMarkerAlt className='text-red-500 mr-2' />
            {event.venue}
          </div>

          {/* View Details Link */}
          <div
            className={`mt-4 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all`}
          >
            <span>View Event Details</span>
            <FaArrowRight className='text-xs' />
          </div>
        </div>
      </Link>

      {/* Register button - Outside Link to prevent nested anchor tags */}
      <div className='px-5 pb-5'>
        {event.status === 'upcoming' && (
          <>
            <Button
              variant={'outline'}
              className='w-full mt-4 rounded-xl h-12 text-base'
              disabled={event.registrationUrl ? false : true}
            >
              <a
                href={event.registrationUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full'
              >
                Register for Event
              </a>
            </Button>
            <Button
              className='w-full mt-4 rounded-xl h-12 text-base'
              disabled={event.speakerFormUrl ? false : true}
            >
              <a
                href={event.speakerFormUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full'
              >
                Become a Speaker
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
