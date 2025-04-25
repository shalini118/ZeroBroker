import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

import { HouseContext } from './HouseContext';

import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <section className='px-4 mt-10'>
      <div className='text-center mb-6'>
        <h3 className='text-2xl font-semibold text-gray-800'>Start Your Search</h3>
      </div>

      <div className='py-6 px-4 lg:px-8 max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-x-3 bg-white shadow-lg rounded-2xl'>
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />

        <button
          onClick={handleClick}
          className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[180px] h-16 rounded-lg flex items-center justify-center text-white text-lg font-medium gap-2'
        >
          <RiSearch2Line size={22} />
          Search Now
        </button>
      </div>
    </section>
  );
};

export default Search;
