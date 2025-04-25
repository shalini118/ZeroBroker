import React from 'react';

const Footer = () => {
  return (
    <footer className='py-12 text-center text-gray-800'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-semibold'>
            Made with <span className='text-red-500'>&#9829;</span> by{' '}
            <span className='font-bold text-violet-700'>Shalini</span>
          </p>
        </div>
        <div className='mt-4'>
          <ul className='flex justify-center gap-6'>
            <li>
              <a
                href="#"
                className='text-grey-500 transition-all duration-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className='text-grey-500 transition-all duration-300'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className='text-grey-500 transition-all duration-300'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-6 text-sm'>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
