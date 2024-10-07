'use client';

import { IMAGES } from '@/assets/images';
import { sendGAEvent } from '@next/third-parties/google';

import { externalLinks, textConstants } from '@/utils';
import { ButtonWrapper, ImageWrapper } from '..';

export const DownloadResume = () => {
  return (
    <ButtonWrapper
      onPress={() =>
        sendGAEvent({ event: 'buttonPressed', value: 'Resume Downloaded' })
      }
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
