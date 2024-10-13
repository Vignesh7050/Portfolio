'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { useDisclosure } from '@nextui-org/react';

import { textConstants } from '@/utils';
import { SectionContainer } from '../sectionContainer';
import { HobbiesDialog } from './hobbiesDialog';
import { ButtonWrapper } from '../base-components/buttonWrapper';
import { ImageWrapper } from '../base-components/imageWrapper';
import { IMAGES } from '@/assets/images';

export const Hobbies = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <SectionContainer id='hobbies' headerName={textConstants.hobbies}>
        <div className='flex justify-center'>
          <ButtonWrapper
            onPress={() => {
              onOpen();
              sendGAEvent('event', 'painting_hobby_button_pressed', {
                value: 'Painints Viewed',
              });
            }}
            endContent={
              <ImageWrapper
                src={IMAGES.paintBushImg}
                alt={textConstants.paintings}
                width={18}
                height={18}
              />
            }
          >
            {textConstants.clickToViewMyPaintings}
          </ButtonWrapper>
        </div>
      </SectionContainer>
      <HobbiesDialog isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
