import Link from 'next/link';
import { navItems } from '@/utils/navItems';
import React from 'react';
import { KeyValuePair } from '@/utils';

export const HeaderNavSection = () => {
  return (
    <nav className='flex justify-between items-center h-fit text-sm font-bold'>
      <ul className='flex list-none gap-x-6'>
        {navItems.map((item: KeyValuePair) => {
          return (
            <li key={item.id} className='hover:text-nav-item-hover'>
              <Link href={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
