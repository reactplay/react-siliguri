import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Team from '@/components/Team';
import CommunityPartners from '@/components/CommunityPartners';
// import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <CommunityPartners />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
