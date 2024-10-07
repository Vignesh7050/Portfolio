'use client';

import { textConstants } from '@/utils';
import { useDisclosure } from '@nextui-org/react';
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
            onPress={onOpen}
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
