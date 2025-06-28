import React from 'react';
// import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    <div className='md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60'>
      {/* Title */}
      <div className='relative z-10 pt-6 text-center'>
        <h1
          className='text-5xl font-bold tracking-widest mb-28'
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167,139,250,0.5)',
          }}
        >
          Arena
        </h1>
      </div>

      {/* Main Grid */}
      <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>

        {/* Left Column */}
        <div className='md:col-span-1 space-y-4 md:space-y-6'>

          {/* Card 1: NFT Store */}
          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
            <div className='absolute w-full h-full'>
              <img src='/images/bento-card1.png' alt='bento-card' className='w-full h-full object-cover' />
              <button className='absolute bottom-0 h-16 w-full text-2xl font-bold hover:text-yellow-400 cursor-pointer transition-all duration-300 text-nowrap'>
                <i className='bx bx-store-alt'></i> NFT STORE
              </button>
            </div>
          </div>

          {/* Card 2: Video Card */}
          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transition-transform duration-300 hover:scale-105'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              src='/videos/bento-card2.mp4'
            />
          </div>

        </div>

        {/* Right Column */}
        <div className='md:col-span-2 space-y-4 md:space-y-6'>

          {/* Cards 3-5 in Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>

            {/* Card 3 */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transition-transform duration-300 hover:scale-105'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='/videos/bento-card3.mp4'
              />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white'>
                Scoriox
              </h1>
            </div>

            {/* Card 4 */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transition-transform duration-300 hover:scale-105'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='/videos/bento-card4.mp4'
              />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white'>
                Floralynx
              </h1>
            </div>

            {/* Card 5 */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transition-transform duration-300 hover:scale-105'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='/videos/bento-card5.mp4'
              />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white'>
                Titanor
              </h1>
            </div>

          </div>
           {/* card-6 bottom large card */}
          <div className='relative overflow-hidden rounded-3xl border border-white  aspect-[16/9]
          md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]'>
            <img src='/images/bento-card5.png'/>

            <button className='absolute bottom-0 h-16 w-full text-2xl font-bold hover:text-yellow-400 cursor-pointer transition-all duration-300 text-nowrap'>
            {/* <i className='bx bx-link-external' style='color:#ffffff'></i> */}

            <i className='bx bx-link-external' style= {{color:'#ffffff'}}></i> Buy Now


            </button>
           


          </div>

        </div>

      </div>
    </div>
  );
};

export default Arena;
