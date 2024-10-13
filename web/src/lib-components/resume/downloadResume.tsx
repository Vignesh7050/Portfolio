'use client';

import { sendGAEvent } from '@next/third-parties/google';

import { IMAGES } from '@/assets/images';
import { externalLinks, textConstants } from '@/utils';
import { ButtonWrapper, ImageWrapper } from '..';

export const DownloadResume = () => {
  return (
    <ButtonWrapper
      onPress={() => {
        sendGAEvent('event', 'resume_download_button_pressed', {
          value: 'Resume Downloaded',
        });
      }}
      href={externalLinks.resumeDownload}
      endContent={
        <ImageWrapper
          src={IMAGES.downloadIcon}
          alt={textConstants.downloadResume}
          width={18}
          height={18}
        />
      }
    >
      {textConstants.download}
    </ButtonWrapper>
  );
};
