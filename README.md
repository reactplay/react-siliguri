# React Siliguri - Community Website

A modern community website for React developers in Siliguri. Built with Next.js 15, TailwindCSS v4, and Shadcn/UI.

## 🚀 Features

- **Modern Design**: Dark theme with blue accent colors inspired by React Kolkata
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based**: Modular components for easy maintenance and updates
- **Data-Driven**: Centralized data management through JSON configuration
- **Type-Safe**: Full TypeScript support for better development experience
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4 + Shadcn/UI
- **Icons**: React Icons + Lucide React
- **Language**: TypeScript
- **Font**: Geist Sans & Mono

## 📁 Project Structure

```
react-siliguri/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── Navbar.tsx         # Navigation with social icons
│   ├── Hero.tsx           # Hero section with stats
│   ├── Events.tsx         # Events/meetups section
│   ├── Team.tsx           # Core team & contributors
│   ├── Testimonials.tsx   # Community testimonials
│   └── Footer.tsx         # Footer with links
├── data/                  # Static data files
│   └── site.json         # Site configuration & content
├── types/                 # TypeScript type definitions
└── public/               # Static assets
    └── logo.svg         # React Siliguri logo
```

## 🎨 Components Overview

### Navbar
- Sticky navigation with mobile menu
- Social media icons (GitHub, Twitter, Discord, Telegram, LinkedIn)
- Responsive design with hamburger menu

### Hero Section
- Large title with colorful subtitle
- Community stats display
- Call-to-action buttons
- Animated scroll indicator

### Events Section
- Event cards with registration progress
- Event type badges (Workshop, Meetup, Talk)
- Speaker information and venue details
- Status indicators (upcoming, completed)

### Team Section
- Core team member profiles
- Contributors grid with contribution counts
- Social media links for team members

### Testimonials
- Community member testimonials
- Star ratings and profile avatars
- Responsive grid layout

## 🔧 Configuration

All site content can be easily updated through the `data/site.json` file:

- Site metadata (name, description, logo)
- Navigation items
- Social media links
- Hero section content and stats
- Events and meetup information
- Team member profiles
- Testimonials

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-siliguri
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Content
Edit `data/site.json` to update:
- Site information
- Navigation links
- Social media URLs
- Events and team data
- Testimonials

### Styling
- TailwindCSS classes for quick styling changes
- Custom color scheme in `app/globals.css`
- Responsive breakpoints already configured

### Adding Components
1. Create new component in `components/` directory
2. Import and use in `app/page.tsx`
3. Add TypeScript interfaces in `types/site.ts` if needed

## 🌟 Key Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with animated elements
- ✅ Events section with registration tracking
- ✅ Team and contributors showcase
- ✅ Testimonials with rating system
- ✅ Social media integration
- ✅ Dark theme with blue accents
- ✅ TypeScript support
- ✅ Performance optimized
- ✅ SEO friendly structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

React Siliguri Community
- Website: [https://reactsiliguri.dev](https://reactsiliguri.dev)
- GitHub: [@reactsiliguri](https://github.com/reactsiliguri)
- Discord: [Join our Discord](https://discord.gg/reactsiliguri)

---

Built with ❤️ by the React Siliguri community