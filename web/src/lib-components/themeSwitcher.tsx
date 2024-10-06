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
import Image from 'next/image';
import { IMAGES } from '@/assets/images';
import { ThemeItem, themes } from '@/utils';

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
        <Image
          className='cursor-pointer'
          src={IMAGES.settingsIcon}
          alt='settings'
          priority
          width={20}
          height={20}
        />
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
