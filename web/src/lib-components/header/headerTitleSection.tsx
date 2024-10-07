'use client';

import { IMAGES } from '@/assets/images';
import Image from 'next/image';
import { Dialog } from '../base-components/dialog';
import { Tooltip, useDisclosure } from '@nextui-org/react';

export const HeaderTitleSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className='flex items-center gap-4'>
      <ProfileImg
        className='flex w-9 h-9 rounded-full cursor-pointer'
        tooltipContent='Click to View'
        onClick={onOpen}
      />
      {isOpen && (
        <Dialog
          dialogSize='md'
          scrollBehavior={'normal'}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText='Vignesh Acharya'
        >
          <ProfileImg className='w-full' isDisabled={true} />
        </Dialog>
      )}
    </div>
  );
};

const ProfileImg = (props: any) => {
  const { className, tooltipContent, onClick, isDisabled = false } = props;
  return (
    <Tooltip
      isDisabled={isDisabled}
      content={tooltipContent}
      className='bg-foreground text-background'
    >
      <Image
        className={className}
        src={IMAGES.profile}
        alt='profile image'
        priority
        onClick={onClick}
      />
    </Tooltip>
  );
};
