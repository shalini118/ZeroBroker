import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 bg-gradient-to-r from-violet-100 to-white'>
      <div className='flex flex-col lg:flex-row items-center'>

        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-tight mb-6 animate-fade-in-up'>
            Skip the <span className='text-violet-700'>Middleman</span>, Not the Perfect Home.
          </h1>
          <p className='max-w-[480px] mb-6 text-lg text-gray-700'>
            Find a space that fits your style, your budget, and your life—with zero brokerage.
          </p>
        </div>

        <div className='hidden lg:flex flex-1 justify-end items-end'>
          <img src={Image} alt='House banner' className='w-full max-w-md' />
        </div>
      </div>

      <div className='mt-6 px-4'>
        <Search />
      </div>
    </section>
  );
};

export default Banner;
