"use client";

import siteData from "@/data/site.json";
import EventCard from "./ui/eventCard";

const Events = () => {
  const { events } = siteData;

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events to learn, network, and grow together
          </p>

          {events.length === 0 && (
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-4">
              Coming Soon
            </h3>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>

        {/* View All Button */}
        {/* <div className='text-center'>
          <Button
            size='lg'
            variant='outline'
            className='border-border hover:bg-accent hover:text-accent-foreground rounded-xl h-12'
          >
            View All Events
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Events;
