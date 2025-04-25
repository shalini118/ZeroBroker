import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-32'>
        <ImSpinner2 className='animate-spin text-violet-700 text-4xl' />
      </div>
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-500 mt-48'>
        Sorry, no properties found. Try adjusting your filters.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14'>
          {houses.map((house) => (
            <Link to={`/property/${house.id}`} key={house.id} className='hover:scale-105 transform transition-all duration-300'>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
