import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md'>
      <div className='logo mx-5'>
        <Link legacyBehavior href='/'>
          <a>
            <Image src='/logo.png' width={80} height={40} alt='' />
          </a>
        </Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-4 font-bold md:text-xl'>
          <li>
            <Link legacyBehavior href='/tshirts' passHref>
              <a>Tshirts</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/hoodies' passHref>
              <a>Hoodies</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/stickers' passHref>
              <a>Stickers</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/mugs' passHref>
              <a>Mugs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='cart absolute right-0 top-6 mx-5'>
        <AiOutlineShoppingCart className='text-xl md:text-3xl' />
      </div>
    </div>
  );
};

export default Navbar;

