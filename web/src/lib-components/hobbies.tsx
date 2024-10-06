'use client';

import { textConstants } from '@/utils';
import { Button, useDisclosure } from '@nextui-org/react';
import { SectionContainer } from './sectionContainer';
import { HobbiesDialog } from './hobbiesDialog';

export const Hobbies = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <SectionContainer id='hobbies' headerName={textConstants.hobbies}>
        <div className='flex justify-center'>
          <Button
            className='border border-dotted text-foreground w-fit'
            onPress={onOpen}
            size='md'
            variant='bordered'
            color='secondary'
          >
            {textConstants.clickToViewMyPaintings}
          </Button>
        </div>
      </SectionContainer>
      <HobbiesDialog isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
