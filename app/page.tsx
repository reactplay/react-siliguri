import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950'>
      {/* Navigation */}
      <nav className='flex items-center justify-between p-6'>
        <div className='flex items-center space-x-2'>
          <Image
            src='/logo.svg'
            alt='React Siliguri'
            width={40}
            height={40}
            className='h-12 w-auto rounded-full'
          />
        </div>
        <div className='hidden md:flex items-center space-x-6 text-sm'>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Home
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Core Team
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Contributors
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Events
          </a>
        </div>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
          Join the Community
        </button>
      </nav>

      {/* Hero Section */}
      <main className='container mx-auto px-6 pt-20 pb-32'>
        <div className='max-w-4xl'>
          <div className='mb-4'>
            <span className='inline-block bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium'>
              Community • Events • Learning
            </span>
          </div>

          <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            React Siliguri
          </h1>

          <h2 className='text-4xl md:text-5xl font-bold mb-8'>
            <span className='text-blue-400'>Build.</span>{' '}
            <span className='text-green-400'>Learn.</span>{' '}
            <span className='text-cyan-400'>Connect.</span>
          </h2>

          <p className='text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed'>
            A modern hub for React developers in Siliguri. Join our meetups,{' '}
            <span className='text-blue-400 font-medium'>talks</span>, and{' '}
            <span className='text-green-400 font-medium'>workshops</span> to
            grow your skills and network with the community.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center'>
              Join the Community
            </button>
            <button className='border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors'>
              See Upcoming Events
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
