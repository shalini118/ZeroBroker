import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className="container pt-12 mx-auto min-h-screen mb-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">{property.name}</h2>
          <h3 className="text-lg text-gray-600 mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-4 text-sm">
          <div className="bg-green-500 text-white rounded-full px-4 py-2 inline-block">
            {property.type}
          </div>
          <div className="bg-violet-500 text-white rounded-full px-4 py-2 inline-block">
            {property.country}
          </div>
        </div>
        <div className="text-4xl font-semibold text-violet-600">${property.price}</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 max-w-full">
          <div className="mb-8">
            <img src={property.imageLg} alt="Property" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex gap-x-8 text-violet-700 mb-6">
            <div className="flex items-center gap-x-2">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms} Beds</div>
            </div>
            <div className="flex items-center gap-x-2">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms} Baths</div>
            </div>
            <div className="flex items-center gap-x-2">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface} sq ft</div>
            </div>
          </div>
          <p className="text-lg text-gray-700">{property.description}</p>
        </div>
        <div className="lg:w-1/3 max-w-full bg-white border border-gray-300 rounded-lg shadow-md p-6">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={property.agent.image} alt="Agent" className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-lg text-gray-800">{property.agent.name}</div>
              <Link to="/" className="text-violet-700 text-sm hover:underline">View listings</Link>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-violet-700 rounded-lg w-full p-4 text-sm outline-none"
              type="text"
              placeholder="Name*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded-lg w-full p-4 text-sm outline-none"
              type="email"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded-lg w-full p-4 text-sm outline-none"
              type="tel"
              placeholder="Phone*"
            />
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded-lg w-full p-4 h-36 text-sm outline-none resize-none"
              placeholder="Message*"
              defaultValue="Hello, I am interested in [Modern apartment]"
            />
            <div className="flex gap-x-4 mt-4">
              <button
                className="bg-violet-700 hover:bg-violet-800 text-white rounded-lg py-3 text-sm w-full transition"
                type="submit"
              >
                Send Message
              </button>
              <button
                className="border border-violet-700 text-violet-700 hover:border-violet-600 hover:text-violet-600 rounded-lg py-3 text-sm w-full transition"
                type="button"
              >
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
