export interface SiteData {
  site: {
    name: string;
    tagline: string;
    description: string;
    url: string;
    logo: string;
  };
  navigation: NavigationItem[];
  social: Record<string, string>;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stats: Stat[];
  };
  events: Event[];
  team: TeamMember[];
  contributors: Contributor[];
  testimonials: Testimonial[];
}

export interface NavigationItem {
  name: string;
  href: string;
  active: boolean;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  registrations: number;
  maxCapacity: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: Record<string, string>;
}

export interface Contributor {
  id: number;
  name: string;
  avatar: string;
  contributions: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}