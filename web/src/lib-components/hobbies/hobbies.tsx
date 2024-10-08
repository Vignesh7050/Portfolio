'use client';

import { textConstants } from '@/utils';
import { useDisclosure } from '@nextui-org/react';
import { SectionContainer } from '../sectionContainer';
import { HobbiesDialog } from './hobbiesDialog';
import { ButtonWrapper } from '../base-components/buttonWrapper';
import { ImageWrapper } from '../base-components/imageWrapper';
import { IMAGES } from '@/assets/images';
import { sendGAEvent } from '@next/third-parties/google';

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
