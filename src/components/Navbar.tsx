import React from 'react';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Navbar = () => {
  const navItems = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'Contact', path: '/contact'},
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-blue-600">
            MHB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation using details/summary */}
          <details className="md:hidden">
            <summary className="list-none">
              <Menu className="h-6 w-6" />
            </summary>
            <div className="absolute left-0 right-0 bg-white shadow-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
