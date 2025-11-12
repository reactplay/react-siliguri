'use client';

const Events = () => {
  return (
    <section id='events' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Events
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Join our community events to learn, network, and grow together
          </p>

          <h3 className='text-3xl md:text-4xl font-bold text-foreground mb-4 mt-4'>
            Coming Soon
          </h3>
        </div>

        {/* Events Grid */}
        {/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12'>
          {events.map((event) => (
            <div
              key={event.id}
              className='bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group shadow-sm'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      event.status
                    )}`}
                  >
                    {event.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>

              <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors'>
                {event.title}
              </h3>

              <p className='text-muted-foreground mb-4 line-clamp-2'>
                {event.description}
              </p>

              <div className='space-y-2 mb-4'>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <FaCalendarAlt className='h-4 w-4 mr-2 text-primary' />
                  {formatDate(event.date)}
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <FaClock className='h-4 w-4 mr-2 text-accent' />
                  {event.time}
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <FaMapMarkerAlt className='h-4 w-4 mr-2 text-destructive' />
                  {event.venue}
                </div>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <FaUser className='h-4 w-4 mr-2 text-info' />
                  {event.speaker}
                </div>
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-border'>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <FaUsers className='h-4 w-4 mr-2' />
                  {event.registrations}/{event.maxCapacity} registered
                </div>
                <div className='w-full max-w-[100px] bg-muted rounded-full h-2 ml-3'>
                  <div
                    className='bg-primary h-2 rounded-full transition-all duration-300'
                    style={{
                      width: `${
                        (event.registrations / event.maxCapacity) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              {event.status === 'upcoming' && (
                <Button className='w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12'>
                  Register Now
                </Button>
              )}
            </div>
          ))}
        </div> */}

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
