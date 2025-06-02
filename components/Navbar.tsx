'use client';

import Link from 'next/link';
import Button from './Button';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Counter', href: '/counter' },
    { name: 'Product', href: '/product' },
    { name: 'Doc', href: '/doc' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-secondary py-4 shadow-md'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-primary font-bold text-3xl'>
          SR Rony
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6 text-primary'>
          {menu.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== '/');

            return (
              <Link
                key={index}
                href={item.href}
                className={`relative after:h-1 after:bg-primary after:absolute after:left-0 after:-bottom-1 transition-all ${
                  isActive
                    ? 'after:w-full text-primary'
                    : 'after:w-0 hover:after:w-full text-green-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Login */}
        <div className='hidden md:block'>
          <Button
            onClick={() => router.push('/login')}
            className='py-1 px-5 rounded-md cursor-pointer bg-primary text-white'
            text='Login'
          />
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pt-4 pb-6 space-y-3 text-primary'>
          {menu.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== '/');

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${
                  isActive ? 'text-primary' : 'text-green-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Button
            onClick={() => {
              setIsOpen(false);
              router.push('/login');
            }}
            className='w-full py-2 rounded-md bg-primary text-white mt-2'
            text='Login'
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;