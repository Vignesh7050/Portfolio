'use client';

import Link from 'next/link';
import { navItems } from '@/utils/navItems';
import React from 'react';
import { KeyValuePair } from '@/utils';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { IMAGES } from '@/assets/images';
import Image from 'next/image';

export const HeaderNavSection = () => {
  const [navItemSelected, setNavItemSelected] = React.useState('#home');

  const handleNavItemClick = (item: KeyValuePair) => {
    setNavItemSelected(item.path);
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavItemSelected(location.hash || '#home');
    }
  }, []);

  return (
    <>
      <nav className='flex justify-between items-center h-fit text-sm font-bold hidden w-full md:block md:w-auto'>
        <ul className='flex list-none gap-x-6'>
          {navItems.map((item: KeyValuePair) => {
            return (
              <li
                key={item.id}
                className={`hover:text-nav-item-hover ${
                  navItemSelected === item.path ? 'text-nav-item-selected' : ''
                }`}
                onClick={() => handleNavItemClick(item)}
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='block md:hidden'>
        <Dropdown>
          <DropdownTrigger>
            <Image
              className='cursor-pointer'
              src={IMAGES.dropdownIcon}
              alt='Menu'
              priority
              width={30}
              height={30}
            />
          </DropdownTrigger>
          <DropdownMenu>
            {navItems.map((item: KeyValuePair) => {
              return (
                <DropdownItem
                  key={item.id}
                  href={item.path}
                  className={` ${
                    navItemSelected === item.path
                      ? 'text-nav-item-selected'
                      : ''
                  }`}
                  onClick={() => handleNavItemClick(item)}
                >
                  {item.label}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};
