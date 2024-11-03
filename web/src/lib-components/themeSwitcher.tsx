'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { Selection } from '@nextui-org/react';

import { IMAGES } from '@/assets/images';
import { ThemeItem, themes } from '@/utils';
import { ImageWrapper } from './base-components/imageWrapper';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([theme || ''])
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <div>
          <ImageWrapper
            className='cursor-pointer'
            src={IMAGES.settingsIcon}
            alt='settings'
            width={18}
            height={18}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='theme selection'
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {themes.map((item: ThemeItem) => {
          return (
            <DropdownItem key={item.key} onPress={() => setTheme(item.key)}>
              {item.value}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export { ThemeSwitcher };
