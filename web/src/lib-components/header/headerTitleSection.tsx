'use client';

import { useDisclosure } from '@nextui-org/react';

import { IMAGES } from '@/assets/images';
import { Dialog } from '../base-components/dialog';
import { ImageWrapper } from '../base-components/imageWrapper';
import { TooltipWrapper } from '../base-components/tooltipWrapper';

export const HeaderTitleSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className='flex items-center gap-4'>
      <ProfileImg
        className='flex w-12 h-12 rounded-full cursor-pointer'
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
          <ProfileImg className='w-full rounded-lg' isDisabled={true} />
        </Dialog>
      )}
    </div>
  );
};

const ProfileImg = (props: any) => {
  const { className, tooltipContent, onClick, isDisabled = false } = props;
  return (
    <TooltipWrapper isDisabled={isDisabled} content={tooltipContent}>
      <div>
        <ImageWrapper
          className={className}
          src={IMAGES.profile}
          alt='profile image'
          onClick={onClick}
        />
      </div>
    </TooltipWrapper>
  );
};
