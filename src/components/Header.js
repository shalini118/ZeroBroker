import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-6 border-b bg-[#fef6fb]'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <p className='text-2xl font-bold'>ZeroBroker</p>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;