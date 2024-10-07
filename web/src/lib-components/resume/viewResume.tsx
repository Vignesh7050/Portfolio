'use client';

import React from 'react';
import { useDisclosure } from '@nextui-org/react';

import { IMAGES } from '@/assets/images';
import { Dialog } from '../base-components/dialog';
import { textConstants } from '@/utils';
import { ButtonWrapper } from '../base-components/buttonWrapper';
import { ImageWrapper } from '../base-components/imageWrapper';
import { ResumeIFrame } from './resumeIFrame';
import { DownloadResume } from '..';

export const ViewResume = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ButtonWrapper
        onPress={onOpen}
        endContent={
          <ImageWrapper
            src={IMAGES.viewFileIcon}
            alt={textConstants.viewResume}
            width={18}
            height={18}
          />
        }
      >
        {textConstants.viewResume}
      </ButtonWrapper>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText={
            <div className='flex gap-2 items-center'>
              <p>{textConstants.viewResume}</p>
            </div>
          }
          dialogSize='4xl'
          scrollBehavior='outside'
          footerContentButtonLeft={<DownloadResume />}
        >
          <ResumeIFrame />
        </Dialog>
      )}
    </>
  );
};
